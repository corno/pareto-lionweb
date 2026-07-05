
import * as p_ from 'pareto-core/implementation/transformer'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_chunk/signatures/transformers/fountain_pen.js"

import * as v_serialize from "astn-core/implementation/manual/transformers/sealed_target/prose"

import * as v_marshall from "./astn_sealed_target.js"

export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($) => v_serialize.Document(
    v_marshall.Serialization_Chunk(
        $,
    ),
)

export const Targets: t_signatures.Targets = ($) => v_serialize.Document(
    v_marshall.Targets(
        $,
    ),
)

export const Meta_Pointer: t_signatures.Meta_Pointer = ($) => v_serialize.Document(
    v_marshall.Meta_Pointer(
        $,
    ),
)
