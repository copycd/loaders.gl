/* eslint-disable dot-notation */
import {DOMParser} from '@xmldom/xmldom';
import {isBrowser, global} from './utils/globals.js';

import {TextDecoder, TextEncoder} from './lib/encoding.js';
import {allSettled} from './promise/all-settled.js';

// Node specific
import * as base64 from './node/buffer/btoa.node.js';

import HeadersNode from './node/fetch/headers.node.js';
import ResponseNode from './node/fetch/response.node.js';
import fetchNode from './node/fetch/fetch.node.js';

import {encodeImageNode} from './node/images/encode-image.node.js';
import {parseImageNode} from './node/images/parse-image.node.js';

export {ReadableStreamPolyfill} from './node/file/readable-stream.js';
export {BlobPolyfill} from './node/file/blob.js';
export {FileReaderPolyfill} from './node/file/file-reader.js';
export {FilePolyfill} from './node/file/file.js';
export {installFilePolyfills} from './node/file/install-file-polyfills.js';

// POLYFILLS: TextEncoder, TextDecoder
// - Recent Node versions have these classes but virtually no encodings unless special build.
// - Browser: Edge, IE11 do not have these

const installTextEncoder = !isBrowser || !('TextEncoder' in global);
if (installTextEncoder) {
  global['TextEncoder'] = TextEncoder;
}

const installTextDecoder = !isBrowser || !('TextDecoder' in global);
if (installTextDecoder) {
  global['TextDecoder'] = TextDecoder;
}

// POLYFILLS: btoa, atob
// - Node: Yes
// - Browser: No

if (!isBrowser && !('atob' in global) && base64.atob) {
  global['atob'] = base64.atob;
}
if (!isBrowser && !('btoa' in global) && base64.btoa) {
  global['btoa'] = base64.btoa;
}

// POLYFILL: fetch
// - Node: Yes
// - Browser: No. For This polyfill is node only, IE11 etc, install external polyfill

if (!isBrowser && !('Headers' in global) && HeadersNode) {
  global['Headers'] = HeadersNode;
}

if (!isBrowser && !('Response' in global) && ResponseNode) {
  global['Response'] = ResponseNode;
}

if (!isBrowser && !('fetch' in global) && fetchNode) {
  global['fetch'] = fetchNode;
}

// POLYFILL: DOMParser
// - Node: Yes
// - Browser: No

if (!isBrowser && !('DOMParser' in global) && DOMParser) {
  global['DOMParser'] = DOMParser;
}

// NODE IMAGE FUNCTIONS:
// These are not official polyfills but used by the @loaders.gl/images module if installed
// TODO - is there an appropriate Image API we could polyfill using an adapter?

if (!isBrowser && !('_encodeImageNode' in global) && encodeImageNode) {
  global['_encodeImageNode'] = encodeImageNode;
}

if (!isBrowser && !('_parseImageNode' in global) && parseImageNode) {
  global['_parseImageNode'] = parseImageNode;
}

if (!('allSettled' in Promise)) {
  // @ts-ignore
  Promise.allSettled = allSettled;
}
