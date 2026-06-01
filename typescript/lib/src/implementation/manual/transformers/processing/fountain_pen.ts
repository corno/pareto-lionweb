
import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_in from "../../../../interface/to_be_generated/processing"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_unmarshall_serialization_tree from "../../../../modules/lionweb-core/interface/to_be_generated/lion_core_from_serialization_tree"

//dependencies
import * as t_unmarshall_json from "pareto-json-schema/dist/implementation/manual/transformers/unmarshalled_from_json/fountain_pen"

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

export const Error: _pi.Transformer<d_in.Error, d_out.Phrase> = ($) => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'serialization tree': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'tree from chunk': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'could not determine root node': return _p.ss($, ($) => sh.ph.literal("could not determine root node"))
                        case 'node': return _p.ss($, ($) => sh.ph.composed([
                            _p.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'clashing node IDs': return _p.ss($, ($) => sh.ph.literal("clashing node IDs"))
                                    case 'clashing child node IDs': return _p.ss($, ($) => sh.ph.literal("clashing child node IDs"))
                                    case 'clashing property keys': return _p.ss($, ($) => sh.ph.literal("clashing property keys"))
                                    case 'child node not found': return _p.ss($, ($) => sh.ph.literal("child node not found"))
                                    case 'clashing containment keys': return _p.ss($, ($) => sh.ph.literal("clashing containment keys"))
                                    case 'clashing reference keys': return _p.ss($, ($) => sh.ph.literal("clashing reference keys"))
                                    default: return _p.au($[0])
                                }
                            })
                        ]))
                        default: return _p.au($[0])
                    }
                }))
                case 'unmarshall serialization chunk': return _p.ss($, ($) => t_unmarshall_json.Error($))
                default: return _p.au($[0])
            }
        }))
        case 'lioncore': return _p.ss($, ($) => {
            const node = $.node
            return sh.ph.composed([
                _p.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'missing content': return _p.ss($, ($) => sh.ph.literal("missing content"))
                        case 'unexpected content': return _p.ss($, ($) => sh.ph.composed([
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
                        case 'too many feature elements': return _p.ss($, ($) => sh.ph.literal("too many feature elements"))
                        case 'missing feature element': return _p.ss($, ($) => sh.ph.literal("missing feature element"))
                        case 'unknown option': return _p.ss($, ($) => sh.ph.literal("unknown option"))
                        case 'expected single element': return _p.ss($, ($) => sh.ph.literal("expected single element"))
                        default: return _p.au($[0])
                    }
                })
            ])
        })
        default: return _p.au($[0])
    }
})