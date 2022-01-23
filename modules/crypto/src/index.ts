// import type {WorkerObject} from '@loaders.gl/worker-utils';

export {CRC32Hash} from './lib/crc32-hash.js';
export {CRC32CHash} from './lib/crc32c-hash.js';
export {MD5Hash} from './lib/md5-hash.js';
export {SHA256Hash} from './lib/sha256-hash.js';

export {CryptoHash} from './lib/crypto-hash.js';
export {NodeHash} from './lib/node-hash.js';

export {hexToBase64 as _hexToBase64, toHex as _toHex} from './lib/utils/digest-utils.js';

// __VERSION__ is injected by babel-plugin-version-inline
// @ts-ignore TS2304: Cannot find name '__VERSION__'.
const VERSION = typeof __VERSION__ !== 'undefined' ? __VERSION__ : 'latest';

/**
 * Small, fast worker for CRC32, CRC32c and MD5 Hashes
 */
export const CryptoWorker = {
  id: 'crypto',
  name: 'CRC32, CRC32c and MD5 Hashes',
  module: 'crypto',
  version: VERSION,
  options: {
    crypto: {}
  }
};

/**
 * Large worker for full complement of Cryptographic Hashes
 * bundles the full crypto.js library
 */
export const CryptoJSWorker = {
  id: 'cryptojs',
  name: 'Cryptographic Hashes',
  module: 'crypto',
  version: VERSION,
  options: {
    cryptojs: {}
  }
};
