    
    import * as _p from "pareto-core/dist/expression"
    
    import _p_change_context from "pareto-core/dist/_p_change_context"
    
    import _p_text_from_list from "pareto-core/dist/_p_text_from_list"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_chunk/marshall"
    
    import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"
    
    import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"
    
    import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
    
    export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'serializationFormatVersion': _p_change_context(
                $['serializationFormatVersion'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            'languages': _p_change_context(
                $['languages'],
                ($) => ['list', _p.list.map(
                    $,
                    ($) => ['group', ['verbose', _p.dictionary.literal(
                        {
                            'key': _p_change_context(
                                $['key'],
                                ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }],
                            ),
                            'version': _p_change_context(
                                $['version'],
                                ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }],
                            ),
                        },
                    )]],
                )],
            ),
            'nodes': _p_change_context(
                $['nodes'],
                ($) => ['list', _p.list.map(
                    $,
                    ($) => ['group', ['verbose', _p.dictionary.literal(
                        {
                            'id': _p_change_context(
                                $['id'],
                                ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }],
                            ),
                            'parent': _p_change_context(
                                $['parent'],
                                ($) => ['optional', _p.decide.optional(
                                    $,
                                    ($): t_out.Value.optional => ['set', ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }]],
                                    () => ['not set', null],
                                )],
                            ),
                            'classifier': _p_change_context(
                                $['classifier'],
                                ($) => Meta_Pointer(
                                    $,
                                ),
                            ),
                            'properties': _p_change_context(
                                $['properties'],
                                ($) => ['list', _p.list.map(
                                    $,
                                    ($) => ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            'property': _p_change_context(
                                                $['property'],
                                                ($) => Meta_Pointer(
                                                    $,
                                                ),
                                            ),
                                            'value': _p_change_context(
                                                $['value'],
                                                ($) => ['text', {
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                }],
                                            ),
                                        },
                                    )]],
                                )],
                            ),
                            'references': _p_change_context(
                                $['references'],
                                ($) => ['list', _p.list.map(
                                    $,
                                    ($) => ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            'reference': _p_change_context(
                                                $['reference'],
                                                ($) => Meta_Pointer(
                                                    $,
                                                ),
                                            ),
                                            'targets': _p_change_context(
                                                $['targets'],
                                                ($) => Targets(
                                                    $,
                                                ),
                                            ),
                                        },
                                    )]],
                                )],
                            ),
                            'containments': _p_change_context(
                                $['containments'],
                                ($) => ['list', _p.list.map(
                                    $,
                                    ($) => ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            'containment': _p_change_context(
                                                $['containment'],
                                                ($) => Meta_Pointer(
                                                    $,
                                                ),
                                            ),
                                            'children': _p_change_context(
                                                $['children'],
                                                ($) => ['list', _p.list.map(
                                                    $,
                                                    ($) => ['text', {
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    }],
                                                )],
                                            ),
                                        },
                                    )]],
                                )],
                            ),
                            'annotations': _p_change_context(
                                $['annotations'],
                                ($) => ['list', _p.list.map(
                                    $,
                                    ($) => ['text', {
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    }],
                                )],
                            ),
                        },
                    )]],
                )],
            ),
        },
    )]]
    
    export const Targets: t_signatures.Targets = ($) => ['list', _p.list.map(
        $,
        ($) => ['group', ['verbose', _p.dictionary.literal(
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
        )]],
    )]
    
    export const Meta_Pointer: t_signatures.Meta_Pointer = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'language': _p_change_context(
                $['language'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            'key': _p_change_context(
                $['key'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            'version': _p_change_context(
                $['version'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
        },
    )]]
