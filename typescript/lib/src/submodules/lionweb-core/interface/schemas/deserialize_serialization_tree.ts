import type * as s_astn_deserialize_parse_tree from "./deserialize_parse_tree.js"
import type * as s_tree_from_chunk from "./tree_from_chunk.js"
import type * as s_unmarshall_json from "./unmarshall_json.js"

export type Error = 
| ['unmarshall serialization chunk', s_unmarshall_json.Error]
| ['tree from chunk', s_tree_from_chunk.Error]

export type Parameter = s_astn_deserialize_parse_tree.Parameters