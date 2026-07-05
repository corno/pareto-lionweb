
import * as p_ from 'pareto-core/implementation/transformer'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_tree/signatures/transformers/fountain_pen.js"

import * as v_serialize from "astn-core/implementation/manual/transformers/sealed_target/prose"

import * as v_marshall from "./astn_sealed_target.js"

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
