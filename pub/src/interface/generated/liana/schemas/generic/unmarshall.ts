
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "astn-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

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

export namespace Singular_Reference_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Singular_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Singular_Reference_ = (
    context: Singular_Reference_.I,
    abort: _pi.Abort<Singular_Reference_.E>,
) => Singular_Reference_.O

export namespace References_ {
    
    export type I = i_in.Value
    
    export type O = i_out.References
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type References_ = (
    context: References_.I,
    abort: _pi.Abort<References_.E>,
) => References_.O

export namespace Optional_Reference_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Optional_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Optional_Reference_ = (
    context: Optional_Reference_.I,
    abort: _pi.Abort<Optional_Reference_.E>,
) => Optional_Reference_.O

export { 
    ID_ as ID, 
    Raw_Reference_ as Raw_Reference, 
    Singular_Reference_ as Singular_Reference, 
    References_ as References, 
    Optional_Reference_ as Optional_Reference, 
}
