import type {Loader, LoaderWithParser} from '@loaders.gl/loader-utils';
import {VERSION} from './lib/utils/version.js';
import parseBasis from './lib/parsers/parse-basis.js';

/**
 * Worker loader for Basis super compressed textures
 */
export const BasisWorkerLoader = {
  name: 'Basis',
  id: 'basis',
  module: 'textures',
  version: VERSION,
  worker: true,
  extensions: ['basis', 'ktx2'],
  mimeTypes: ['application/octet-stream', 'image/ktx2'],
  tests: ['sB'],
  binary: true,
  options: {
    basis: {
      format: 'auto', // gl context doesn't exist on a worker thread
      libraryPath: 'libs/',
      containerFormat: 'auto', // 'basis' || 'ktx2' || 'auto'
      module: 'transcoder' // 'transcoder' || 'encoder'
    }
  }
};

/**
 * Loader for Basis super compressed textures
 */
export const BasisLoader = {
  ...BasisWorkerLoader,
  parse: parseBasis
};

// TYPE TESTS - TODO find a better way than exporting junk
export const _TypecheckBasisWorkerLoader: Loader = BasisWorkerLoader;
export const _TypecheckBasisLoader: LoaderWithParser = BasisLoader;
