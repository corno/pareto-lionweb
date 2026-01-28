
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/serialization_tree/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const Targets: t_signatures.Targets = ($) => ['list', $.__l_map(
    ($) => ['group', ['verbose', _p.dictionary.literal(
        ({
            'resolveInfo': _p.deprecated_cc(
                $['resolveInfo'], 
                ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]
            ),
            'reference': _p.deprecated_cc(
                $['reference'], 
                ($) => ['optional', $.__decide(
                    ($): t_out.Value.optional => ['set', ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]], 
                    () => ['not set', null]
                )]
            ),
        })
    )]]
)]
export const Node: t_signatures.Node = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'classifier': _p.deprecated_cc(
            $['classifier'], 
            ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]
        ),
        'properties': _p.deprecated_cc(
            $['properties'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]
            )]
        ),
        'containments': _p.deprecated_cc(
            $['containments'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['dictionary', $.__d_map(
                    ($,id) => Node(
                        $
                    )
                )]
            )]
        ),
        'references': _p.deprecated_cc(
            $['references'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => Targets(
                    $
                )
            )]
        ),
        'annotations': _p.deprecated_cc(
            $['annotations'], 
            ($) => ['list', $.__l_map(
                ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]
            )]
        ),
    })
)]]
export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'serializationFormatVersion': _p.deprecated_cc(
            $['serializationFormatVersion'], 
            ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]
        ),
        'languages': _p.deprecated_cc(
            $['languages'], 
            ($) => ['list', $.__l_map(
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'key': _p.deprecated_cc(
                            $['key'], 
                            ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]
                        ),
                        'version': _p.deprecated_cc(
                            $['version'], 
                            ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]
                        ),
                    })
                )]]
            )]
        ),
        'root node id': _p.deprecated_cc(
            $['root node id'], 
            ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]
        ),
        'node tree': _p.deprecated_cc(
            $['node tree'], 
            ($) => Node(
                $
            )
        ),
    })
)]]
