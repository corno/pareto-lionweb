
import * as p_ from 'pareto-core/implementation/transformer'

import type * as interface_ from "../../../declarations/transformers/processing/prose.js"

//data types
import type * as d_out from "pareto-fountain-pen/interface/data/prose"
import type * as d_unmarshall_serialization_tree from "../../../modules/lionweb-core/interface/data/lion_core_from_serialization_tree.js"

//dependencies
import * as t_unmarshall_json from "pareto-json/implementation/transformers/unmarshalled_from_json/prose"
import * as t_json_from_list_of_characters from "pareto-json/implementation/transformers/json_from_list_of_characters_refiner/prose"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"



export const Unexpected_Content = (
    $: d_unmarshall_serialization_tree.Unexpected_Content,
    $p: {
        'classifier': string
    }
): d_out.Phrase => p_.from.dictionary($.unexpected).on_has_entries(
    ($) => sh.ph.indent(
        sh.pg.deprecated_composed([
            sh.pg.sentences([
                sh.sentence([
                    sh.ph.literal("the following features are unexpected for '" + $p.classifier + "':"),
                    sh.ph.indent(
                        sh.pg.sentences(p_.from.dictionary($).convert_to_list(
                            ($, id) => sh.sentence([
                                sh.ph.literal("- "),
                                sh.ph.literal(id),
                            ]))),
                    )
                ])
            ]),
        ])
    ),
    () => sh.ph.nothing()

)

export const Error: interface_.Error = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'serialization tree': return p_.option($, ($) => p_.from.state($).decide(
                ($) => {
                    switch ($[0]) {
                        case 'tree from chunk': return p_.option($, ($) => p_.from.state($.type).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'could not determine root node': return p_.option($, ($) => sh.ph.literal("could not determine root node"))
                                    case 'node': return p_.option($, ($) => sh.ph.composed([
                                        p_.from.state($.type).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'clashing node IDs': return p_.option($, ($) => sh.ph.literal("clashing node IDs"))
                                                    case 'clashing child node IDs': return p_.option($, ($) => sh.ph.literal("clashing child node IDs"))
                                                    case 'clashing property keys': return p_.option($, ($) => sh.ph.literal("clashing property keys"))
                                                    case 'child node not found': return p_.option($, ($) => sh.ph.literal("child node not found"))
                                                    case 'clashing containment keys': return p_.option($, ($) => sh.ph.literal("clashing containment keys"))
                                                    case 'clashing reference keys': return p_.option($, ($) => sh.ph.literal("clashing reference keys"))
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
                                case 'missing content': return p_.option($, ($) => sh.ph.literal("missing content"))
                                case 'unexpected content': return p_.option($, ($) => sh.ph.composed([
                                    sh.ph.literal("unexpected content:"),
                                    sh.ph.indent(
                                        sh.pg.deprecated_composed([
                                            sh.pg.sentences([
                                                sh.sentence([
                                                    sh.ph.literal("containments:"),
                                                    Unexpected_Content($.containments, { 'classifier': node.classifier })
                                                ])
                                            ]),


                                            sh.pg.sentences([
                                                sh.sentence([
                                                    sh.ph.literal("properties:"),
                                                    Unexpected_Content($.properties, { 'classifier': node.classifier })
                                                ])
                                            ]),
                                            sh.pg.sentences([
                                                sh.sentence([
                                                    sh.ph.literal("references:"),
                                                    Unexpected_Content($.references, { 'classifier': node.classifier })
                                                ])
                                            ]),
                                        ])
                                    )
                                ]))
                                case 'too many feature elements': return p_.option($, ($) => sh.ph.literal("too many feature elements"))
                                case 'missing feature element': return p_.option($, ($) => sh.ph.literal("missing feature element"))
                                case 'unknown option': return p_.option($, ($) => sh.ph.literal("unknown option"))
                                case 'expected single element': return p_.option($, ($) => sh.ph.literal("expected single element"))
                                default: return p_.exhaustive($[0])
                            }
                        })
                ])
            })
            default: return p_.exhaustive($[0])
        }
    })