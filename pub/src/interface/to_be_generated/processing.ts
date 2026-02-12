
//data types
import * as d_unmarshall from "../../modules/lionweb-core/interface/to_be_generated/unmarshall_serialization_tree"
import * as d_deserialize_serialization_tree from "../../modules/lionweb-core/interface/to_be_generated/deserialize_serialization_tree"


export type Error =
    | ['deserialization error', d_deserialize_serialization_tree.Error]
    | ['unmarshalling error', d_unmarshall.Error]

export type Parameter = d_deserialize_serialization_tree.Parameter
