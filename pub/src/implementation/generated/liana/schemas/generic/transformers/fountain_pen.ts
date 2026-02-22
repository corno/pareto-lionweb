
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/generic/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

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
