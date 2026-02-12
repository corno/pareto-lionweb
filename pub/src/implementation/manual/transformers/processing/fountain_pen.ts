
import * as _p from 'pareto-core/dist/assign'

//data types
import * as d_in from "../../../../interface/to_be_generated/processing"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_unmarshall_serialization_tree from "../../../../modules/lionweb-core/interface/to_be_generated/unmarshall_serialization_tree"

//dependencies
import * as t_deserialize_parse_tree_to_fountain_pen from "astn-core/dist/implementation/manual/transformers/deserialize_parse_tree/fountain_pen"
import * as t_astn_unmarshall_to_fountain_pen from "astn-core/dist/implementation/manual/transformers/unmarshall/fountain_pen"
import * as t_astn_location_to_fountain_pen from "astn-core/dist/implementation/manual/transformers/location/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"



export const Unexpected_Content = ($: d_unmarshall_serialization_tree.Unexpected_Content): d_out.Phrase => sh.ph.indent(
    sh.pg.composed([
        sh.pg.sentences([
            sh.sentence([
                sh.ph.literal("unexpected:"),
            ])
        ]),
        sh.pg.sentences($.unexpected.__to_list(($, id) => sh.sentence([
            sh.ph.literal("- "),
            sh.ph.literal(id),
        ]))),
        sh.pg.sentences([
            sh.sentence([
                sh.ph.literal("expected:"),
            ])
        ]),
        sh.pg.sentences($.expected.__to_list(($, id) => sh.sentence([
            sh.ph.literal("- "),
            sh.ph.literal(id),
        ]))),
    ])
)

export const Error = ($: d_in.Error): d_out.Phrase => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'deserialization error': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'deserialize astn parse tree': return _p.ss($, ($) => t_deserialize_parse_tree_to_fountain_pen.Error($, { 'position info': ['one based', null] }))
                case 'tree from chunk': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'could not determine root node': return _p.ss($, ($) => sh.ph.literal("could not determine root node"))
                        case 'clashing node IDs': return _p.ss($, ($) => sh.ph.literal("clashing node IDs"))
                        case 'clashing child node IDs': return _p.ss($, ($) => sh.ph.literal("clashing child node IDs"))
                        case 'clashing property keys': return _p.ss($, ($) => sh.ph.literal("clashing property keys"))
                        case 'child node not found': return _p.ss($, ($) => sh.ph.literal("child node not found"))
                        case 'clashing containment keys': return _p.ss($, ($) => sh.ph.literal("clashing containment keys"))
                        case 'clashing reference keys': return _p.ss($, ($) => sh.ph.literal("clashing reference keys"))
                        default: return _p.au($[0])
                    }
                }))
                case 'unmarshall serialization chunk': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'astn': return _p.ss($, ($) => t_astn_unmarshall_to_fountain_pen.Error($))
                        case 'json': return _p.ss($, ($) => sh.ph.composed([
                            t_astn_location_to_fountain_pen.Range($.range, { 'position info': ['one based', null], 'with @': false }),
                            sh.ph.literal(": "),
                            _p.decide.state($.type, ($) => {
                                switch ($[0]) {
                                    case 'unexpected properties': return _p.ss($, ($) => sh.ph.composed([
                                        sh.ph.literal("unexpected properties: '"),
                                        sh.ph.indent(
                                            sh.pg.sentences($.__to_list(($, key) => sh.sentence([
                                                sh.ph.literal(key),
                                                sh.ph.literal(": "),
                                                t_astn_location_to_fountain_pen.Range($, { 'position info': ['one based', null], 'with @': false }),
                                            ])))
                                        ),
                                    ]))
                                    case 'missing property': return _p.ss($, ($) => sh.ph.literal("missing property"))
                                    case 'not a string': return _p.ss($, ($) => sh.ph.literal("not a string"))
                                    case 'not a boolean': return _p.ss($, ($) => sh.ph.literal("not a boolean"))
                                    case 'not a null': return _p.ss($, ($) => sh.ph.literal("not a null"))
                                    case 'not a number': return _p.ss($, ($) => sh.ph.literal("not a number"))
                                    default: return _p.au($[0])
                                }
                            })
                        ]))
                        default: return _p.au($[0])
                    }
                }))
                default: return _p.au($[0])
            }
        }))
        case 'unmarshalling error': return _p.ss($, ($) => sh.ph.composed([
            t_astn_location_to_fountain_pen.Range($.range, { 'position info': ['one based', null], 'with @': false }),
            sh.ph.literal(": "),
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
                                        Unexpected_Content($.containments)
                                    ])
                                ]),


                                sh.pg.sentences([
                                    sh.sentence([
                                        sh.ph.literal("properties:"),
                                        Unexpected_Content($.properties)
                                    ])
                                ]),
                                sh.pg.sentences([
                                    sh.sentence([
                                        sh.ph.literal("references:"),
                                        Unexpected_Content($.references)
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
        ]))
        default: return _p.au($[0])
    }
})