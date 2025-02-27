import {createWorker} from '@loaders.gl/worker-utils';
import {CRC32Hash} from '../lib/crc32-hash.js';
import {CRC32CHash} from '../lib/crc32c-hash.js';
import {MD5Hash} from '../lib/md5-hash.js';

// Assuming we can bundle as module
export {CRC32Hash, CRC32CHash};

createWorker(async (data, options = {}) => {
  // @ts-ignore
  const {operation} = options;

  switch (operation) {
    case 'crc32':
      return await new CRC32Hash(options).hash(data);
    case 'crc32c':
      return await new CRC32CHash(options).hash(data);
    case 'md5':
      return await new MD5Hash(options).hash(data);
    default:
      throw new Error(`invalid option: ${operation}`);
  }
});
