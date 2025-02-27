import type {LoaderWithParser, LoaderOptions} from '@loaders.gl/loader-utils';
import type {GLB} from './lib/types/glb-types.js';
import type {GLBParseOptions} from './lib/parsers/parse-glb.js';
import {VERSION} from './lib/utils/version.js';
import parseGLBSync from './lib/parsers/parse-glb.js';

export type GLBLoaderOptions = LoaderOptions & {
  glb?: GLBParseOptions;
  byteOffset?: number;
};

/**
 * GLB Loader -
 * GLB is the binary container format for GLTF
 */
export const GLBLoader: LoaderWithParser = {
  name: 'GLB',
  id: 'glb',
  module: 'gltf',
  version: VERSION,
  extensions: ['glb'],
  mimeTypes: ['model/gltf-binary'],
  binary: true,
  parse,
  parseSync,
  options: {
    glb: {
      strict: false // Enables deprecated XVIZ support (illegal CHUNK formats)
    }
  }
};

async function parse(arrayBuffer: ArrayBuffer, options?: GLBLoaderOptions): Promise<GLB> {
  return parseSync(arrayBuffer, options);
}

function parseSync(arrayBuffer: ArrayBuffer, options?: GLBLoaderOptions): GLB {
  const {byteOffset = 0} = options || {};
  const glb: GLB = {} as GLB;
  parseGLBSync(glb, arrayBuffer, byteOffset, options?.glb);
  return glb;
}

// TYPE TESTS - TODO find a better way than exporting junk
export const _TypecheckGLBLoader: LoaderWithParser = GLBLoader;
