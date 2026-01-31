
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/unmarshall"

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

export namespace ID_ {
    
    export type I = i_in.Value
    
    export type O = i_out.ID
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type ID_ = (
    context: ID_.I,
    abort: _pi.Abort<ID_.E>,
) => ID_.O

export namespace Raw_Reference_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Raw_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Raw_Reference_ = (
    context: Raw_Reference_.I,
    abort: _pi.Abort<Raw_Reference_.E>,
) => Raw_Reference_.O

export { 
    M3_ as M3, 
    ID_ as ID, 
    Raw_Reference_ as Raw_Reference, 
}
