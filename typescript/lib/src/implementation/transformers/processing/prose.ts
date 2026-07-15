
import * as p_ from 'pareto-core/implementation/transformer'

import type * as s_in from "../../../interface/schemas/processing.js"
import type * as s_out from "../../../interface/schemas/prose.js"
namespace declarations {
    export type Error = p_.Transformer<
        s_in.Error,
        s_out.Phrase
    >
}

//schemas
import type * as s_unmarshall_serialization_tree from "../../../submodules/lionweb-core/interface/schemas/lion_core_from_serialization_tree.js"

//dependencies
import * as t_unmarshall_json from "pareto-json/implementation/transformers/unmarshalled_from_json/prose"
import * as t_json_from_list_of_characters from "pareto-json/implementation/transformers/json_from_list_of_characters_refiner/prose"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose_simple/deprecated"



export const Unexpected_Content = (
    $: s_unmarshall_serialization_tree.Unexpected_Content,
    $p: {
        'classifier': string
    }
): s_out.Phrase => p_.from.dictionary($.unexpected).on_has_entries(
    ($) => sh.ph.indent(
        sh.pg.sentences([
            sh.sentence([
                sh.ph.text("the following features are unexpected for '" + $p.classifier + "':"),
                sh.ph.indent(
                    sh.pg.sentences(p_.from.dictionary($).convert_to_list(
                        ($, id) => sh.sentence([
                            sh.ph.text("- "),
                            sh.ph.text(id),
                        ]))),
                )
            ])
        ]),
    ),
    () => sh.ph.nothing()

)

export const Error: declarations.Error = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'serialization tree': return p_.option($, ($) => p_.from.state($).decide(
                ($) => {
                    switch ($[0]) {
                        case 'tree from chunk': return p_.option($, ($) => p_.from.state($.type).decide(
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
                                    default: return p_.exhaustive($[0])
                                }
                            }))
                        case 'unmarshall serialization chunk': return p_.option($, ($) => p_.from.state($).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'deserialize': return p_.option($, ($) => t_json_from_list_of_characters.Error($))
                                    case 'unmarshall': return p_.option($, ($) => t_unmarshall_json.Error($))
                                    default: return p_.exhaustive($[0])
                                }
                            }))
                        default: return p_.exhaustive($[0])
                    }
                }))
            case 'lioncore': return p_.option($, ($) => {
                const node = $.node
                return sh.ph.composed([
                    p_.from.state($.type).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'missing content': return p_.option($, ($) => sh.ph.text("missing content"))
                                case 'unexpected content': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.text("unexpected content:"),
                                    sh.ph.indent(
                                        sh.pg.sentences([
                                            sh.sentence([
                                                sh.ph.text("containments:"),
                                                Unexpected_Content($.containments, { 'classifier': node.classifier })
                                            ]),
                                            sh.sentence([
                                                sh.ph.text("properties:"),
                                                Unexpected_Content($.properties, { 'classifier': node.classifier })
                                            ]),
                                            sh.sentence([
                                                sh.ph.text("references:"),
                                                Unexpected_Content($.references, { 'classifier': node.classifier })
                                            ]),
                                        ])
                                    )
                                ]))
                                case 'too many feature elements': return p_.option($, ($) => sh.ph.text("too many feature elements"))
                                case 'missing feature element': return p_.option($, ($) => sh.ph.text("missing feature element"))
                                case 'unknown option': return p_.option($, ($) => sh.ph.text("unknown option"))
                                case 'expected single element': return p_.option($, ($) => sh.ph.text("expected single element"))
                                default: return p_.exhaustive($[0])
                            }
                        })
                ])
            })
            default: return p_.exhaustive($[0])
        }
    })