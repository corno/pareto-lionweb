import * as p_ from 'pareto-core/implementation/transformer'

import * as s_in from "../schema.js"
import * as s_out from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/schema"


//dependencies
import * as t_document_deserialization_to_paragraph from "pareto-json/modules/unmarshalling/schemas/document_deserialization/transformers/paragraph"
import * as t_construction_from_chunk_to_paragraph from "../../construction_from_chunk/transformers/paragraph.js"

export const Error: p_.Transformer<s_in.Error, s_out.Phrase> = ($) => {
    switch ($[0]) {
        case 'chunk deserialization': return p_.option($, ($) => t_document_deserialization_to_paragraph.Error($))
        case 'construction from chunk': return p_.option($, ($) => t_construction_from_chunk_to_paragraph.Error($))
        default: return p_.exhaustive($[0])
    }
}