
import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../schemas/document_deserialization.js"
import type * as s_out from "../../../schemas/location.js"

namespace declarations {
    export type Error = p_.Transformer<
        s_in.Error,
        s_out.Possible_Range
    >
}


//dependencies
import * as t_tree_deserialization from "../../../../tree_deserialization/implementation/transformers/deserialization/location.js"

export const Error: declarations.Error = ($) => p_.from.state($).decide(
    ($): s_out.Possible_Range => {
        switch ($[0]) {
            case 'tree deserialization': return p_.option($, ($) => t_tree_deserialization.Error($))
            case 'construction from tree': return p_.option($, ($) => p_.from.state($).decide(
                ($): s_out.Possible_Range => {
                    switch ($[0]) {
                        case 'unknown option': return p_.ss($, ($) => ['range', $.node.range])
                        case 'expected single element': return p_.ss($, ($) => ['range', $.node.range])
                        case 'node unmarshalling': return p_.ss($, ($) => ['range', $.node.range])
                        case 'unexpected content': return p_.ss($, ($) => ['range', $.node.range])
                        default: return p_.au($[0])
                    }
                }
            ))
            default: return p_.exhaustive($[0])
        }
    }
)