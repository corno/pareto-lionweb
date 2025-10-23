import * as _et from 'exupery-core-types'

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
    'references': _et.Dictionary<_et.Array<{
        'resolveInfo': string
        'reference': string
    }>>
    'annotations': _et.Array<string>
}