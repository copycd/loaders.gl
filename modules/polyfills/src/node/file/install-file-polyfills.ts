import {ReadableStreamPolyfill} from './readable-stream.js';
import {BlobPolyfill} from './blob.js';
import {FileReaderPolyfill} from './file-reader.js';
import {FilePolyfill} from './file.js';

export function installFilePolyfills() {
  if (typeof ReadableStream === 'undefined' && global) {
    // @ts-ignore;
    global.ReadableStream = ReadableStreamPolyfill;
  }

  if (typeof Blob === 'undefined' && global) {
    // @ts-ignore;
    global.Blob = BlobPolyfill;
  }

  if (typeof FileReader === 'undefined' && global) {
    // @ts-ignore;
    global.FileReader = FileReaderPolyfill;
  }

  // Install minimal Node.js File polyfill
  if (typeof File === 'undefined' && global) {
    // @ts-ignore;
    global.File = FilePolyfill;
  }
}
