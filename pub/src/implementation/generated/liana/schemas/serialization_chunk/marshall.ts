
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/serialization_chunk/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const Meta_Pointer: t_signatures.Meta_Pointer = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'language': _p_cc(
            $['language'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }]
        ),
        'key': _p_cc(
            $['key'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }]
        ),
        'version': _p_cc(
            $['version'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }]
        ),
    }
)]]

export const Targets: t_signatures.Targets = ($) => ['list', _p.list.map(
    $,
    ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            'resolveInfo': _p_cc(
                $['resolveInfo'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }]
            ),
            'reference': _p_cc(
                $['reference'],
                ($) => ['optional', _p.decide.optional(
                    $,
                    ($): t_out.Value.optional => ['set', ['text', {
                        'delimiter': ['quote', null],
                        'value': $,
                    }]],
                    () => ['not set', null]
                )]
            ),
        }
    )]]
)]

export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'serializationFormatVersion': _p_cc(
            $['serializationFormatVersion'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }]
        ),
        'languages': _p_cc(
            $['languages'],
            ($) => ['list', _p.list.map(
                $,
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        'key': _p_cc(
                            $['key'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }]
                        ),
                        'version': _p_cc(
                            $['version'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }]
                        ),
                    }
                )]]
            )]
        ),
        'nodes': _p_cc(
            $['nodes'],
            ($) => ['list', _p.list.map(
                $,
                ($) => ['group', ['verbose', _p.dictionary.literal(
                    {
                        'id': _p_cc(
                            $['id'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }]
                        ),
                        'parent': _p_cc(
                            $['parent'],
                            ($) => ['optional', _p.decide.optional(
                                $,
                                ($): t_out.Value.optional => ['set', ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]],
                                () => ['not set', null]
                            )]
                        ),
                        'classifier': _p_cc(
                            $['classifier'],
                            ($) => Meta_Pointer(
                                $
                            )
                        ),
                        'properties': _p_cc(
                            $['properties'],
                            ($) => ['list', _p.list.map(
                                $,
                                ($) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        'property': _p_cc(
                                            $['property'],
                                            ($) => Meta_Pointer(
                                                $
                                            )
                                        ),
                                        'value': _p_cc(
                                            $['value'],
                                            ($) => ['text', {
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            }]
                                        ),
                                    }
                                )]]
                            )]
                        ),
                        'references': _p_cc(
                            $['references'],
                            ($) => ['list', _p.list.map(
                                $,
                                ($) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        'reference': _p_cc(
                                            $['reference'],
                                            ($) => Meta_Pointer(
                                                $
                                            )
                                        ),
                                        'targets': _p_cc(
                                            $['targets'],
                                            ($) => Targets(
                                                $
                                            )
                                        ),
                                    }
                                )]]
                            )]
                        ),
                        'containments': _p_cc(
                            $['containments'],
                            ($) => ['list', _p.list.map(
                                $,
                                ($) => ['group', ['verbose', _p.dictionary.literal(
                                    {
                                        'containment': _p_cc(
                                            $['containment'],
                                            ($) => Meta_Pointer(
                                                $
                                            )
                                        ),
                                        'children': _p_cc(
                                            $['children'],
                                            ($) => ['list', _p.list.map(
                                                $,
                                                ($) => ['text', {
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                }]
                                            )]
                                        ),
                                    }
                                )]]
                            )]
                        ),
                        'annotations': _p_cc(
                            $['annotations'],
                            ($) => ['list', _p.list.map(
                                $,
                                ($) => ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]
                            )]
                        ),
                    }
                )]]
            )]
        ),
    }
)]]
