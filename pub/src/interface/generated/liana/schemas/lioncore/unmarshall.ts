
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace M3_ {
    
    export type I = i_in.Value
    
    export type O = i_out.M3
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type M3_ = (
    context: M3_.I,
    abort: _pi.Abort<M3_.E>,
) => M3_.O

export { 
    M3_ as M3, 
}
