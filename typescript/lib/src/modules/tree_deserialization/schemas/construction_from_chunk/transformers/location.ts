import * as p_ from 'pareto-core/transformer'

import * as s_in from "../schema.js"
import * as s_out from "astn-runtime/modules/deserialization/schemas/location/schema"

export const Error: p_.Transformer<s_in.Error, s_out.Possible_Range> = ($) => ['range', $.range]