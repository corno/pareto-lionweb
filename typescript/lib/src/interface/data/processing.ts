
//data types
import type * as d_lion_core_from_serialization_tree from "../../modules/lionweb-core/interface/data/lion_core_from_serialization_tree.js"
import type * as d_deserialize_serialization_tree from "../../modules/lionweb-core/interface/data/deserialize_serialization_tree.js"


export type Error =
    | ['serialization tree', d_deserialize_serialization_tree.Error]
    | ['lioncore', d_lion_core_from_serialization_tree.Error]

export type Parameter = d_deserialize_serialization_tree.Parameter
