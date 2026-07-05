
import * as p_ from 'pareto-core/implementation/transformer'
import * as p_di from 'pareto-core/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_chunk/signatures/transformers/astn_sealed_target.js"

import * as t_out from "astn-core/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/implementation/manual/transformers/primitives/text"

import * as v_external_location from "../../location/transformers/astn_sealed_target.js"

export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "serializationFormatVersion": p_change_context(
            $['serializationFormatVersion'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "languages": p_change_context(
            $['languages'],
            ($) => ['list', p_.from.list($,
            ).map(
                ($) => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "key": p_change_context(
                            $['key'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "version": p_change_context(
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
        "nodes": p_change_context(
            $['nodes'],
            ($) => ['list', p_.from.list($,
            ).map(
                ($) => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "id": p_change_context(
                            $['id'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "range": p_change_context(
                            $['range'],
                            ($) => v_external_location.Range(
                                $,
                            ),
                        ),
                        "parent": p_change_context(
                            $['parent'],
                            ($) => ['optional', p_decide_optional(
                                $,
                                ($): t_out.Value.optional => ['set', ['text', {
                                    'delimiter': ['quote', null],
                                    'value': $,
                                }]],
                                () => ['not set', null],
                            )],
                        ),
                        "classifier": p_change_context(
                            $['classifier'],
                            ($) => Meta_Pointer(
                                $,
                            ),
                        ),
                        "properties": p_change_context(
                            $['properties'],
                            ($) => ['list', p_.from.list($,
                            ).map(
                                ($) => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "property": p_change_context(
                                            $['property'],
                                            ($) => Meta_Pointer(
                                                $,
                                            ),
                                        ),
                                        "value": p_change_context(
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
                        "references": p_change_context(
                            $['references'],
                            ($) => ['list', p_.from.list($,
                            ).map(
                                ($) => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "reference": p_change_context(
                                            $['reference'],
                                            ($) => Meta_Pointer(
                                                $,
                                            ),
                                        ),
                                        "targets": p_change_context(
                                            $['targets'],
                                            ($) => Targets(
                                                $,
                                            ),
                                        ),
                                    },
                                )]],
                            )],
                        ),
                        "containments": p_change_context(
                            $['containments'],
                            ($) => ['list', p_.from.list($,
                            ).map(
                                ($) => ['group', ['verbose', p_.literal.dictionary(
                                    {
                                        "containment": p_change_context(
                                            $['containment'],
                                            ($) => Meta_Pointer(
                                                $,
                                            ),
                                        ),
                                        "children": p_change_context(
                                            $['children'],
                                            ($) => ['list', p_.from.list($,
                                            ).map(
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
                        "annotations": p_change_context(
                            $['annotations'],
                            ($) => ['list', p_.from.list($,
                            ).map(
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

export const Targets: t_signatures.Targets = ($) => ['list', p_.from.list($,
).map(
    ($) => ['group', ['verbose', p_.literal.dictionary(
        {
            "resolveInfo": p_change_context(
                $['resolveInfo'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            "reference": p_change_context(
                $['reference'],
                ($) => ['optional', p_decide_optional(
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

export const Meta_Pointer: t_signatures.Meta_Pointer = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "language": p_change_context(
            $['language'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "key": p_change_context(
            $['key'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "version": p_change_context(
            $['version'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
    },
)]]
