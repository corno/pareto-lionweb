
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lioncore/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/lioncore/data"

import * as v_generic from "../../generic/transformers/boilerplate_for_migrate"

export const M3: t_signatures.M3 = ($) => ({
    'id': _p_change_context(
        $['id'],
        ($) => v_generic.ID(
            $,
        ),
    ),
    'properties': _p_change_context(
        $['properties'],
        ($) => ({
            'version': _p_change_context(
                $['version'],
                ($) => $,
            ),
        }),
    ),
    'references': _p_change_context(
        $['references'],
        ($) => ({
            'dependencies': _p_change_context(
                $['dependencies'],
                ($) => v_generic.References(
                    $,
                ),
            ),
        }),
    ),
    'containments': _p_change_context(
        $['containments'],
        ($) => ({
            'entities': _p_change_context(
                $['entities'],
                ($) => _p.dictionary.from.dictionary(
                    $,
                ).map(
                    ($, id) => ({
                        'id': _p_change_context(
                            $['id'],
                            ($) => v_generic.ID(
                                $,
                            ),
                        ),
                        'classifier': _p_change_context(
                            $['classifier'],
                            ($) => _p.decide.state(
                                $,
                                ($): t_out.M3.containments.entities.D.classifier => {
                                    switch ($[0]) {
                                        case 'Classifier':
                                            return _p.ss(
                                                $,
                                                ($) => ['Classifier', {
                                                    'classifier': _p_change_context(
                                                        $['classifier'],
                                                        ($) => _p.decide.state(
                                                            $,
                                                            ($): t_out.M3.containments.entities.D.classifier.Classifier.classifier => {
                                                                switch ($[0]) {
                                                                    case 'Concept':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['Concept', {
                                                                                'properties': _p_change_context(
                                                                                    $['properties'],
                                                                                    ($) => ({
                                                                                        'abstract': _p_change_context(
                                                                                            $['abstract'],
                                                                                            ($) => $,
                                                                                        ),
                                                                                        'partition': _p_change_context(
                                                                                            $['partition'],
                                                                                            ($) => $,
                                                                                        ),
                                                                                    }),
                                                                                ),
                                                                                'references': _p_change_context(
                                                                                    $['references'],
                                                                                    ($) => ({
                                                                                        'extends': _p_change_context(
                                                                                            $['extends'],
                                                                                            ($) => v_generic.Optional_Reference(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                        'implements': _p_change_context(
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
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['Interface', {
                                                                                'references': _p_change_context(
                                                                                    $['references'],
                                                                                    ($) => ({
                                                                                        'extends': _p_change_context(
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
                                                                        return _p.au(
                                                                            $[0],
                                                                        )
                                                                }
                                                            },
                                                        ),
                                                    ),
                                                    'containments': _p_change_context(
                                                        $['containments'],
                                                        ($) => ({
                                                            'features': _p_change_context(
                                                                $['features'],
                                                                ($) => _p.dictionary.from.dictionary(
                                                                    $,
                                                                ).map(
                                                                    ($, id) => ({
                                                                        'id': _p_change_context(
                                                                            $['id'],
                                                                            ($) => v_generic.ID(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        'classifier': _p_change_context(
                                                                            $['classifier'],
                                                                            ($) => _p.decide.state(
                                                                                $,
                                                                                ($): t_out.M3.containments.entities.D.classifier.Classifier.containments.features.D.classifier => {
                                                                                    switch ($[0]) {
                                                                                        case 'Property':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['Property', {
                                                                                                    'references': _p_change_context(
                                                                                                        $['references'],
                                                                                                        ($) => ({
                                                                                                            'type': _p_change_context(
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
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ['Link', {
                                                                                                    'classifier': _p_change_context(
                                                                                                        $['classifier'],
                                                                                                        ($) => _p.decide.state(
                                                                                                            $,
                                                                                                            ($): t_out.M3.containments.entities.D.classifier.Classifier.containments.features.D.classifier.Link.classifier => {
                                                                                                                switch ($[0]) {
                                                                                                                    case 'Containment':
                                                                                                                        return _p.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['Containment', null],
                                                                                                                        )
                                                                                                                    case 'Reference':
                                                                                                                        return _p.ss(
                                                                                                                            $,
                                                                                                                            ($) => ['Reference', null],
                                                                                                                        )
                                                                                                                    default:
                                                                                                                        return _p.au(
                                                                                                                            $[0],
                                                                                                                        )
                                                                                                                }
                                                                                                            },
                                                                                                        ),
                                                                                                    ),
                                                                                                    'properties': _p_change_context(
                                                                                                        $['properties'],
                                                                                                        ($) => ({
                                                                                                            'multiple': _p_change_context(
                                                                                                                $['multiple'],
                                                                                                                ($) => $,
                                                                                                            ),
                                                                                                        }),
                                                                                                    ),
                                                                                                    'references': _p_change_context(
                                                                                                        $['references'],
                                                                                                        ($) => ({
                                                                                                            'type': _p_change_context(
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
                                                                                            return _p.au(
                                                                                                $[0],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            ),
                                                                        ),
                                                                        'properties': _p_change_context(
                                                                            $['properties'],
                                                                            ($) => ({
                                                                                'optional': _p_change_context(
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
                                            return _p.ss(
                                                $,
                                                ($) => ['Datatype', _p.decide.state(
                                                    $,
                                                    ($): t_out.M3.containments.entities.D.classifier.Datatype => {
                                                        switch ($[0]) {
                                                            case 'Enumeration':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ['Enumeration', _p.dictionary.from.dictionary(
                                                                        $,
                                                                    ).map(
                                                                        ($, id) => ({
                                                                            'id': _p_change_context(
                                                                                $['id'],
                                                                                ($) => v_generic.ID(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        }),
                                                                    )],
                                                                )
                                                            default:
                                                                return _p.au(
                                                                    $[0],
                                                                )
                                                        }
                                                    },
                                                )],
                                            )
                                        default:
                                            return _p.au(
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
