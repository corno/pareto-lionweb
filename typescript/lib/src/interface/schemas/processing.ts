
//schemas
import type * as s_lion_core_from_serialization_tree from "../../submodules/lionweb-core/interface/schemas/lion_core_from_serialization_tree.js"
import type * as s_deserialize_serialization_tree from "../../submodules/lionweb-core/interface/schemas/deserialize_serialization_tree.js"


export type Error =
    | ['serialization tree', s_deserialize_serialization_tree.Error]
    | ['lioncore', s_lion_core_from_serialization_tree.Error]

export type Parameter = s_deserialize_serialization_tree.Parameter
