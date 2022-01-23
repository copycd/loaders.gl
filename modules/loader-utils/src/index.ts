// TYPES
export type {
  Loader,
  LoaderWithParser,
  LoaderContext,
  LoaderOptions,
  Writer,
  WriterOptions,
  DataType,
  SyncDataType,
  BatchableDataType,
  IFileSystem,
  IRandomAccessReadFileSystem
} from './types.js';

// GENERAL UTILS
export {assert} from './lib/env-utils/assert.js';
export {
  isBrowser,
  isWorker,
  nodeVersion,
  self,
  window,
  global,
  document
} from './lib/env-utils/globals.js';

// LOADERS.GL-SPECIFIC WORKER UTILS
export {createLoaderWorker} from './lib/worker-loader-utils/create-loader-worker.js';
export {parseWithWorker, canParseWithWorker} from './lib/worker-loader-utils/parse-with-worker.js';

// PARSER UTILS
export {parseJSON} from './lib/parser-utils/parse-json.js';

// MEMORY COPY UTILS
export {
  toArrayBuffer,
  sliceArrayBuffer,
  concatenateArrayBuffers,
  concatenateTypedArrays,
  compareArrayBuffers
} from './lib/binary-utils/array-buffer-utils.js';
export {padToNBytes, copyToArray, copyArrayBuffer} from './lib/binary-utils/memory-copy-utils.js';
export {
  copyPaddedArrayBufferToDataView,
  copyPaddedStringToDataView
} from './lib/binary-utils/binary-copy-utils.js';
export {
  padStringToByteAlignment,
  copyStringToDataView,
  copyBinaryToDataView
} from './lib/binary-utils/encode-utils.js';
export {getFirstCharacters, getMagicString} from './lib/binary-utils/get-first-characters.js';

// ITERATOR UTILS
export {
  makeTextEncoderIterator,
  makeTextDecoderIterator,
  makeLineIterator,
  makeNumberedLineIterator
} from './lib/iterators/text-iterators.js';
export {forEach, concatenateArrayBuffersAsync} from './lib/iterators/async-iteration.js';

// REQUEST UTILS
export {default as RequestScheduler} from './lib/request-utils/request-scheduler.js';

// PATH HELPERS
export {setPathPrefix, getPathPrefix, resolvePath} from './lib/path-utils/file-aliases.js';
export {addAliases as _addAliases} from './lib/path-utils/file-aliases.js';

// MICRO LOADERS
export {JSONLoader} from './json-loader.js';

// NODE support

// Node.js emulation (can be used in browser)

// `path` replacement (avoids bundling big path polyfill)
import * as path from './lib/path-utils/path.js';
export {path};

// Avoid direct use of `Buffer` which pulls in 50KB polyfill
export {isBuffer, toBuffer, bufferToArrayBuffer} from './lib/binary-utils/buffer-utils.js';

// Note.js wrappers (can be safely imported, but not used in browser)

// Use instead of importing 'util'
import * as util from './lib/node/util.js';
export {util};
// TODO - remove
export {promisify} from './lib/node/util.js';

// Use instead of importing 'fs';`
import * as fs from './lib/node/fs.js';
export {fs};

// EXPERIMENTAL
export {default as _NodeFileSystem} from './lib/filesystems/node-filesystem.js';
