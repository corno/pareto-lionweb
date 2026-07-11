
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/unmarshall"

import * as i_out from "../../../interface/schemas/unconstrained.js"

import * as i_in from "astn-core/interface/data/parse_tree"

export namespace M3_ {
    
    export type I = i_in.Value
    
    export type O = i_out.M3
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type M3_ = (
    context: M3_.I,
    abort: p_i.Abort<M3_.E>,
) => M3_.O

export type { 
    M3_ as M3, 
}
