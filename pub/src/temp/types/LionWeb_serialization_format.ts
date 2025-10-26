import * as _et from 'exupery-core-types'
import { Serialization_Chunk } from '../unmarshall'

export type Serialization_Chunk = {
    'serializationFormatVersion': string
    'languages': _et.Array<{
        'key': string
        'version': string
    }>
    'nodes': _et.Array<Serialization_Chunk.Node>
}

export namespace Serialization_Chunk {
    export type Node = {
        'id': string
        'parent': _et.Optional_Value<string>
        'classifier': Meta_Pointer
        'properties': _et.Array<{
            'property': Meta_Pointer
            'value': string
        }>
        'references': _et.Array<{
            'reference': Meta_Pointer
            'targets': Targets
        }>
        'containments': _et.Array<{
            'containment': Meta_Pointer
            'children': _et.Array<string>
        }>
        'annotations': _et.Array<string>
    }
}

export type Targets = _et.Array<{
    'resolveInfo': string
    'reference': _et.Optional_Value<string>
}>

export type Meta_Pointer = {
    'language': string
    'key': string
    'version': string
}
