import * as p_ from 'pareto-core/implementation/transformer'

import * as s_in from "../../../schemas/node_unmarshalling.js"
import * as s_out from "../../../schemas/paragraph.js"

import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"


export const Error: p_.Transformer<s_in.Error, s_out.Phrase> = ($) => p_.from.state($.type).decide(
    ($) => {
        switch ($[0]) {
            case 'missing content': return p_.option($, ($) => sh.ph.text("missing content"))
            case 'missing feature element': return p_.option($, ($) => sh.ph.text("missing feature element"))
            case 'too many feature elements': return p_.option($, ($) => sh.ph.text("too many feature elements"))
            default: return p_.exhaustive($[0])
        }
    }
)