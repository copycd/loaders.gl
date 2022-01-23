//
import {CryptoHash} from './crypto-hash.js';

type CryptoHashOptions = {
  modules: {[moduleName: string]: any};
  crypto?: {
    onEnd?: (result: {hash: string}) => any;
  };
};

/**
 * A transform that calculates Cryptographic Hash
 */
export class SHA256Hash extends CryptoHash {
  constructor(options: CryptoHashOptions) {
    super({...options, crypto: {...options.crypto, algorithm: 'SHA256'}});
  }
}
