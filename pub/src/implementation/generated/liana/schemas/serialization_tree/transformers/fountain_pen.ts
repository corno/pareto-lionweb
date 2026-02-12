
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_tree/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const Serialization_Tree: t_signatures.Serialization_Tree = ($) => v_serialize.Document(
    v_marshall.Serialization_Tree(
        $,
    ),
)

export const Node: t_signatures.Node = ($) => v_serialize.Document(
    v_marshall.Node(
        $,
    ),
)

export const Targets: t_signatures.Targets = ($) => v_serialize.Document(
    v_marshall.Targets(
        $,
    ),
)
