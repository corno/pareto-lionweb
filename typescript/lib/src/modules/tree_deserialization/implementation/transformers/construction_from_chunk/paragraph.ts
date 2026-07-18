import * as p_ from 'pareto-core/implementation/transformer'

import * as s_in from "../../../schemas/construction_from_chunk.js"
import * as s_out from "../../../schemas/paragraph.js"


//shorthands

import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"

export const Error: p_.Transformer<s_in.Error, s_out.Phrase> = ($) => p_.from.state($.type).decide(
    ($) => {
        switch ($[0]) {
            case 'could not determine root node': return p_.option($, ($) => sh.ph.text("could not determine root node"))
            case 'node': return p_.option($, ($) => sh.ph.composed([
                p_.from.state($.type).decide(
                    ($) => {
                        switch ($[0]) {
                            case 'clashing node IDs': return p_.option($, ($) => sh.ph.text("clashing node IDs"))
                            case 'clashing child node IDs': return p_.option($, ($) => sh.ph.text("clashing child node IDs"))
                            case 'clashing property keys': return p_.option($, ($) => sh.ph.text("clashing property keys"))
                            case 'child node not found': return p_.option($, ($) => sh.ph.text("child node not found"))
                            case 'clashing containment keys': return p_.option($, ($) => sh.ph.text("clashing containment keys"))
                            case 'clashing reference keys': return p_.option($, ($) => sh.ph.text("clashing reference keys"))
                            default: return p_.exhaustive($[0])
                        }
                    })
            ]))
            default: return p_.au($[0])
        }
    }
)