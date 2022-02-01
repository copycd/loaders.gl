// COMMON CATEGORY
export type {TypedArray, NumberArray, AnyArray} from './types.js';

export type {Batch} from './category/common.js';

// TABLE CATEGORY TYPES
export type {
  Table,
  ArrayRowTable,
  ObjectRowTable,
  ColumnarTable,
  ArrowTable
} from './category/table/table-types.js';
export type {
  TableBatch,
  RowArrayTableBatch,
  RowObjectTableBatch,
  ColumnarTableBatch,
  ArrowTableBatch
} from './category/table/table-types.js';

// TABLE CATEGORY UTILS
export {default as TableBatchBuilder} from './lib/batches/table-batch-builder.js';
export type {TableBatchAggregator} from './lib/batches/table-batch-aggregator.js';
export {default as RowTableBatchAggregator} from './lib/batches/row-table-batch-aggregator.js';
export {default as ColumnarTableBatchAggregator} from './lib/batches/columnar-table-batch-aggregator.js';

export {convertToObjectRow, convertToArrayRow} from './lib/utils/row-utils.js';

// MESH CATEGORY
export type {
  MeshTable,
  MeshArrowTable,
  Mesh,
  MeshGeometry,
  MeshAttribute,
  MeshAttributes
} from './category/mesh/mesh-types.js';

export {getMeshSize, getMeshBoundingBox} from './category/mesh/mesh-utils.js';
export {convertMesh} from './category/mesh/convert-mesh.js';
export {
  deduceMeshSchema,
  deduceMeshField,
  makeMeshAttributeMetadata
} from './category/mesh/deduce-mesh-schema.js';

// TEXTURES
export type {TextureLevel, GPUTextureFormat} from './category/texture/texture.js';

// IMAGES
export type {ImageDataType, ImageType, ImageTypeEnum} from './category/image/image.js';

// TYPES
// GIS CATEGORY - GEOJSON
export type {GeoJSON, Feature, Geometry, Position, GeoJsonProperties} from './category/gis.js';
export type {
  Point,
  MultiPoint,
  LineString,
  MultiLineString,
  Polygon,
  MultiPolygon,
  GeometryCollection
} from './category/gis.js';

export type {GeojsonGeometryInfo} from './category/gis.js';

// GIS CATEGORY - FLAT GEOJSON
export type {
  FlatFeature,
  FlatIndexedGeometry,
  FlatGeometry,
  FlatGeometryType,
  FlatPoint,
  FlatLineString,
  FlatPolygon
} from './category/gis.js';

// GIS CATEGORY - BINARY
export type {
  BinaryGeometryType,
  BinaryGeometry,
  BinaryPointGeometry,
  BinaryLineGeometry,
  BinaryPolygonGeometry,
  BinaryAttribute
} from './category/gis.js';
export type {
  BinaryFeatures,
  BinaryPointFeatures,
  BinaryLineFeatures,
  BinaryPolygonFeatures
} from './category/gis.js';

// SCHEMA
export {
  Schema,
  Field,
  DataType,
  Null,
  Binary,
  Bool,
  Int,
  Int8,
  Int16,
  Int32,
  Int64,
  Uint8,
  Uint16,
  Uint32,
  Uint64,
  Float,
  Float16,
  Float32,
  Float64,
  Utf8,
  Date,
  DateDay,
  DateMillisecond,
  Time,
  TimeMillisecond,
  TimeSecond,
  Timestamp,
  TimestampSecond,
  TimestampMillisecond,
  TimestampMicrosecond,
  TimestampNanosecond,
  Interval,
  IntervalDayTime,
  IntervalYearMonth,
  FixedSizeList,
  Struct
} from './lib/schema/schema.js';

// EXPERIMENTAL APIs

// SCHEMA UTILS
export {deduceTypeFromColumn, deduceTypeFromValue} from './lib/schema-utils/deduce-column-type.js';
export {getTypeInfo} from './lib/arrow/get-type-info.js';
export {getArrowTypeFromTypedArray} from './lib/arrow/arrow-like-type-utils.js';

export {default as AsyncQueue} from './lib/utils/async-queue.js';
