import * as _pi from 'pareto-core/dist/interface'

import * as d_location from "astn-core/dist/interface/generated/liana/schemas/location/data"
import * as d_serialization_tree from "../../../../interface/generated/liana/schemas/serialization_tree/data"

export type Error = {
    'node': d_serialization_tree.Node
    'type':
    | ['missing content', {
        'type':
        | ['containment', null]
        | ['property', null]
        | ['reference', null]
        'id': string
    }]
    | ['unexpected content', {
        'containments': Unexpected_Content
        'properties': Unexpected_Content
        'references': Unexpected_Content
    }]
    | ['too many feature elements', null]
    | ['missing feature element', null]
    | ['unknown option', {
        'option name': string
        'state name': string
    }]
    | ['expected single element', string]
}

export type Unexpected_Content = {
    'unexpected': _pi.Dictionary<null>
    'expected': _pi.Dictionary<null>
}


export type Optional_Error = _pi.Optional_Value<Error>