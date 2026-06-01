import * as d_astn_deserialize_parse_tree from "astn-core/dist/interface/generated/liana/schemas/deserialize_parse_tree/data"
import * as d_tree_from_chunk from "../../interface/to_be_generated/tree_from_chunk"
import * as d_unmarshall_json from "pareto-json-schema/dist/interface/to_be_generated/unmarshall_json"

export type Error = 
| ['unmarshall serialization chunk', d_unmarshall_json.Error]
| ['tree from chunk', d_tree_from_chunk.Error]

export type Parameter = d_astn_deserialize_parse_tree.Parameters