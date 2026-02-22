
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "astn-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "./data"

export namespace ID_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.ID
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type ID_ = (
    context: ID_.I,
    abort: _pi.Abort<ID_.E>,
    parameters: {
        readonly 'document resource identifier': ID_.P.document_resource_identifier
        readonly 'tab size': ID_.P.tab_size
    },
) => ID_.O

export namespace Raw_Reference_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Raw_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Raw_Reference_ = (
    context: Raw_Reference_.I,
    abort: _pi.Abort<Raw_Reference_.E>,
    parameters: {
        readonly 'document resource identifier': Raw_Reference_.P.document_resource_identifier
        readonly 'tab size': Raw_Reference_.P.tab_size
    },
) => Raw_Reference_.O

export namespace Singular_Reference_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Singular_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Singular_Reference_ = (
    context: Singular_Reference_.I,
    abort: _pi.Abort<Singular_Reference_.E>,
    parameters: {
        readonly 'document resource identifier': Singular_Reference_.P.document_resource_identifier
        readonly 'tab size': Singular_Reference_.P.tab_size
    },
) => Singular_Reference_.O

export namespace References_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.References
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type References_ = (
    context: References_.I,
    abort: _pi.Abort<References_.E>,
    parameters: {
        readonly 'document resource identifier': References_.P.document_resource_identifier
        readonly 'tab size': References_.P.tab_size
    },
) => References_.O

export namespace Optional_Reference_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Optional_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Optional_Reference_ = (
    context: Optional_Reference_.I,
    abort: _pi.Abort<Optional_Reference_.E>,
    parameters: {
        readonly 'document resource identifier': Optional_Reference_.P.document_resource_identifier
        readonly 'tab size': Optional_Reference_.P.tab_size
    },
) => Optional_Reference_.O

export { 
    ID_ as ID, 
    Raw_Reference_ as Raw_Reference, 
    Singular_Reference_ as Singular_Reference, 
    References_ as References, 
    Optional_Reference_ as Optional_Reference, 
}
