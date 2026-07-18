import * as p_ from 'pareto-core/implementation/transformer'

import * as s_in from "../../../schemas/deserialization.js"
import * as s_out from "../../../schemas/location.js"

//dependencies
import * as t_chunk_deserialization_to_location from "pareto-json/modules/unmarshalling/implementation/transformers/document_deserialization/location"
import * as t_construction_from_chunk_to_location from "../construction_from_chunk/location.js"

export const Error: p_.Transformer<s_in.Error, s_out.Possible_Range> = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'construction from chunk': return p_.option($, ($) => t_construction_from_chunk_to_location.Error($))
            case 'chunk deserialization': return p_.option($, ($) => t_chunk_deserialization_to_location.Error($))
            default: return p_.exhaustive($[0])
        }
    }
)