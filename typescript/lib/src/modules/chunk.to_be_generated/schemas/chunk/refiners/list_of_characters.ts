import type * as p_i from 'pareto-core/refiner'


//schemas
import type * as s_in from "astn-core/modules/deserialization/schemas/list_of_characters/schema"
import type * as s_error from "pareto-json/modules/unmarshalling/schemas/document_deserialization/schema"
import type * as s_parameters from  "pareto-json/modules/unmarshalling/schemas/document_deserialization/schema"

import type * as s_out from "../schema.js"

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
import * as r_json_from_list_of_characters from "pareto-json/modules/deserialization/schemas/deserialized_json/refiners/list_of_characters"

export const Serialization_Chunk: declarations.Serialization_Chunk = ($, abort, $p) => r_from_json.Serialization_Chunk(
    r_json_from_list_of_characters.Value(
        $,
        ($) => abort(['deserialization', $]),
        $p,
    ),
    ($) => abort(['unmarshalling', $]),
)