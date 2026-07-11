import * as p_ from 'pareto-core/interface/data'

import type * as s_chunk from "../../../../interface/schemas/serialization_chunk.js"
import type * as s_location from "astn-core/interface/data/location"

export type Error = {
    'range': s_location.Range
    'type':
    | ['could not determine root node', null]
    | ['node', Node_Error]
}

export type Node_Error = {
    'node': s_chunk.Serialization_Chunk.nodes.L,
    'type':
    | ['clashing node IDs', null]
    | ['clashing child node IDs', null]
    | ['clashing property keys', null]
    | ['child node not found', string]
    | ['clashing containment keys', null]
    | ['clashing reference keys', null]
}

export type Node_Parameters = {
    'nodes': p_.Dictionary<s_chunk.Serialization_Chunk.nodes.L>,
}
