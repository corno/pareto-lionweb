
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_out from "../schema.js"

import * as i_in from "../schema.js"

namespace declarations {
    export namespace M3_ {

        export type I = i_in.M3

        export type O = i_out.M3

        export namespace P {

        }

    }

    export type M3_ = (
        context: M3_.I,
    ) => M3_.O
}

import * as p_ from 'pareto-core/implementation/transformer'
const p_decide_state = <State, B>($: State, assign: ($: State) => B) => assign($)

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_out from "../schema.js"

import * as v_generic from "../../../../generic_types.liana.generated/schemas/unconstrained/transformers/boilerplate_for_migrate.js"

export const M3: declarations.M3_ = ($) => ({
    'id': p_change_context(
        $['id'],
        ($) => v_generic.ID(
            $,
        ),
    ),
    'properties': p_change_context(
        $['properties'],
        ($) => ({
            'version': p_change_context(
                $['version'],
                ($) => $,
            ),
        }),
    ),
    'references': p_change_context(
        $['references'],
        ($) => ({
            'dependencies': p_change_context(
                $['dependencies'],
                ($) => v_generic.References(
                    $,
                ),
            ),
        }),
    ),
    'containments': p_change_context(
        $['containments'],
        ($) => ({
            'entities': p_change_context(
                $['entities'],
                ($) => p_.from.dictionary($,
                ).map(
                    ($, id) => ({
                        'id': p_change_context(
                            $['id'],
                            ($) => v_generic.ID(
                                $,
                            ),
                        ),
                        'classifier': p_change_context(
                            $['classifier'],
                            ($) => p_decide_state(
                                $,
                                ($): t_out.M3.containments.entities.D.classifier => {
                                    switch ($[0]) {
                                        case 'Classifier':
                                            return p_.option(
                                                $,
                                                ($) => ['Classifier', {
                                                    'classifier': p_change_context(
                                                        $['classifier'],
                                                        ($) => p_decide_state(
                                                            $,
                                                            ($): t_out.M3.containments.entities.D.classifier.Classifier.classifier => {
                                                                switch ($[0]) {
                                                                    case 'Concept':
                                                                        return p_.option(
                                                                            $,
                                                                            ($) => ['Concept', {
                                                                                'properties': p_change_context(
                                                                                    $['properties'],
                                                                                    ($) => ({
                                                                                        'abstract': p_change_context(
                                                                                            $['abstract'],
                                                                                            ($) => $,
                                                                                        ),
                                                                                        'partition': p_change_context(
                                                                                            $['partition'],
                                                                                            ($) => $,
                                                                                        ),
                                                                                    }),
                                                                                ),
                                                                                'references': p_change_context(
                                                                                    $['references'],
                                                                                    ($) => ({
                                                                                        'extends': p_change_context(
                                                                                            $['extends'],
                                                                                            ($) => v_generic.Optional_Reference(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        'implements': p_change_context(
                                                                                            $['implements'],
                                                                                            ($) => v_generic.References(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    }),
                                                                                ),
                                                                            }],
                                                                        )
                                                                    case 'Interface':
                                                                        return p_.option(
                                                                            $,
                                                                            ($) => ['Interface', {
                                                                                'references': p_change_context(
                                                                                    $['references'],
                                                                                    ($) => ({
                                                                                        'extends': p_change_context(
                                                                                            $['extends'],
                                                                                            ($) => v_generic.References(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    }),
                                                                                ),
                                                                            }],
                                                                        )
                                                                    default:
                                                                        return p_.au(
                                                                            $[0],
                                                                        )
                                                                }
                                                            },
                                                        ),
                                                    ),
                                                    'containments': p_change_context(
                                                        $['containments'],
                                                        ($) => ({
                                                            'features': p_change_context(
                                                                $['features'],
                                                                ($) => p_.from.dictionary($,
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'id': p_change_context(
                                                                            $['id'],
                                                                            ($) => v_generic.ID(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        'classifier': p_change_context(
                                                                            $['classifier'],
                                                                            ($) => p_decide_state(
                                                                                $,
                                                                                ($): t_out.M3.containments.entities.D.classifier.Classifier.containments.features.D.classifier => {
                                                                                    switch ($[0]) {
                                                                                        case 'Property':
                                                                                            return p_.option(
                                                                                                $,
                                                                                                ($) => ['Property', {
                                                                                                    'references': p_change_context(
                                                                                                        $['references'],
                                                                                                        ($) => ({
                                                                                                            'type': p_change_context(
                                                                                                                $['type'],
                                                                                                                ($) => v_generic.Singular_Reference(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    ),
                                                                                                }],
                                                                                            )
                                                                                        case 'Link':
                                                                                            return p_.option(
                                                                                                $,
                                                                                                ($) => ['Link', {
                                                                                                    'classifier': p_change_context(
                                                                                                        $['classifier'],
                                                                                                        ($) => p_decide_state(
                                                                                                            $,
                                                                                                            ($): t_out.M3.containments.entities.D.classifier.Classifier.containments.features.D.classifier.Link.classifier => {
                                                                                                                switch ($[0]) {
                                                                                                                    case 'Containment':
                                                                                                                        return p_.option(
                                                                                                                            $,
                                                                                                                            ($) => ['Containment', null],
                                                                                                                        )
                                                                                                                    case 'Reference':
                                                                                                                        return p_.option(
                                                                                                                            $,
                                                                                                                            ($) => ['Reference', null],
                                                                                                                        )
                                                                                                                    default:
                                                                                                                        return p_.au(
                                                                                                                            $[0],
                                                                                                                        )
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                    'properties': p_change_context(
                                                                                                        $['properties'],
                                                                                                        ($) => ({
                                                                                                            'multiple': p_change_context(
                                                                                                                $['multiple'],
                                                                                                                ($) => $,
                                                                                                            ),
                                                                                                        }),
                                                                                                    ),
                                                                                                    'references': p_change_context(
                                                                                                        $['references'],
                                                                                                        ($) => ({
                                                                                                            'type': p_change_context(
                                                                                                                $['type'],
                                                                                                                ($) => v_generic.Singular_Reference(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        }),
                                                                                                    ),
                                                                                                }],
                                                                                            )
                                                                                        default:
                                                                                            return p_.au(
                                                                                                $[0],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            ),
                                                                        ),
                                                                        'properties': p_change_context(
                                                                            $['properties'],
                                                                            ($) => ({
                                                                                'optional': p_change_context(
                                                                                    $['optional'],
                                                                                    ($) => $,
                                                                                ),
                                                                            }),
                                                                        ),
                                                                    }),
                                                                ),
                                                            ),
                                                        }),
                                                    ),
                                                }],
                                            )
                                        case 'Datatype':
                                            return p_.option(
                                                $,
                                                ($) => ['Datatype', p_decide_state(
                                                    $,
                                                    ($): t_out.M3.containments.entities.D.classifier.Datatype => {
                                                        switch ($[0]) {
                                                            case 'Enumeration':
                                                                return p_.option(
                                                                    $,
                                                                    ($) => ['Enumeration', p_.from.dictionary($,
                                                                    ).map(
                                                                        ($, id) => ({
                                                                            'id': p_change_context(
                                                                                $['id'],
                                                                                ($) => v_generic.ID(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                )
                                                            default:
                                                                return p_.au(
                                                                    $[0],
                                                                )
                                                        }
                                                    },
                                                )],
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        ),
                    }),
                ),
            ),
        }),
    ),
})
