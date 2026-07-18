
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_in from "../../../schemas/unconstrained.js"

import * as i_out from "../../../schemas/paragraph.js"

export namespace M3_ {
    
    export type I = i_in.M3
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type M3_ = (
    context: M3_.I,
) => M3_.O

export type { 
    M3_ as M3, 
}
