import type * as p_i from 'pareto-core/interface/refiner'


//schemas
import type * as s_in from "../../../schemas/list_of_characters.js"
import type * as s_error from "../../../schemas/deserialization.js"
import type * as s_parameters from  "../../../schemas/deserialization.js"

import type * as s_out from "../../../schemas/chunk.js"

namespace declarations {
    export type Serialization_Chunk = p_i.Refiner_With_Parameter<
        s_out.Serialization_Chunk,
        s_error.Error,
        s_in.List_Of_Characters,
        s_parameters.Parameters
    >
}

//dependencies
import * as r_from_json from "./json.js"
import * as r_json_from_list_of_characters from "pareto-json/modules/deserialization/implementation/refiners/deserialized_json/list_of_characters"

export const Serialization_Chunk: declarations.Serialization_Chunk = ($, abort, $p) => r_from_json.Serialization_Chunk(
    r_json_from_list_of_characters.Value(
        $,
        ($) => abort(['deserialization', $]),
        $p,
    ),
    ($) => abort(['unmarshalling', $]),
)