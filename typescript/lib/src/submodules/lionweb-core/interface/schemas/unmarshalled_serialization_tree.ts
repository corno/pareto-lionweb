import * as p_ from 'pareto-core/interface/data'

import type * as s_serialization_tree from "../../../../interface/schemas/serialization_tree.js"

export type Singular_Containment = s_serialization_tree.Node.containments.D.D
export type Optional_Containment = p_.Optional_Value<s_serialization_tree.Node.containments.D.D>
export type Multiple_Containments = s_serialization_tree.Node.containments.D


export type Property = s_serialization_tree.Node.properties.D
export type Optional_Property = p_.Optional_Value<s_serialization_tree.Node.properties.D>

export type Singular_Reference = s_serialization_tree.Targets.L
export type Optional_Reference = p_.Optional_Value<s_serialization_tree.Targets.L>
export type Multiple_References = s_serialization_tree.Targets

export type Node_With_Possibly_Unexpected_Containments = s_serialization_tree.Node
export type Node_With_Possibly_Unexpected_Properties = s_serialization_tree.Node
export type Node_With_Possibly_Unexpected_References = s_serialization_tree.Node



