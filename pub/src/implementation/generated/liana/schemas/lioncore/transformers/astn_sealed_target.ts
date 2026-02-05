    
    import * as _p from "pareto-core/dist/expression"
    
    import _p_change_context from "pareto-core/dist/_p_change_context"
    
    import _p_text_from_list from "pareto-core/dist/_p_text_from_list"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lioncore/marshall"
    
    import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"
    
    import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"
    
    import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
    
    export const M3: t_signatures.M3 = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'id': _p_change_context(
                $['id'],
                ($) => ID(
                    $,
                ),
            ),
            'version': _p_change_context(
                $['version'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            'dependencies': _p_change_context(
                $['dependencies'],
                ($) => ['list', _p.list.map(
                    $,
                    ($) => Raw_Reference(
                        $,
                    ),
                )],
            ),
            'entities': _p_change_context(
                $['entities'],
                ($) => ['dictionary', _p.dictionary.map(
                    $,
                    ($, id) => ['group', ['verbose', _p.dictionary.literal(
                        {
                            'id': _p_change_context(
                                $['id'],
                                ($) => ID(
                                    $,
                                ),
                            ),
                            'type': _p_change_context(
                                $['type'],
                                ($) => ['state', _p.decide.state(
                                    $,
                                    ($): t_out.Value.state => {
                                        switch ($[0]) {
                                            case 'classifier':
                                                return _p.ss(
                                                    $,
                                                    ($) => ({
                                                        'option': 'classifier',
                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                            {
                                                                'type': _p_change_context(
                                                                    $['type'],
                                                                    ($) => ['state', _p.decide.state(
                                                                        $,
                                                                        ($): t_out.Value.state => {
                                                                            switch ($[0]) {
                                                                                case 'concept':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ({
                                                                                            'option': 'concept',
                                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                {
                                                                                                    'abstract': _p_change_context(
                                                                                                        $['abstract'],
                                                                                                        ($) => ['text', {
                                                                                                            'delimiter': ['quote', null],
                                                                                                            'value': $,
                                                                                                        }],
                                                                                                    ),
                                                                                                    'partition': _p_change_context(
                                                                                                        $['partition'],
                                                                                                        ($) => ['text', {
                                                                                                            'delimiter': ['quote', null],
                                                                                                            'value': $,
                                                                                                        }],
                                                                                                    ),
                                                                                                    'extends': _p_change_context(
                                                                                                        $['extends'],
                                                                                                        ($) => ['optional', _p.decide.optional(
                                                                                                            $,
                                                                                                            ($): t_out.Value.optional => ['set', Raw_Reference(
                                                                                                                $,
                                                                                                            )],
                                                                                                            () => ['not set', null],
                                                                                                        )],
                                                                                                    ),
                                                                                                    'implements': _p_change_context(
                                                                                                        $['implements'],
                                                                                                        ($) => ['list', _p.list.map(
                                                                                                            $,
                                                                                                            ($) => Raw_Reference(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )],
                                                                                                    ),
                                                                                                },
                                                                                            )]],
                                                                                        }),
                                                                                    )
                                                                                case 'interface':
                                                                                    return _p.ss(
                                                                                        $,
                                                                                        ($) => ({
                                                                                            'option': 'interface',
                                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                {
                                                                                                    'extends': _p_change_context(
                                                                                                        $['extends'],
                                                                                                        ($) => ['list', _p.list.map(
                                                                                                            $,
                                                                                                            ($) => Raw_Reference(
                                                                                                                $,
                                                                                                            ),
                                                                                                        )],
                                                                                                    ),
                                                                                                },
                                                                                            )]],
                                                                                        }),
                                                                                    )
                                                                                default:
                                                                                    return _p.au(
                                                                                        $[0],
                                                                                    )
                                                                            }
                                                                        },
                                                                    )],
                                                                ),
                                                                'features': _p_change_context(
                                                                    $['features'],
                                                                    ($) => ['dictionary', _p.dictionary.map(
                                                                        $,
                                                                        ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                'id': _p_change_context(
                                                                                    $['id'],
                                                                                    ($) => ID(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'optional': _p_change_context(
                                                                                    $['optional'],
                                                                                    ($) => ['text', {
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    }],
                                                                                ),
                                                                                'type': _p_change_context(
                                                                                    $['type'],
                                                                                    ($) => ['state', _p.decide.state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
                                                                                                case 'property':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'property',
                                                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                {
                                                                                                                    'type': _p_change_context(
                                                                                                                        $['type'],
                                                                                                                        ($) => Raw_Reference(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                },
                                                                                                            )]],
                                                                                                        }),
                                                                                                    )
                                                                                                case 'link':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'link',
                                                                                                            'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                {
                                                                                                                    'multiple': _p_change_context(
                                                                                                                        $['multiple'],
                                                                                                                        ($) => ['text', {
                                                                                                                            'delimiter': ['quote', null],
                                                                                                                            'value': $,
                                                                                                                        }],
                                                                                                                    ),
                                                                                                                    'type': _p_change_context(
                                                                                                                        $['type'],
                                                                                                                        ($) => Raw_Reference(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    'link type': _p_change_context(
                                                                                                                        $['link type'],
                                                                                                                        ($) => ['state', _p.decide.state(
                                                                                                                            $,
                                                                                                                            ($): t_out.Value.state => {
                                                                                                                                switch ($[0]) {
                                                                                                                                    case 'containment':
                                                                                                                                        return _p.ss(
                                                                                                                                            $,
                                                                                                                                            ($) => ({
                                                                                                                                                'option': 'containment',
                                                                                                                                                'value': ['nothing', null],
                                                                                                                                            }),
                                                                                                                                        )
                                                                                                                                    case 'reference':
                                                                                                                                        return _p.ss(
                                                                                                                                            $,
                                                                                                                                            ($) => ({
                                                                                                                                                'option': 'reference',
                                                                                                                                                'value': ['nothing', null],
                                                                                                                                            }),
                                                                                                                                        )
                                                                                                                                    default:
                                                                                                                                        return _p.au(
                                                                                                                                            $[0],
                                                                                                                                        )
                                                                                                                                }
                                                                                                                            },
                                                                                                                        )],
                                                                                                                    ),
                                                                                                                },
                                                                                                            )]],
                                                                                                        }),
                                                                                                    )
                                                                                                default:
                                                                                                    return _p.au(
                                                                                                        $[0],
                                                                                                    )
                                                                                            }
                                                                                        },
                                                                                    )],
                                                                                ),
                                                                            },
                                                                        )]],
                                                                    )],
                                                                ),
                                                            },
                                                        )]],
                                                    }),
                                                )
                                            case 'datatype':
                                                return _p.ss(
                                                    $,
                                                    ($) => ({
                                                        'option': 'datatype',
                                                        'value': ['state', _p.decide.state(
                                                            $,
                                                            ($): t_out.Value.state => {
                                                                switch ($[0]) {
                                                                    case 'enumeration':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ({
                                                                                'option': 'enumeration',
                                                                                'value': ['dictionary', _p.dictionary.map(
                                                                                    $,
                                                                                    ($, id) => ID(
                                                                                        $,
                                                                                    ),
                                                                                )],
                                                                            }),
                                                                        )
                                                                    default:
                                                                        return _p.au(
                                                                            $[0],
                                                                        )
                                                                }
                                                            },
                                                        )],
                                                    }),
                                                )
                                            default:
                                                return _p.au(
                                                    $[0],
                                                )
                                        }
                                    },
                                )],
                            ),
                        },
                    )]],
                )],
            ),
        },
    )]]
    
    export const ID: t_signatures.ID = ($) => ['optional', _p.decide.optional(
        $,
        ($): t_out.Value.optional => ['set', ['group', ['verbose', _p.dictionary.literal(
            {
                'key': _p_change_context(
                    $['key'],
                    ($) => ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }],
                ),
                'id': _p_change_context(
                    $['id'],
                    ($) => ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }],
                ),
            },
        )]]],
        () => ['not set', null],
    )]
    
    export const Raw_Reference: t_signatures.Raw_Reference = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'resolveInfo': _p_change_context(
                $['resolveInfo'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            'reference': _p_change_context(
                $['reference'],
                ($) => ['optional', _p.decide.optional(
                    $,
                    ($): t_out.Value.optional => ['set', ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }]],
                    () => ['not set', null],
                )],
            ),
        },
    )]]
