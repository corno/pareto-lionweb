
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_tree/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_location from "../../location/transformers/astn_sealed_target"

export const Serialization_Tree: t_signatures.Serialization_Tree = ($) => ['group', ['verbose', p_.literal.dictionary(
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
        "root node id": p_change_context(
            $['root node id'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "node tree": p_change_context(
            $['node tree'],
            ($) => Node(
                $,
            ),
        ),
    },
)]]

export const Node: t_signatures.Node = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "range": p_change_context(
            $['range'],
            ($) => v_external_location.Range(
                $,
            ),
        ),
        "classifier": p_change_context(
            $['classifier'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "properties": p_change_context(
            $['properties'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            )],
        ),
        "containments": p_change_context(
            $['containments'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id) => ['dictionary', p_.from.dictionary($,
                ).map(
                    ($, id) => Node(
                        $,
                    ),
                )],
            )],
        ),
        "references": p_change_context(
            $['references'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id) => Targets(
                    $,
                ),
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
