
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lioncore/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const M3: t_signatures.M3 = ($) => v_serialize.Document(
    v_marshall.M3(
        $,
    ),
)
