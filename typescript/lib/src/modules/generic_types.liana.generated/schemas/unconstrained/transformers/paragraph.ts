
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_in from "../schema.js"

import * as i_out from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/schema"

namespace declarations {
    export namespace ID_ {

        export type I = i_in.ID

        export type O = i_out.Paragraph

        export namespace P {

        }

    }

    export type ID_ = (
        context: ID_.I,
    ) => ID_.O

    export namespace Raw_Reference_ {

        export type I = i_in.Raw_Reference

        export type O = i_out.Paragraph

        export namespace P {

        }

    }

    export type Raw_Reference_ = (
        context: Raw_Reference_.I,
    ) => Raw_Reference_.O

    export namespace Singular_Reference_ {

        export type I = i_in.Singular_Reference

        export type O = i_out.Paragraph

        export namespace P {

        }

    }

    export type Singular_Reference_ = (
        context: Singular_Reference_.I,
    ) => Singular_Reference_.O

    export namespace References_ {

        export type I = i_in.References

        export type O = i_out.Paragraph

        export namespace P {

        }

    }

    export type References_ = (
        context: References_.I,
    ) => References_.O

    export namespace Optional_Reference_ {

        export type I = i_in.Optional_Reference

        export type O = i_out.Paragraph

        export namespace P {

        }

    }

    export type Optional_Reference_ = (
        context: Optional_Reference_.I,
    ) => Optional_Reference_.O
}

import * as v_serialize from "astn-core/modules/serialization/schemas/sealed_target/transformers/paragraph"

import * as v_marshall from "./astn_sealed_target.js"

export const ID: declarations.ID_ = ($) => v_serialize.Document(
    v_marshall.ID(
        $,
    ),
)

export const Raw_Reference: declarations.Raw_Reference_ = ($) => v_serialize.Document(
    v_marshall.Raw_Reference(
        $,
    ),
)

export const Singular_Reference: declarations.Singular_Reference_ = ($) => v_serialize.Document(
    v_marshall.Singular_Reference(
        $,
    ),
)

export const References: declarations.References_ = ($) => v_serialize.Document(
    v_marshall.References(
        $,
    ),
)

export const Optional_Reference: declarations.Optional_Reference_ = ($) => v_serialize.Document(
    v_marshall.Optional_Reference(
        $,
    ),
)
