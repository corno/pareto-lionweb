import type * as p_i from 'pareto-core/interface/refiner'


//data types
import type * as s_out from "../../../../../../interface/schemas/serialization_chunk.js"
import type * as s_in from "pareto-fountain-pen/interface/data/list_of_characters"
import type * as s_function from "pareto-json/interface/data/unmarshall_json"
import type * as s_function2 from "astn-core/interface/data/deserialize_parse_tree"

export namespace interface_ {
    export type Serialization_Chunk = p_i.Refiner_With_Parameter<
        s_out.Serialization_Chunk,
        s_function.Error,
        s_in.List_of_Characters,
        s_function2.Parameters
    >
}

//dependencies
import * as r_from_json from "./json.js"
import * as r_json_from_list_of_characters from "pareto-json/implementation/refiners/json_with_parse_info/list_of_characters"

export const Serialization_Chunk: interface_.Serialization_Chunk = ($, abort, $p): s_out.Serialization_Chunk => r_from_json.Serialization_Chunk(
    r_json_from_list_of_characters.Value(
        $,
        ($) => abort(['deserialize', $]),
        $p,
    ),
    ($) => abort(['unmarshall', $]),
)