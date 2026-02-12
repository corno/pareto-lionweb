import * as _pi from 'pareto-core/dist/interface'

import * as d_location from "astn-core/dist/interface/generated/liana/schemas/location/data"

export type Error = {
    'range': d_location.Range,
    'type':
    | ['missing content', {
        'type':
        | ['containment', null]
        | ['property', null]
        | ['reference', null]
        'id': string
    }]
    | ['unexpected content', {
        'containments': _pi.Dictionary<null>
        'properties': _pi.Dictionary<null>
        'references': _pi.Dictionary<null>
    }]
    | ['too many feature elements', null]
    | ['missing feature element', null]
    | ['unknown option', {
        'option name': string
        'state name': string
    }]
    | ['expected single element', string]
}

//     | ['expected exactly one element for link type of feature', string]
//     | ['unknown feature classifier type', string]
//     | ['expected exactly one element for property type of feature', string]
//     | ['unknown entity classifier type', string]
//     | ['unknown classifier type', string]


export type Optional_Error = _pi.Optional_Value<Error>