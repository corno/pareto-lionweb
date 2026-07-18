
import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../schemas/node_unmarshalling.js"
import type * as s_out from "../../../schemas/location.js"

namespace declarations {
    export type Error = p_.Transformer<
        s_in.Error,
        s_out.Possible_Range
    >
}


export const Error: declarations.Error = ($) => ['range', $.node.range]