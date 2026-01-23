
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data"

export namespace ID_ {
    
    export type I = string
    
    export type O = i_out.ID
    
    export namespace P {
        
    }
    
}

export type ID_ = (
    context: ID_.I,
) => ID_.O

export namespace Raw_Reference_ {
    
    export type I = string
    
    export type O = i_out.Raw_Reference
    
    export namespace P {
        
    }
    
}

export type Raw_Reference_ = (
    context: Raw_Reference_.I,
) => Raw_Reference_.O

export namespace M3_ {
    
    export type I = string
    
    export type O = i_out.M3
    
    export namespace P {
        
    }
    
}

export type M3_ = (
    context: M3_.I,
) => M3_.O

export { 
    ID_ as ID, 
    Raw_Reference_ as Raw_Reference, 
    M3_ as M3, 
}
