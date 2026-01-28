
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/serialization_chunk/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const Meta_Pointer: t_signatures.Meta_Pointer = ($) => ['group', ['verbose', _p.dictionary.literal(
    ({
        'language': _p.deprecated_cc(
            $['language'], 
            ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]
        ),
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
        'nodes': _p.deprecated_cc(
            $['nodes'], 
            ($) => ['list', $.__l_map(
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'id': _p.deprecated_cc(
                            $['id'], 
                            ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]
                        ),
                        'parent': _p.deprecated_cc(
                            $['parent'], 
                            ($) => ['optional', $.__decide(
                                ($): t_out.Value.optional => ['set', ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]], 
                                () => ['not set', null]
                            )]
                        ),
                        'classifier': _p.deprecated_cc(
                            $['classifier'], 
                            ($) => Meta_Pointer(
                                $
                            )
                        ),
                        'properties': _p.deprecated_cc(
                            $['properties'], 
                            ($) => ['list', $.__l_map(
                                ($) => ['group', ['verbose', _p.dictionary.literal(
                                    ({
                                        'property': _p.deprecated_cc(
                                            $['property'], 
                                            ($) => Meta_Pointer(
                                                $
                                            )
                                        ),
                                        'value': _p.deprecated_cc(
                                            $['value'], 
                                            ($) => ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]
                                        ),
                                    })
                                )]]
                            )]
                        ),
                        'references': _p.deprecated_cc(
                            $['references'], 
                            ($) => ['list', $.__l_map(
                                ($) => ['group', ['verbose', _p.dictionary.literal(
                                    ({
                                        'reference': _p.deprecated_cc(
                                            $['reference'], 
                                            ($) => Meta_Pointer(
                                                $
                                            )
                                        ),
                                        'targets': _p.deprecated_cc(
                                            $['targets'], 
                                            ($) => Targets(
                                                $
                                            )
                                        ),
                                    })
                                )]]
                            )]
                        ),
                        'containments': _p.deprecated_cc(
                            $['containments'], 
                            ($) => ['list', $.__l_map(
                                ($) => ['group', ['verbose', _p.dictionary.literal(
                                    ({
                                        'containment': _p.deprecated_cc(
                                            $['containment'], 
                                            ($) => Meta_Pointer(
                                                $
                                            )
                                        ),
                                        'children': _p.deprecated_cc(
                                            $['children'], 
                                            ($) => ['list', $.__l_map(
                                                ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]
                                            )]
                                        ),
                                    })
                                )]]
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
            )]
        ),
    })
)]]
