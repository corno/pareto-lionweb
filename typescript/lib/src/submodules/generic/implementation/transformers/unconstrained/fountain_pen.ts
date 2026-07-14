
import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/unconstrained.js"
import type * as s_out from "../../../interface/schemas/prose.js"

namespace t_signatures {
    export type ID = p_.Transformer<
        s_in.ID,
        s_out.Paragraph
    >
    export type Raw_Reference = p_.Transformer<
        s_in.Raw_Reference,
        s_out.Paragraph
    >
    export type Singular_Reference = p_.Transformer<
        s_in.Singular_Reference,
        s_out.Paragraph
    >
    export type References = p_.Transformer<
        s_in.References,
        s_out.Paragraph
    >
    export type Optional_Reference = p_.Transformer<
        s_in.Optional_Reference,
        s_out.Paragraph
    >
}

import * as v_serialize from "astn-core/implementation/transformers/sealed_target/prose"

import * as v_marshall from "./astn_sealed_target.js"

export const ID: t_signatures.ID = ($) => v_serialize.Document(
    v_marshall.ID(
        $,
    ),
)

export const Raw_Reference: t_signatures.Raw_Reference = ($) => v_serialize.Document(
    v_marshall.Raw_Reference(
        $,
    ),
)

export const Singular_Reference: t_signatures.Singular_Reference = ($) => v_serialize.Document(
    v_marshall.Singular_Reference(
        $,
    ),
)

export const References: t_signatures.References = ($) => v_serialize.Document(
    v_marshall.References(
        $,
    ),
)

export const Optional_Reference: t_signatures.Optional_Reference = ($) => v_serialize.Document(
    v_marshall.Optional_Reference(
        $,
    ),
)
