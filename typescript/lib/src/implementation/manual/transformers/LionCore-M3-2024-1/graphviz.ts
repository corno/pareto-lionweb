import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/lioncore/data"
import * as d_out from "pareto-graphviz/dist/interface/generated/liana/schemas/high_level_simple/data"
import * as d_out_attributes from "pareto-graphviz/dist/interface/generated/liana/schemas/attributes/data"

//shorthands
import * as sh from "pareto-graphviz/dist/shorthands/high_level_simple"

export type M3 = _pi.Transformer<d_in.M3, d_out.Graph>

export const M3: M3 = ($) => sh.Graph(
    [],
    _p.dictionary.from.dictionary(
        $.containments.entities.__d_map(($, id) => sh.node([
            ['label', id],
            ['shape', _p.decide.state($.classifier, ($): d_out_attributes.Attributes.L.shape => {
                switch ($[0]) {
                    case 'Classifier': return _p.ss($, ($) => _p.decide.state($.classifier, ($) => {
                        switch ($[0]) {
                            case 'Concept': return _p.ss($, ($) => ['pentagon', null])
                            case 'Interface': return _p.ss($, ($) => ['ellipse', null])
                            default: return _p.au($[0])
                        }
                    }))
                    case 'Datatype': return _p.ss($, ($) => _p.decide.state($, ($) => {
                        switch ($[0]) {
                            case 'Enumeration': return _p.ss($, ($) => ['diamond', null])
                            default: return _p.au($[0])
                        }
                    }))
                    default: return _p.au($[0])
                }
            })]
        ]))
    ).re_id(
        ($, id): string => "LionWeb.LionCore_M3." + id,
        {
            duplicate_id: ($) => _p_unreachable_code_path("id's should be unique")
        }
    ),
    _p.list.from.dictionary(
        $.containments.entities
    ).flatten(
        ($, id) => _p.decide.state($.classifier, ($): d_out.Graph.edges => {
            switch ($[0]) {
                case 'Classifier': return _p.ss($, ($) => _p.decide.state($.classifier, ($) => {
                    switch ($[0]) {
                        case 'Concept': return _p.ss($, ($) => _p.list.nested_literal_old([
                            $.references.extends.__decide(
                                ($) => _p.list.literal([
                                    sh.edge(
                                       "LionWeb.LionCore_M3." +  id,
                                        $.resolveInfo,
                                        [
                                            ['style', ['dashed', null]],
                                        ]
                                    )
                                ]),
                                // ($) => $.reference.__decide(
                                //     ($) => _p.list.literal([
                                //         sh.edge(
                                //             id,
                                //             $,
                                //             [
                                //                 ['style', ['dashed', null]],
                                //             ]
                                //         )
                                //     ]),
                                //     () => _p.list.literal([])
                                // ),
                                () => _p.list.literal([])
                            ),
                            _p.list.from.list(
                                $.references.implements
                            ).flatten(
                                ($) => _p.list.literal([
                                    sh.edge(
                                        "LionWeb.LionCore_M3." +  id,
                                        $.resolveInfo,
                                        [
                                            ['style', ['dotted', null]],
                                        ]
                                    )
                                ]),
                                // ($) => $.reference.__decide(
                                //     ($) => _p.list.literal([
                                //         sh.edge(
                                //             id,
                                //             $,
                                //             [
                                //                 ['style', ['dotted', null]],
                                //             ]
                                //         )
                                //     ]),
                                //     () => _p.list.literal([])
                                // )
                            )
                        ]))
                        case 'Interface': return _p.ss($, ($) => _p.list.from.list(
                            $.references.extends
                        ).flatten(
                            ($) => _p.list.literal([
                                sh.edge(
                                    "LionWeb.LionCore_M3." +  id,
                                    $.resolveInfo,
                                    [
                                        ['style', ['solid', null]],
                                    ]
                                )
                            ]),
                            // ($) => $.reference.__decide(
                            //     ($) => _p.list.literal([
                            //         sh.edge(
                            //             id,
                            //             $,
                            //             [
                            //                 ['style', ['solid', null]],
                            //             ]
                            //         )
                            //     ]),
                            //     () => _p.list.literal([])
                            // )
                        ))
                        default: return _p.au($[0])
                    }
                }))
                case 'Datatype': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'Enumeration': return _p.ss($, ($) => _p.list.literal([]))
                        default: return _p.au($[0])
                    }
                }))
                default: return _p.au($[0])
            }
        })
    )
)