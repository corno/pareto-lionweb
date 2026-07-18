import * as p_ from 'pareto-core/implementation/transformer'

import * as s_in from "../../../schemas/construction_from_chunk.js"
import * as s_out from "../../../schemas/location.js"

export const Error: p_.Transformer<s_in.Error, s_out.Possible_Range> = ($) => ['range', $.range]