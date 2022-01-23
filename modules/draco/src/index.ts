import type {LoaderWithParser} from '@loaders.gl/loader-utils';
import type {DracoMesh, DracoLoaderData} from './lib/draco-types.js';
import type {DracoLoaderOptions} from './draco-loader.js';
import {DracoLoader as DracoWorkerLoader} from './draco-loader.js';
import DracoParser from './lib/draco-parser.js';
import {loadDracoDecoderModule} from './lib/draco-module-loader.js';

// Draco data types

export type {DracoMesh, DracoLoaderData};

// Draco Writer

export type {DracoWriterOptions} from './draco-writer.js';
export {DracoWriter} from './draco-writer.js';

// Draco Loader

export type {DracoLoaderOptions};
export {DracoWorkerLoader};

/**
 * Loader for Draco3D compressed geometries
 */
export const DracoLoader = {
  ...DracoWorkerLoader,
  parse
};

async function parse(arrayBuffer: ArrayBuffer, options?: DracoLoaderOptions): Promise<DracoMesh> {
  const {draco} = await loadDracoDecoderModule(options);
  const dracoParser = new DracoParser(draco);
  try {
    return dracoParser.parseSync(arrayBuffer, options?.draco);
  } finally {
    dracoParser.destroy();
  }
}

// TYPE TESTS - TODO find a better way than exporting junk
export const _TypecheckDracoLoader: LoaderWithParser = DracoLoader;
