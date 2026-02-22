
import * as _pi from 'pareto-core/dist/interface'

import * as i_in from "./data"

import * as i_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export namespace ID_ {
    
    export type I = i_in.ID
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type ID_ = (
    context: ID_.I,
) => ID_.O

export namespace Raw_Reference_ {
    
    export type I = i_in.Raw_Reference
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Raw_Reference_ = (
    context: Raw_Reference_.I,
) => Raw_Reference_.O

export namespace Singular_Reference_ {
    
    export type I = i_in.Singular_Reference
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Singular_Reference_ = (
    context: Singular_Reference_.I,
) => Singular_Reference_.O

export namespace References_ {
    
    export type I = i_in.References
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type References_ = (
    context: References_.I,
) => References_.O

export namespace Optional_Reference_ {
    
    export type I = i_in.Optional_Reference
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Optional_Reference_ = (
    context: Optional_Reference_.I,
) => Optional_Reference_.O

export { 
    ID_ as ID, 
    Raw_Reference_ as Raw_Reference, 
    Singular_Reference_ as Singular_Reference, 
    References_ as References, 
    Optional_Reference_ as Optional_Reference, 
}
