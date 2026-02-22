
import * as _pi from 'pareto-core/dist/interface'

import * as i_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as i_in from "./data"

export namespace M3_ {
    
    export type I = i_in.M3
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type M3_ = (
    context: M3_.I,
) => M3_.O

export { 
    M3_ as M3, 
}
