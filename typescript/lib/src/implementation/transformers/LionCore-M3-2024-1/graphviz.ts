import * as p_ from 'pareto-core/implementation/transformer'
import * as p_r from 'pareto-core/implementation/refiner'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

import type * as interface_ from "../../../declarations/transformers/LionCore-M3-2024-1/graphviz.js"

//schemas
import type * as s_out from "pareto-graphviz/interface/data/high_level_simple"
import type * as s_out_attributes from "pareto-graphviz/interface/data/attributes"

//shorthands
import * as sh from "pareto-graphviz/shorthands/high_level_simple/target"


export const M3: interface_.M3 = ($) => sh.Graph(
    p_.literal.list([]),
    p_r.from.dictionary(
        p_.from.dictionary($.containments.entities).map(
            ($, id) => sh.node(
                p_.literal.list([
                    ['label', id],
                    ['shape', p_.from.state($.classifier).decide(
                        ($): s_out_attributes.Attributes.L.shape => {
                            switch ($[0]) {
                                case 'Classifier': return p_.option($, ($) => p_.from.state($.classifier).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'Concept': return p_.option($, ($) => ['pentagon', null])
                                            case 'Interface': return p_.option($, ($) => ['ellipse', null])
                                            default: return p_.exhaustive($[0])
                                        }
                                    }))
                                case 'Datatype': return p_.option($, ($) => p_.from.state($).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'Enumeration': return p_.option($, ($) => ['diamond', null])
                                            default: return p_.exhaustive($[0])
                                        }
                                    }))
                                default: return p_.exhaustive($[0])
                            }
                        })]
                ])
            ))
    ).re_id(
        ($, id): string => "LionWeb.LionCore_M3." + id,
        () => p_unreachable_code_path("id's should be unique")
    ),
    p_.from.dictionary($.containments.entities).flatten_to_list(
        ($, id) => p_.from.state($.classifier).decide(
            ($): s_out.Graph.edges => {
                switch ($[0]) {
                    case 'Classifier': return p_.option($, ($) => p_.from.state($.classifier).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'Concept': return p_.option($, ($) => p_.literal.segmented_list([
                                    p_.from.optional($.references.extends).decide(
                                        ($) => p_.literal.list([
                                            sh.edge(
                                                "LionWeb.LionCore_M3." + id,
                                                $.resolveInfo,
                                                p_.literal.list([
                                                    ['style', ['dashed', null]],
                                                ])
                                            )
                                        ]),
                                        // ($) => p_.from.optional($.reference).decide(
                                        //     ($) => p_.literal.list([
                                        //         sh.edge(
                                        //             id,
                                        //             $,
                                        //             [
                                        //                 ['style', ['dashed', null]],
                                        //             ]
                                        //         )
                                        //     ]),
                                        //     () => p_.literal.list([])
                                        // ),
                                        () => p_.literal.list([])
                                    ),
                                    p_.from.list($.references.implements).flatten(
                                        ($) => p_.literal.list([
                                            sh.edge(
                                                "LionWeb.LionCore_M3." + id,
                                                $.resolveInfo,
                                                p_.literal.list([
                                                    ['style', ['dotted', null]],
                                                ])
                                            )
                                        ]),
                                        // ($) => p_.from.optional($.reference).decide(
                                        //     ($) => p_.literal.list([
                                        //         sh.edge(
                                        //             id,
                                        //             $,
                                        //             [
                                        //                 ['style', ['dotted', null]],
                                        //             ]
                                        //         )
                                        //     ]),
                                        //     () => p_.literal.list([])
                                        // )
                                    )
                                ]))
                                case 'Interface': return p_.option($, ($) => p_.from.list($.references.extends).flatten(
                                    ($) => p_.literal.list([
                                        sh.edge(
                                            "LionWeb.LionCore_M3." + id,
                                            $.resolveInfo,
                                            p_.literal.list([
                                                ['style', ['solid', null]],
                                            ])
                                        )
                                    ]),
                                    // ($) => $.reference.__ decide(
                                    //     ($) => p_.literal.list([
                                    //         sh.edge(
                                    //             id,
                                    //             $,
                                    //             [
                                    //                 ['style', ['solid', null]],
                                    //             ]
                                    //         )
                                    //     ]),
                                    //     () => p_.literal.list([])
                                    // )
                                ))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    case 'Datatype': return p_.option($, ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'Enumeration': return p_.option($, ($) => p_.literal.list([]))
                                default: return p_.exhaustive($[0])
                            }
                        }))
                    default: return p_.exhaustive($[0])
                }
            }
        )
    )
)