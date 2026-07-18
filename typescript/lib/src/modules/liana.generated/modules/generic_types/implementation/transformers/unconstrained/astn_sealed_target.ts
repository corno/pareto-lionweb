
import * as p_ from 'pareto-core/implementation/transformer'
import p_implement_me from 'pareto-core-dev/implement_me'
import * as p_di from 'pareto-core/interface/data'
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../declarations/transformers/unconstrained/astn_sealed_target.js"

import * as t_out from "astn-core/modules/serialization/schemas/sealed_target"

export const ID: t_signatures.ID = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "key": p_change_context(
            $['key'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "id": p_change_context(
            $['id'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "source": p_change_context(
            $['source'],
            ($) => ['optional', p_decide_optional(
                $,
                // ($): t_out.Value.optional => ['set', v_external_location.Range(
                //     $,
                // )],
                ($): t_out.Value.optional => p_implement_me("FFDSFSFDKJ"),
                () => ['not set', null],
            )],
        ),
    },
)]]

export const Raw_Reference: t_signatures.Raw_Reference = ($) => ['group', ['verbose', p_.literal.dictionary(
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
)]]

export const Singular_Reference: t_signatures.Singular_Reference = ($) => Raw_Reference(
    $,
)

export const References: t_signatures.References = ($) => ['list', p_.from.list($,
).map(
    ($) => Raw_Reference(
        $,
    ),
)]

export const Optional_Reference: t_signatures.Optional_Reference = ($) => ['optional', p_decide_optional(
    $,
    ($): t_out.Value.optional => ['set', Raw_Reference(
        $,
    )],
    () => ['not set', null],
)]
