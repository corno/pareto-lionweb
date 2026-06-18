
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lioncore/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/lioncore/data"

import * as v_generic from "../../generic/transformers/boilerplate_for_migrate"

export const M3: t_signatures.M3 = ($) => ({
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
                ($) => p_.from.dictionary(
                    $,
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
                                            return p_.ss(
                                                $,
                                                ($) => ['Classifier', {
                                                    'classifier': p_change_context(
                                                        $['classifier'],
                                                        ($) => p_decide_state(
                                                            $,
                                                            ($): t_out.M3.containments.entities.D.classifier.Classifier.classifier => {
                                                                switch ($[0]) {
                                                                    case 'Concept':
                                                                        return p_.ss(
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
                                                                        return p_.ss(
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
                                                                ($) => p_.from.dictionary(
                                                                    $,
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
                                                                                            return p_.ss(
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
                                                                                            return p_.ss(
                                                                                                $,
                                                                                                ($) => ['Link', {
                                                                                                    'classifier': p_change_context(
                                                                                                        $['classifier'],
                                                                                                        ($) => p_decide_state(
                                                                                                            $,
                                                                                                            ($): t_out.M3.containments.entities.D.classifier.Classifier.containments.features.D.classifier.Link.classifier => {
                                                                                                                switch ($[0]) {
                                                                                                                    case 'Containment':
                                                                                                                        return p_.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['Containment', null],
                                                                                                                        )
                                                                                                                    case 'Reference':
                                                                                                                        return p_.ss(
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
                                            return p_.ss(
                                                $,
                                                ($) => ['Datatype', p_decide_state(
                                                    $,
                                                    ($): t_out.M3.containments.entities.D.classifier.Datatype => {
                                                        switch ($[0]) {
                                                            case 'Enumeration':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ['Enumeration', p_.from.dictionary(
                                                                        $,
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
