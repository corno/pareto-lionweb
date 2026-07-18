
import * as p_ from 'pareto-core/implementation/transformer'

import type * as s_in from "../../../schemas/document_deserialization.js"
import type * as s_out from "../../../schemas/paragraph.js"

namespace declarations {
    export type Error = p_.Transformer<
        s_in.Error,
        s_out.Phrase
    >
}

// //schemas
// import type * as s_unmarshall_serialization_tree from "../../../submodules/lionweb-core/interface/schemas/lion_core_from_serialization_tree.js"

// //dependencies
// import * as t_unmarshall_json from "pareto-json/implementation/transformers/unmarshalled_from_json/prose"
// import * as t_json_from_list_of_characters from "pareto-json/implementation/transformers/json_from_list_of_characters_refiner/prose"
import * as t_document_construction_to_paragraph from "../document_construction/paragraph.js"
import * as t_tree_deserialization_to_paragraph from "../../../../tree_deserialization/implementation/transformers/deserialization/paragraph.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"




export const Error: declarations.Error = ($) => p_.from.state($).decide(
    ($): s_out.Phrase => {
        switch ($[0]) {
            case 'tree deserialization': return p_.option($, ($) => t_tree_deserialization_to_paragraph.Error($))
            case 'construction from tree': return p_.option($, ($) => t_document_construction_to_paragraph.Error($))
            default: return p_.exhaustive($[0])
        }
    }
)