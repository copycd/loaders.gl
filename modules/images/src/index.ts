// TYPES
export type {ImageDataType, ImageType, ImageTypeEnum} from './types.js';
export type {ImageLoaderOptions} from './image-loader.js';

// LOADERS AND WRITERS
export {ImageLoader} from './image-loader.js';
export {ImageWriter} from './image-writer.js';

// IMAGE CATEGORY API

// Binary Image API
export {getBinaryImageMetadata} from './lib/category-api/binary-image-api.js';

// Parsed Image API
export {isImageTypeSupported, getDefaultImageType} from './lib/category-api/image-type.js';

export {
  isImage,
  getImageType,
  getImageSize,
  getImageData
} from './lib/category-api/parsed-image-api.js';

// EXPERIMENTAL
export {_isImageFormatSupported} from './lib/category-api/image-format.js';

// DEPRECATED - Remove in V3 (fix dependency in luma.gl)
export {loadImage} from './lib/texture-api/load-image.js';
