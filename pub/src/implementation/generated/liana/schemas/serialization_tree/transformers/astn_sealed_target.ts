    
    import * as _p from 'pareto-core/dist/expression'
    
    import _p_change_context from 'pareto-core/dist/_p_change_context'
    
    import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_tree/marshall"
    
    import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"
    
    import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"
    
    import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
    
    export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            "serializationFormatVersion": _p_change_context(
                $['serializationFormatVersion'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            "languages": _p_change_context(
                $['languages'],
                ($) => ['list', _p.list.map(
                    $,
                    ($) => ['group', ['verbose', _p.dictionary.literal(
                        {
                            "key": _p_change_context(
                                $['key'],
                                ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }],
                            ),
                            "version": _p_change_context(
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
            "root node id": _p_change_context(
                $['root node id'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            "node tree": _p_change_context(
                $['node tree'],
                ($) => Node(
                    $,
                ),
            ),
        },
    )]]
    
    export const Node: t_signatures.Node = ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            "classifier": _p_change_context(
                $['classifier'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            "properties": _p_change_context(
                $['properties'],
                ($) => ['dictionary', _p.dictionary.map(
                    $,
                    ($, id) => ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }],
                )],
            ),
            "containments": _p_change_context(
                $['containments'],
                ($) => ['dictionary', _p.dictionary.map(
                    $,
                    ($, id) => ['dictionary', _p.dictionary.map(
                        $,
                        ($, id) => Node(
                            $,
                        ),
                    )],
                )],
            ),
            "references": _p_change_context(
                $['references'],
                ($) => ['dictionary', _p.dictionary.map(
                    $,
                    ($, id) => Targets(
                        $,
                    ),
                )],
            ),
            "annotations": _p_change_context(
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
    )]]
    
    export const Targets: t_signatures.Targets = ($) => ['list', _p.list.map(
        $,
        ($) => ['group', ['verbose', _p.dictionary.literal(
            {
                "resolveInfo": _p_change_context(
                    $['resolveInfo'],
                    ($) => ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }],
                ),
                "reference": _p_change_context(
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
