import type * as p_i from 'pareto-core/interface/refiner'


//data types
import type * as d_out from "../../../../../../interface/generated/liana/schemas/serialization_chunk/data.js"
import type * as d_in from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"
import type * as d_function from "pareto-json/interface/data/unmarshall_json"
import type * as d_function2 from "astn-core/interface/generated/liana/schemas/deserialize_parse_tree/data"

export namespace interface_ {
    export type Serialization_Chunk = p_i.Refiner_With_Parameter<
        d_out.Serialization_Chunk,
        d_function.Error,
        d_in.List_of_Characters,
        d_function2.Parameters
    >
}

//dependencies
import * as r_from_json from "./json.js"
import * as r_json_from_list_of_characters from "pareto-json/implementation/refiners/json_with_parse_info/list_of_characters"

export const Serialization_Chunk: interface_.Serialization_Chunk = ($, abort, $p): d_out.Serialization_Chunk => r_from_json.Serialization_Chunk(
    r_json_from_list_of_characters.Value(
        $,
        ($) => abort(['deserialize', $]),
        $p,
    ),
    ($) => abort(['unmarshall', $]),
)