import * as _et from 'exupery-core-types'

import * as d_serialization_format from "./LionWeb_serialization_format"

export type Serialization_Chunk = {
    'serializationFormatVersion': string
    'languages': _et.Array<{
        'key': string
        'version': string
    }>
    'root node id': string
    'node tree': Node
}

export type Node = {
    'classifier': string
    'properties': _et.Dictionary<string>
    'containments': _et.Dictionary<_et.Dictionary<Node>>
    'references': _et.Dictionary<d_serialization_format.Targets>
    'annotations': _et.Array<string>
}