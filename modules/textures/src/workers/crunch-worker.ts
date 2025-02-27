import {createLoaderWorker} from '@loaders.gl/loader-utils';
import {CrunchLoader} from '../crunch-loader.js';
import {parseCrunch} from '../lib/parsers/parse-crunch.js';

/**
 * Loader for the Crunch compressed texture container format
 */
export const CrunchLoaderWithParser = {
  ...CrunchLoader,
  parse: parseCrunch
};

createLoaderWorker(CrunchLoaderWithParser);
