
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/generic/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_location from "../../location/transformers/astn_sealed_target"

export const ID: t_signatures.ID = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "key": _p_change_context(
            $['key'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "id": _p_change_context(
            $['id'],
            ($) => ['text', {
                'delimiter': ['quote', null],
                'value': $,
            }],
        ),
        "source": _p_change_context(
            $['source'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', v_external_location.Range(
                    $,
                )],
                () => ['not set', null],
            )],
        ),
    },
)]]

export const Raw_Reference: t_signatures.Raw_Reference = ($) => ['group', ['verbose', _p.dictionary.literal(
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
)]]

export const Singular_Reference: t_signatures.Singular_Reference = ($) => Raw_Reference(
    $,
)

export const References: t_signatures.References = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => Raw_Reference(
        $,
    ),
)]

export const Optional_Reference: t_signatures.Optional_Reference = ($) => ['optional', _p.decide.optional(
    $,
    ($): t_out.Value.optional => ['set', Raw_Reference(
        $,
    )],
    () => ['not set', null],
)]
