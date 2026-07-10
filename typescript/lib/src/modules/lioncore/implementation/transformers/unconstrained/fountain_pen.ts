
import * as p_ from 'pareto-core/implementation/transformer'

import * as t_signatures from "../../../declarations/transformers/unconstrained/fountain_pen.js"

import * as v_serialize from "astn-core/implementation/transformers/sealed_target/prose"

import * as v_marshall from "./astn_sealed_target.js"

export const M3: t_signatures.M3 = ($) => v_serialize.Document(
    v_marshall.M3(
        $,
    ),
)
