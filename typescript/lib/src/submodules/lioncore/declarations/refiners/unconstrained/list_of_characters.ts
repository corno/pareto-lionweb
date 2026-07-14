
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "../../../interface/schemas/deserialize.js"

import * as i_in from "../../../interface/schemas/list_of_characters.js"

import * as i_out from "../../../interface/schemas/unconstrained.js"

export namespace M3_ {
    
    export type I = i_in.List_Of_Characters
    
    export type O = i_out.M3
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type M3_ = (
    context: M3_.I,
    abort: p_i.Abort<M3_.E>,
    parameters: {
        readonly 'tab size': M3_.P.tab_size
    },
) => M3_.O

export type { 
    M3_ as M3, 
}
