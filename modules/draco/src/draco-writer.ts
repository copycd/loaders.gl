import type {Writer} from '@loaders.gl/loader-utils';
import type {DracoMesh} from './lib/draco-types.js';
import type {DracoBuildOptions} from './lib/draco-builder.js';
import DRACOBuilder from './lib/draco-builder.js';
import {loadDracoEncoderModule} from './lib/draco-module-loader.js';
import {VERSION} from './lib/utils/version.js';

export type DracoWriterOptions = DracoBuildOptions & {};

const DEFAULT_DRACO_OPTIONS = {
  pointcloud: false, // Set to true if pointcloud (mode: 0, no indices)
  attributeNameEntry: 'name'
  // Draco Compression Parameters
  // method: 'MESH_EDGEBREAKER_ENCODING',
  // speed: [5, 5],
  // quantization: {
  //   POSITION: 10
  // }
};

/**
 * Exporter for Draco3D compressed geometries
 */
export const DracoWriter: Writer = {
  name: 'DRACO',
  id: 'draco',
  module: 'draco',
  version: VERSION,
  extensions: ['drc'],
  encode,
  options: {
    draco: DEFAULT_DRACO_OPTIONS
  }
};

async function encode(
  data: DracoMesh,
  options: {draco?: DracoWriterOptions} = {}
): Promise<ArrayBuffer> {
  // Dynamically load draco
  const {draco} = await loadDracoEncoderModule(options);
  const dracoBuilder = new DRACOBuilder(draco);

  try {
    return dracoBuilder.encodeSync(data, options.draco);
  } finally {
    dracoBuilder.destroy();
  }
}
