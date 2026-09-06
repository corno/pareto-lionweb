

import * as i_out from "astn-core/modules/serialization/schemas/sealed_target/schema"

import * as i_in from "../schema.js"


namespace declarations {
    export namespace ID_ {

        export type I = i_in.ID

        export type O = i_out.Value

        export namespace P {

        }

    }

    export type ID_ = (
        context: ID_.I,
    ) => ID_.O

    export namespace Raw_Reference_ {

        export type I = i_in.Raw_Reference

        export type O = i_out.Value

        export namespace P {

        }

    }

    export type Raw_Reference_ = (
        context: Raw_Reference_.I,
    ) => Raw_Reference_.O

    export namespace Singular_Reference_ {

        export type I = i_in.Singular_Reference

        export type O = i_out.Value

        export namespace P {

        }

    }

    export type Singular_Reference_ = (
        context: Singular_Reference_.I,
    ) => Singular_Reference_.O

    export namespace References_ {

        export type I = i_in.References

        export type O = i_out.Value

        export namespace P {

        }

    }

    export type References_ = (
        context: References_.I,
    ) => References_.O

    export namespace Optional_Reference_ {

        export type I = i_in.Optional_Reference

        export type O = i_out.Value

        export namespace P {

        }

    }

    export type Optional_Reference_ = (
        context: Optional_Reference_.I,
    ) => Optional_Reference_.O
}

import * as p_ from 'pareto-core/transformer'
import p_implement_me from 'pareto-core-dev/implement_me'

import p_change_context from 'pareto-core/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/transformer/specials/text_from_list'

import * as t_out from "astn-core/modules/serialization/schemas/sealed_target/schema"

export const ID: declarations.ID_ = ($) => ['group', ['verbose', p_.literal.dictionary(
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
            ($) => ['optional', p_.from.optional($).decide<t_out.Value.optional>(
                ($) => p_implement_me("FFDSFSFDKJ"),
                () => ['not set', null],
            )],
        ),
    },
)]]

export const Raw_Reference: declarations.Raw_Reference_ = ($) => ['group', ['verbose', p_.literal.dictionary(
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
            ($) => ['optional', p_.from.optional($).decide(
                ($): t_out.Value.optional => ['set', ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }]],
                () => ['not set', null],
            )],
        ),
    },
)]]

export const Singular_Reference: declarations.Singular_Reference_ = ($) => Raw_Reference(
    $,
)

export const References: declarations.References_ = ($) => ['list', p_.from.list($,
).map(
    ($) => Raw_Reference(
        $,
    ),
)]

export const Optional_Reference: declarations.Optional_Reference_ = ($) => ['optional', p_.from.optional($).decide(
    ($): t_out.Value.optional => ['set', Raw_Reference(
        $,
    )],
    () => ['not set', null],
)]
