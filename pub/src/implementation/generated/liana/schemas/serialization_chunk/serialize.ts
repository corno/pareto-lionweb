
import * as _p from "pareto-core/dist/serializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/serialization_chunk/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"

export const Meta_Pointer: t_signatures.Meta_Pointer = ($) => v_serialize.Document(
    v_marshall.Meta_Pointer(
        $
    )
)

export const Targets: t_signatures.Targets = ($) => v_serialize.Document(
    v_marshall.Targets(
        $
    )
)

export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($) => v_serialize.Document(
    v_marshall.Serialization_Chunk(
        $
    )
)
