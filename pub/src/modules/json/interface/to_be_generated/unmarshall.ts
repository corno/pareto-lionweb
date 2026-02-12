import * as _pi from 'pareto-core/dist/interface'
import * as d_astn_unmarshall from "astn-core/dist/interface/to_be_generated/unmarshall"


export type Error =
    | ['astn', d_astn_unmarshall.Error]
    | ['json', JSON_Unmarshall_Error]


    export type JSON_Unmarshall_Error =
    | ['unexpected properties', _pi.Dictionary<null>]
    | ['missing property', string]
    | ['not a string', null]
    | ['not a boolean', null]
    | ['not a null', null]  
    | ['not a number', null]