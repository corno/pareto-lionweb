import type * as p_i from 'pareto-core/interface/refiner'


//schemas
import type * as s_in from "../../../interface/schemas/list_of_characters.js"
import type * as s_function from "./unmarshall_json.js"
import type * as s_function2 from "../../../interface/schemas/deserialize_parse_tree.js"

import type * as s_out from "../../../../../../../interface/schemas/serialization_chunk.js"
namespace interface_ {
    export type Serialization_Chunk = p_i.Refiner_With_Parameter<
        s_out.Serialization_Chunk,
        s_function.Error,
        s_in.List_Of_Characters,
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