
import * as pt from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_in from "../../../../interface/to_be_generated/processing"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_unmarshall_serialization_tree from "../../../../modules/lionweb-core/interface/to_be_generated/lion_core_from_serialization_tree"

//dependencies
import * as t_unmarshall_json from "pareto-json/dist/implementation/manual/transformers/unmarshalled_from_json/fountain_pen"
import * as t_json_from_list_of_characters from "pareto-json/dist/implementation/manual/transformers/json_from_list_of_characters/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"



export const Unexpected_Content = (
    $: d_unmarshall_serialization_tree.Unexpected_Content,
    $p: {
        'classifier': string
    }
): d_out.Phrase => $.unexpected.__get_number_of_entries() === 0
        ? sh.ph.nothing()
        : sh.ph.indent(
            sh.pg.composed([
                sh.pg.sentences([
                    sh.sentence([
                        sh.ph.literal("the following features are unexpected for '" + $p.classifier + "':"),
                        sh.ph.indent(
                            sh.pg.sentences($.unexpected.__to_list(($, id) => sh.sentence([
                                sh.ph.literal("- "),
                                sh.ph.literal(id),
                            ]))),
                        )
                    ])
                ]),
                // sh.pg.sentences([
                //     sh.sentence([
                //         sh.ph.literal(":"),
                //         sh.ph.indent(
                //             sh.pg.sentences($.expected.__to_list(($, id) => sh.sentence([
                //                 sh.ph.literal("- "),
                //                 sh.ph.literal(id),
                //             ]))),
                //         )
                //     ])
                // ]),
            ])
        )

export const Error: p_i.Transformer<d_in.Error, d_out.Phrase> = ($) => pt.decide.state($, ($) => {
    switch ($[0]) {
        case 'serialization tree': return pt.ss($, ($) => pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'tree from chunk': return pt.ss($, ($) => pt.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'could not determine root node': return pt.ss($, ($) => sh.ph.literal("could not determine root node"))
                        case 'node': return pt.ss($, ($) => sh.ph.composed([
                            pt.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'clashing node IDs': return pt.ss($, ($) => sh.ph.literal("clashing node IDs"))
                                    case 'clashing child node IDs': return pt.ss($, ($) => sh.ph.literal("clashing child node IDs"))
                                    case 'clashing property keys': return pt.ss($, ($) => sh.ph.literal("clashing property keys"))
                                    case 'child node not found': return pt.ss($, ($) => sh.ph.literal("child node not found"))
                                    case 'clashing containment keys': return pt.ss($, ($) => sh.ph.literal("clashing containment keys"))
                                    case 'clashing reference keys': return pt.ss($, ($) => sh.ph.literal("clashing reference keys"))
                                    default: return pt.au($[0])
                                }
                            })
                        ]))
                        default: return pt.au($[0])
                    }
                }))
                case 'unmarshall serialization chunk': return pt.ss($, ($) => pt.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'deserialize': return pt.ss($, ($) => t_json_from_list_of_characters.Error($))
                        case 'unmarshall': return pt.ss($, ($) => t_unmarshall_json.Error($))
                        default: return pt.au($[0])
                    }
                }))
                default: return pt.au($[0])
            }
        }))
        case 'lioncore': return pt.ss($, ($) => {
            const node = $.node
            return sh.ph.composed([
                pt.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'missing content': return pt.ss($, ($) => sh.ph.literal("missing content"))
                        case 'unexpected content': return pt.ss($, ($) => sh.ph.composed([
                            sh.ph.literal("unexpected content:"),
                            sh.ph.indent(
                                sh.pg.composed([
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
                        case 'too many feature elements': return pt.ss($, ($) => sh.ph.literal("too many feature elements"))
                        case 'missing feature element': return pt.ss($, ($) => sh.ph.literal("missing feature element"))
                        case 'unknown option': return pt.ss($, ($) => sh.ph.literal("unknown option"))
                        case 'expected single element': return pt.ss($, ($) => sh.ph.literal("expected single element"))
                        default: return pt.au($[0])
                    }
                })
            ])
        })
        default: return pt.au($[0])
    }
})