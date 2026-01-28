
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace ID_ {
    
    export type I = string
    
    export type O = i_out.ID
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type ID_ = (
    context: ID_.I,
    abort: _pi.Abort<ID_.E>,
    parameters: {
        readonly 'document resource identifier': ID_.P.document_resource_identifier
        readonly 'indentation': ID_.P.indentation
    },
) => ID_.O

export namespace Raw_Reference_ {
    
    export type I = string
    
    export type O = i_out.Raw_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Raw_Reference_ = (
    context: Raw_Reference_.I,
    abort: _pi.Abort<Raw_Reference_.E>,
    parameters: {
        readonly 'document resource identifier': Raw_Reference_.P.document_resource_identifier
        readonly 'indentation': Raw_Reference_.P.indentation
    },
) => Raw_Reference_.O

export namespace M3_ {
    
    export type I = string
    
    export type O = i_out.M3
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type M3_ = (
    context: M3_.I,
    abort: _pi.Abort<M3_.E>,
    parameters: {
        readonly 'document resource identifier': M3_.P.document_resource_identifier
        readonly 'indentation': M3_.P.indentation
    },
) => M3_.O

export { 
    ID_ as ID, 
    Raw_Reference_ as Raw_Reference, 
    M3_ as M3, 
}
