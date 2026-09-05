
import * as p_ from 'pareto-core/transformer'

//schemas
import type * as s_in from "../schema.js"
import type * as s_out from "astn-core/modules/deserialization/schemas/location/schema"

namespace declarations {
    export type Error = p_.Transformer<
        s_in.Error,
        s_out.Possible_Range
    >
}


export const Error: declarations.Error = ($) => ['range', $.node.range]