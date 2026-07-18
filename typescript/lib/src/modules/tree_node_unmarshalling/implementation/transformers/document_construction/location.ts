
import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../schemas/document_construction.js"
import type * as s_out from "../../../schemas/location.js"

namespace declarations {
    export type Error = p_.Transformer<
        s_in.Error,
        s_out.Possible_Range
    >
}


export const Error: declarations.Error = ($) => p_.from.state($).decide(
    ($): s_out.Possible_Range => {
        switch ($[0]) {
            case 'expected single element': return p_.option($, ($) => ['range', $.node.range])
            case 'node unmarshalling': return p_.option($, ($) => ['range', $.node.range])
            case 'unexpected content': return p_.option($, ($) => ['range', $.node.range])
            case 'unknown option': return p_.option($, ($) => ['range', $.node.range])
            default: return p_.exhaustive($[0])
        }
    }
)