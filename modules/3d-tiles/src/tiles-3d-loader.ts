import type {LoaderWithParser} from '@loaders.gl/loader-utils';
import {path} from '@loaders.gl/loader-utils';
import {TILESET_TYPE, LOD_METRIC_TYPE} from '@loaders.gl/tiles';
import {VERSION} from './lib/utils/version.js';
import {parse3DTile} from './lib/parsers/parse-3d-tile.js';
import {
  normalizeTileHeaders,
  normalizeImplicitTileHeaders
} from './lib/parsers/parse-3d-tile-header.js';

const IMPLICIT_TILING_EXTENSION_NAME = '3DTILES_implicit_tiling';

/**
 * Loader for 3D Tiles
 */
export const Tiles3DLoader: LoaderWithParser = {
  id: '3d-tiles',
  name: '3D Tiles',
  module: '3d-tiles',
  version: VERSION,
  extensions: ['cmpt', 'pnts', 'b3dm', 'i3dm'],
  mimeTypes: ['application/octet-stream'],
  tests: ['cmpt', 'pnts', 'b3dm', 'i3dm'],
  parse,
  options: {
    '3d-tiles': {
      loadGLTF: true,
      decodeQuantizedPositions: false,
      isTileset: 'auto',
      assetGltfUpAxis: null
    }
  }
};

function getBaseUri(tileset) {
  return path.dirname(tileset.url);
}

async function parseTile(arrayBuffer, options, context) {
  const tile = {
    content: {
      featureIds: null
    }
  };
  const byteOffset = 0;
  await parse3DTile(arrayBuffer, byteOffset, options, context, tile.content);
  return tile.content;
}

async function parseTileset(data, options, context) {
  const tilesetJson = JSON.parse(new TextDecoder().decode(data));
  // eslint-disable-next-line no-use-before-define
  tilesetJson.loader = options.loader || Tiles3DLoader;
  tilesetJson.url = context.url;
  console.log( 'copycd:: parseTileset::tilesetJson.url=' + tilesetJson.url);
  // base path that non-absolute paths in tileset are relative to.
  tilesetJson.basePath = getBaseUri(tilesetJson);
  console.log( "copycd:: parseTileset::tilesetJson.basePath=" + tilesetJson.basePath);

  tilesetJson.root = hasImplicitTilingExtension(tilesetJson)
    ? await normalizeImplicitTileHeaders(tilesetJson)
    : normalizeTileHeaders(tilesetJson);

  tilesetJson.type = TILESET_TYPE.TILES3D;

  tilesetJson.lodMetricType = LOD_METRIC_TYPE.GEOMETRIC_ERROR;
  tilesetJson.lodMetricValue = tilesetJson.root?.lodMetricValue || 0;

  return tilesetJson;
}

async function parse(data, options, context) {
  // auto detect file type
  const loaderOptions = options['3d-tiles'] || {};
  let isTileset;
  if (loaderOptions.isTileset === 'auto') {
    isTileset = context.url && context.url.indexOf('.json') !== -1;
  } else {
    isTileset = loaderOptions.isTileset;
  }

  if (isTileset) {
    data = await parseTileset(data, options, context);
  } else {
    data = await parseTile(data, options, context);
  }

  return data;
}

function hasImplicitTilingExtension(tilesetJson) {
  return (
    tilesetJson?.extensionsRequired?.includes(IMPLICIT_TILING_EXTENSION_NAME) &&
    tilesetJson?.extensionsUsed?.includes(IMPLICIT_TILING_EXTENSION_NAME)
  );
}
