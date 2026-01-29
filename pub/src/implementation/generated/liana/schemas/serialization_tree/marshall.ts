
import * as _p from "pareto-core/dist/transformer"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/serialization_tree/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const Targets: t_signatures.Targets = ($) => ['list', $.__l_map(
    ($) => ['group', ['verbose', _p.dictionary.literal(
        ({
            'resolveInfo': _p_cc(
                $['resolveInfo'], 
                ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]
            ),
            'reference': _p_cc(
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
        'classifier': _p_cc(
            $['classifier'], 
            ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]
        ),
        'properties': _p_cc(
            $['properties'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]
            )]
        ),
        'containments': _p_cc(
            $['containments'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => ['dictionary', $.__d_map(
                    ($,id) => Node(
                        $
                    )
                )]
            )]
        ),
        'references': _p_cc(
            $['references'], 
            ($) => ['dictionary', $.__d_map(
                ($,id) => Targets(
                    $
                )
            )]
        ),
        'annotations': _p_cc(
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
        'serializationFormatVersion': _p_cc(
            $['serializationFormatVersion'], 
            ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]
        ),
        'languages': _p_cc(
            $['languages'], 
            ($) => ['list', $.__l_map(
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    ({
                        'key': _p_cc(
                            $['key'], 
                            ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]
                        ),
                        'version': _p_cc(
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
        'root node id': _p_cc(
            $['root node id'], 
            ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]
        ),
        'node tree': _p_cc(
            $['node tree'], 
            ($) => Node(
                $
            )
        ),
    })
)]]
