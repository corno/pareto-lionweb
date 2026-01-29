
import * as _p from "pareto-core/dist/serializer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/serialization_tree/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"

export const Targets: t_signatures.Targets = ($) => v_serialize.Document(
    v_marshall.Targets(
        $
    )
)

export const Node: t_signatures.Node = ($) => v_serialize.Document(
    v_marshall.Node(
        $
    )
)

export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($) => v_serialize.Document(
    v_marshall.Serialization_Chunk(
        $
    )
)
