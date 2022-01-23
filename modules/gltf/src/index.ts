/* eslint-disable camelcase, indent */
export type {GLB} from './lib/types/glb-types.js';
export type {
  GLTF,
  GLTFAccessor,
  GLTFBuffer,
  GLTFBufferView,
  GLTFMeshPrimitive,
  GLTFMesh,
  GLTFNode,
  GLTFMaterial,
  GLTFSampler,
  GLTFScene,
  GLTFSkin,
  GLTFTexture,
  GLTFImage,
  GLTFImagePostprocessed,
  // The following extensions are handled by the GLTFLoader and removed from the parsed glTF (disable via options.gltf.excludeExtensions)
  GLTF_KHR_binary_glTF,
  GLTF_KHR_draco_mesh_compression,
  GLTF_KHR_texture_basisu,
  GLTF_EXT_meshopt_compression,
  GLTF_EXT_texture_webp
} from './lib/types/gltf-types.js';

// glTF loader/writer definition objects
export {GLTFLoader} from './gltf-loader.js';
export {GLTFWriter} from './gltf-writer.js';

// GLB Loader & Writer (for custom formats that want to leverage the GLB binary "envelope")
export {GLBLoader} from './glb-loader.js';
export {GLBWriter} from './glb-writer.js';

// glTF Data Access Helper Class
export {default as GLTFScenegraph} from './lib/api/gltf-scenegraph.js';
export {postProcessGLTF} from './lib/api/post-process-gltf.js';
export type {Mesh} from './lib/types/gltf-json-schema.js';
export type {GLTFObject} from './lib/types/gltf-types.js';
