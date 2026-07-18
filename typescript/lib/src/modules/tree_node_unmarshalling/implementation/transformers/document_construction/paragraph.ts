import * as p_ from 'pareto-core/implementation/transformer'

import * as s_in from "../../../schemas/document_construction.js"
import * as s_out from "../../../schemas/paragraph.js"

import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"

//dependencies
import * as t_node_unmarshalling from "../node_unmarshalling/paragraph.js"
import * as t_unexpected_content from "../unexpected_content/paragraph.js"

export const Error: p_.Transformer<s_in.Error, s_out.Phrase> = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'expected single element': return p_.option($, ($) => sh.ph.text("expected single element"))
            case 'node unmarshalling': return p_.option($, ($) => t_node_unmarshalling.Error($))
            case 'unexpected content': return p_.option($, ($) => t_unexpected_content.Error($))
            case 'unknown option': return p_.option($, ($) => sh.ph.text("unknown option"))
            default: return p_.exhaustive($[0])
        }
    }
)