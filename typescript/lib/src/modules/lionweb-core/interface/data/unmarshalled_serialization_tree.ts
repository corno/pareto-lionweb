import * as p_ from 'pareto-core/interface/data'

import * as d_serialization_tree from "../../../../interface/generated/liana/schemas/serialization_tree/data.js"

export type Singular_Containment = d_serialization_tree.Node.containments.D.D
export type Optional_Containment = p_.Optional_Value<d_serialization_tree.Node.containments.D.D>
export type Multiple_Containments = d_serialization_tree.Node.containments.D


export type Property = d_serialization_tree.Node.properties.D
export type Optional_Property = p_.Optional_Value<d_serialization_tree.Node.properties.D>

export type Singular_Reference = d_serialization_tree.Targets.L
export type Optional_Reference = p_.Optional_Value<d_serialization_tree.Targets.L>
export type Multiple_References = d_serialization_tree.Targets

export type Node_With_Possibly_Unexpected_Containments = d_serialization_tree.Node
export type Node_With_Possibly_Unexpected_Properties = d_serialization_tree.Node
export type Node_With_Possibly_Unexpected_References = d_serialization_tree.Node



