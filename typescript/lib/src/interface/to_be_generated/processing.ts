
//data types
import * as d_lion_core_from_serialization_tree from "../../modules/lionweb-core/interface/to_be_generated/lion_core_from_serialization_tree"
import * as d_deserialize_serialization_tree from "../../modules/lionweb-core/interface/to_be_generated/deserialize_serialization_tree"


export type Error =
    | ['serialization tree', d_deserialize_serialization_tree.Error]
    | ['lioncore', d_lion_core_from_serialization_tree.Error]

export type Parameter = d_deserialize_serialization_tree.Parameter
