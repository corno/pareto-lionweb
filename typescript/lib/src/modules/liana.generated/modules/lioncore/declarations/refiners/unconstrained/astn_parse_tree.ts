
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/modules/value_unmarshalling/schemas/unmarshalling"

import * as i_out from "../../../schemas/unconstrained.js"

import * as i_in from "../../../schemas/parse_tree.js"

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
