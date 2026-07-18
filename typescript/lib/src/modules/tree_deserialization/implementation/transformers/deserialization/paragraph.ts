import * as p_ from 'pareto-core/implementation/transformer'

import * as s_in from "../../../schemas/deserialization.js"
import * as s_out from "../../../schemas/paragraph.js"


//dependencies
import * as t_document_deserialization_to_paragraph from "pareto-json/modules/unmarshalling/implementation/transformers/document_deserialization/paragraph"
import * as t_construction_from_chunk_to_location from "../construction_from_chunk/paragraph.js"

export const Error: p_.Transformer<s_in.Error, s_out.Phrase> = ($) => {
    switch ($[0]) {
        case 'chunk deserialization': return p_.option($, ($) => t_document_deserialization_to_paragraph.Error($))
        case 'construction from chunk': return p_.option($, ($) => t_construction_from_chunk_to_location.Error($))
        default: return p_.exhaustive($[0])
    }
}