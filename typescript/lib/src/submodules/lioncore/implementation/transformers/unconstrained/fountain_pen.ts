
import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/unconstrained.js"
import type * as s_out from "../../../interface/schemas/prose.js"

namespace t_signatures {
    export type M3 = p_.Transformer<
        s_in.M3,
        s_out.Paragraph
    >
}

import * as v_serialize from "astn-core/implementation/transformers/sealed_target/prose"

import * as v_marshall from "./astn_sealed_target.js"

export const M3: t_signatures.M3 = ($) => v_serialize.Document(
    v_marshall.M3(
        $,
    ),
)
