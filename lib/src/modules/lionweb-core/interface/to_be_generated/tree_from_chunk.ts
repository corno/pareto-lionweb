
import * as d_chunk from "../../../../interface/generated/liana/schemas/serialization_chunk/data"
import * as d_location from "astn-core/dist/interface/generated/liana/schemas/location/data"

export type Error = {
    'range': d_location.Range
    'type':
    | ['could not determine root node', null]
    | ['node', Node_Error]
}

export type Node_Error = {
    'node': d_chunk.Serialization_Chunk.nodes.L,
    'type':
    | ['clashing node IDs', null]
    | ['clashing child node IDs', null]
    | ['clashing property keys', null]
    | ['child node not found', string]
    | ['clashing containment keys', null]
    | ['clashing reference keys', null]
}