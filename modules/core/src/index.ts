// FILE READING AND WRITING
export {fetchFile} from './lib/fetch/fetch-file.js';

export {readArrayBuffer} from './lib/fetch/read-array-buffer.js';
export {readFileSync} from './lib/fetch/read-file.js';
export {writeFile, writeFileSync} from './lib/fetch/write-file.js';

// CONFIGURATION
export {setLoaderOptions} from './lib/api/set-loader-options.js';
export {registerLoaders} from './lib/api/register-loaders.js';
export {selectLoader, selectLoaderSync} from './lib/api/select-loader.js';

// LOADING (READING + PARSING)
export {parse} from './lib/api/parse.js';
export {parseSync} from './lib/api/parse-sync.js';
export {parseInBatches} from './lib/api/parse-in-batches.js';

export {load} from './lib/api/load.js';
export {loadInBatches} from './lib/api/load-in-batches.js';

// ENCODING (ENCODING AND WRITING)
export {encode, encodeSync, encodeInBatches, encodeText, encodeURLtoURL} from './lib/api/encode.js';
export {save, saveSync} from './lib/api/save.js';

// CORE UTILS SHARED WITH LOADERS (RE-EXPORTED FROM LOADER-UTILS)
export {setPathPrefix, getPathPrefix, resolvePath} from '@loaders.gl/loader-utils';
export {RequestScheduler} from '@loaders.gl/loader-utils';

// ITERATOR UTILS
export {makeIterator} from './iterators/make-iterator/make-iterator.js';
export {makeStream} from './iterators/make-stream/make-node-stream.js';

// CORE LOADERS
export {NullWorkerLoader, NullLoader} from './null-loader.js';
export {JSONLoader} from '@loaders.gl/loader-utils';

// EXPERIMENTAL
export {default as _fetchProgress} from './lib/progress/fetch-progress.js';
export {default as _BrowserFileSystem} from './lib/filesystems/browser-filesystem.js';

// FOR TESTING
export {_unregisterLoaders} from './lib/api/register-loaders.js';

//
// TODO - MOVE TO LOADER-UTILS AND DEPRECATE IN CORE?
//

export {isBrowser, isWorker, self, window, global, document} from '@loaders.gl/loader-utils';
export {assert} from '@loaders.gl/loader-utils';
export {forEach, concatenateArrayBuffersAsync} from '@loaders.gl/loader-utils';

export {
  makeTextDecoderIterator,
  makeTextEncoderIterator,
  makeLineIterator,
  makeNumberedLineIterator
} from '@loaders.gl/loader-utils';

// "JAVASCRIPT" UTILS - move to loader-utils?
export {
  isPureObject,
  isPromise,
  isIterable,
  isAsyncIterable,
  isIterator,
  isResponse,
  isReadableStream,
  isWritableStream
} from './javascript-utils/is-type.js';
