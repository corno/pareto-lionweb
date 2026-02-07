
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lioncore/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/lioncore/data"

export const M3: t_signatures.M3 = ($) => ({
    'id': _p_change_context(
        $['id'],
        ($) => ID(
            $,
        ),
    ),
    'version': _p_change_context(
        $['version'],
        ($) => $,
    ),
    'dependencies': _p_change_context(
        $['dependencies'],
        ($) => _p.list.from.list(
            $,
        ).map(
            ($) => Raw_Reference(
                $,
            ),
        ),
    ),
    'entities': _p_change_context(
        $['entities'],
        ($) => _p.dictionary.from.dictionary(
            $,
        ).map(
            ($, id) => ({
                'id': _p_change_context(
                    $['id'],
                    ($) => ID(
                        $,
                    ),
                ),
                'type': _p_change_context(
                    $['type'],
                    ($) => _p.decide.state(
                        $,
                        ($): t_out.M3.entities.D.type_ => {
                            switch ($[0]) {
                                case 'classifier':
                                    return _p.ss(
                                        $,
                                        ($) => ['classifier', {
                                            'type': _p_change_context(
                                                $['type'],
                                                ($) => _p.decide.state(
                                                    $,
                                                    ($): t_out.M3.entities.D.type_.classifier.type_ => {
                                                        switch ($[0]) {
                                                            case 'concept':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ['concept', {
                                                                        'abstract': _p_change_context(
                                                                            $['abstract'],
                                                                            ($) => $,
                                                                        ),
                                                                        'partition': _p_change_context(
                                                                            $['partition'],
                                                                            ($) => $,
                                                                        ),
                                                                        'extends': _p_change_context(
                                                                            $['extends'],
                                                                            ($) => _p.optional.from.optional(
                                                                                $,
                                                                            ).map(
                                                                                ($) => Raw_Reference(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'implements': _p_change_context(
                                                                            $['implements'],
                                                                            ($) => _p.list.from.list(
                                                                                $,
                                                                            ).map(
                                                                                ($) => Raw_Reference(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                    }],
                                                                )
                                                            case 'interface':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ['interface', {
                                                                        'extends': _p_change_context(
                                                                            $['extends'],
                                                                            ($) => _p.list.from.list(
                                                                                $,
                                                                            ).map(
                                                                                ($) => Raw_Reference(
                                                                                    $,
                                                                                ),
                                                                            ),
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
                                            'features': _p_change_context(
                                                $['features'],
                                                ($) => _p.dictionary.from.dictionary(
                                                    $,
                                                ).map(
                                                    ($, id) => ({
                                                        'id': _p_change_context(
                                                            $['id'],
                                                            ($) => ID(
                                                                $,
                                                            ),
                                                        ),
                                                        'optional': _p_change_context(
                                                            $['optional'],
                                                            ($) => $,
                                                        ),
                                                        'type': _p_change_context(
                                                            $['type'],
                                                            ($) => _p.decide.state(
                                                                $,
                                                                ($): t_out.M3.entities.D.type_.classifier.features.D.type_ => {
                                                                    switch ($[0]) {
                                                                        case 'property':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['property', {
                                                                                    'type': _p_change_context(
                                                                                        $['type'],
                                                                                        ($) => Raw_Reference(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                }],
                                                                            )
                                                                        case 'link':
                                                                            return _p.ss(
                                                                                $,
                                                                                ($) => ['link', {
                                                                                    'multiple': _p_change_context(
                                                                                        $['multiple'],
                                                                                        ($) => $,
                                                                                    ),
                                                                                    'type': _p_change_context(
                                                                                        $['type'],
                                                                                        ($) => Raw_Reference(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                    'link type': _p_change_context(
                                                                                        $['link type'],
                                                                                        ($) => _p.decide.state(
                                                                                            $,
                                                                                            ($): t_out.M3.entities.D.type_.classifier.features.D.type_.link.link_type => {
                                                                                                switch ($[0]) {
                                                                                                    case 'containment':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => ['containment', null],
                                                                                                        )
                                                                                                    case 'reference':
                                                                                                        return _p.ss(
                                                                                                            $,
                                                                                                            ($) => ['reference', null],
                                                                                                        )
                                                                                                    default:
                                                                                                        return _p.au(
                                                                                                            $[0],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
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
                                                    }),
                                                ),
                                            ),
                                        }],
                                    )
                                case 'datatype':
                                    return _p.ss(
                                        $,
                                        ($) => ['datatype', _p.decide.state(
                                            $,
                                            ($): t_out.M3.entities.D.type_.datatype => {
                                                switch ($[0]) {
                                                    case 'enumeration':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ['enumeration', _p.dictionary.from.dictionary(
                                                                $,
                                                            ).map(
                                                                ($, id) => ID(
                                                                    $,
                                                                ),
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
})

export const ID: t_signatures.ID = ($) => _p.optional.from.optional(
    $,
).map(
    ($) => ({
        'key': _p_change_context(
            $['key'],
            ($) => $,
        ),
        'id': _p_change_context(
            $['id'],
            ($) => $,
        ),
    }),
)

export const Raw_Reference: t_signatures.Raw_Reference = ($) => ({
    'resolveInfo': _p_change_context(
        $['resolveInfo'],
        ($) => $,
    ),
    'reference': _p_change_context(
        $['reference'],
        ($) => _p.optional.from.optional(
            $,
        ).map(
            ($) => $,
        ),
    ),
})
