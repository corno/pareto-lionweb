import * as p_di from 'pareto-core/dist/data/interface'
import * as p_ti from 'pareto-core/dist/transformer/interface'
import * as pt from 'pareto-core/dist/assign'
import p_unreachable_code_path from 'pareto-core/dist/specials/unreachable_code_path'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/lioncore/data"
import * as d_out from "pareto-graphviz/dist/interface/generated/liana/schemas/high_level_simple/data"
import * as d_out_attributes from "pareto-graphviz/dist/interface/generated/liana/schemas/attributes/data"

//shorthands
import * as sh from "pareto-graphviz/dist/shorthands/high_level_simple"

export type M3 = p_ti.Transformer<d_in.M3, d_out.Graph>

export const M3: M3 = ($) => sh.Graph(
    [],
    pt.dictionary.from.dictionary(
        $.containments.entities.__d_map(($, id) => sh.node([
            ['label', id],
            ['shape', pt.decide.state($.classifier, ($): d_out_attributes.Attributes.L.shape => {
                switch ($[0]) {
                    case 'Classifier': return pt.ss($, ($) => pt.decide.state($.classifier, ($) => {
                        switch ($[0]) {
                            case 'Concept': return pt.ss($, ($) => ['pentagon', null])
                            case 'Interface': return pt.ss($, ($) => ['ellipse', null])
                            default: return pt.au($[0])
                        }
                    }))
                    case 'Datatype': return pt.ss($, ($) => pt.decide.state($, ($) => {
                        switch ($[0]) {
                            case 'Enumeration': return pt.ss($, ($) => ['diamond', null])
                            default: return pt.au($[0])
                        }
                    }))
                    default: return pt.au($[0])
                }
            })]
        ]))
    ).re_id(
        ($, id): string => "LionWeb.LionCore_M3." + id,
        {
            duplicate_id: () => p_unreachable_code_path("id's should be unique")
        }
    ),
    pt.list.from.dictionary(
        $.containments.entities
    ).flatten(
        ($, id) => pt.decide.state($.classifier, ($): d_out.Graph.edges => {
            switch ($[0]) {
                case 'Classifier': return pt.ss($, ($) => pt.decide.state($.classifier, ($) => {
                    switch ($[0]) {
                        case 'Concept': return pt.ss($, ($) => pt.list.nested_literal_old([
                            $.references.extends.__decide(
                                ($) => pt.list.literal([
                                    sh.edge(
                                       "LionWeb.LionCore_M3." +  id,
                                        $.resolveInfo,
                                        [
                                            ['style', ['dashed', null]],
                                        ]
                                    )
                                ]),
                                // ($) => $.reference.__decide(
                                //     ($) => pt.list.literal([
                                //         sh.edge(
                                //             id,
                                //             $,
                                //             [
                                //                 ['style', ['dashed', null]],
                                //             ]
                                //         )
                                //     ]),
                                //     () => pt.list.literal([])
                                // ),
                                () => pt.list.literal([])
                            ),
                            pt.list.from.list(
                                $.references.implements
                            ).flatten(
                                ($) => pt.list.literal([
                                    sh.edge(
                                        "LionWeb.LionCore_M3." +  id,
                                        $.resolveInfo,
                                        [
                                            ['style', ['dotted', null]],
                                        ]
                                    )
                                ]),
                                // ($) => $.reference.__decide(
                                //     ($) => pt.list.literal([
                                //         sh.edge(
                                //             id,
                                //             $,
                                //             [
                                //                 ['style', ['dotted', null]],
                                //             ]
                                //         )
                                //     ]),
                                //     () => pt.list.literal([])
                                // )
                            )
                        ]))
                        case 'Interface': return pt.ss($, ($) => pt.list.from.list(
                            $.references.extends
                        ).flatten(
                            ($) => pt.list.literal([
                                sh.edge(
                                    "LionWeb.LionCore_M3." +  id,
                                    $.resolveInfo,
                                    [
                                        ['style', ['solid', null]],
                                    ]
                                )
                            ]),
                            // ($) => $.reference.__decide(
                            //     ($) => pt.list.literal([
                            //         sh.edge(
                            //             id,
                            //             $,
                            //             [
                            //                 ['style', ['solid', null]],
                            //             ]
                            //         )
                            //     ]),
                            //     () => pt.list.literal([])
                            // )
                        ))
                        default: return pt.au($[0])
                    }
                }))
                case 'Datatype': return pt.ss($, ($) => pt.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'Enumeration': return pt.ss($, ($) => pt.list.literal([]))
                        default: return pt.au($[0])
                    }
                }))
                default: return pt.au($[0])
            }
        })
    )
)