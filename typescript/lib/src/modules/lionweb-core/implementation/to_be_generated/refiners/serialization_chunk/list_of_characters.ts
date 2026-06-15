import * as p_i from 'pareto-core/dist/interface/refiner'


//data types
import * as d_out from "../../../../../../interface/generated/liana/schemas/serialization_chunk/data"
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"
import * as d_unmarshall_json from "pareto-json/dist/interface/to_be_generated/unmarshall_json"
import * as d_deserialize_parse_tree from "astn-core/dist/interface/generated/liana/schemas/deserialize_parse_tree/data"

//dependencies
// import * as r_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/refiners/unmarshalled/parse_tree"
import * as r_from_json from "./json"
import * as r_json_from_list_of_characters from "pareto-json/dist/implementation/manual/refiners/json_with_parse_info/list_of_characters"

export const Serialization_Chunk: p_i.Refiner_With_Parameter<
    d_out.Serialization_Chunk,
    d_unmarshall_json.Error,
    d_in.List_of_Characters,
    d_deserialize_parse_tree.Parameters
> = ($, abort, $p): d_out.Serialization_Chunk => r_from_json.Serialization_Chunk(
    r_json_from_list_of_characters.Value(
        $,
        ($) => abort(['deserialize', $]),
        $p,
    ),
    ($) => abort(['unmarshall', $]),
)