    
    import * as _pi from "pareto-core/dist/interface"
    
    import * as i_generic from "astn-core/dist/interface/to_be_generated/deserialize"
    
    import * as i_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"
    
    import * as i_out from "./data"
    
    export namespace M3_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.M3
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type M3_ = (
        context: M3_.I,
        abort: _pi.Abort<M3_.E>,
        parameters: {
            readonly 'document resource identifier': M3_.P.document_resource_identifier
            readonly 'tab size': M3_.P.tab_size
        },
    ) => M3_.O
    
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
    
    export { 
        M3_ as M3, 
        ID_ as ID, 
        Raw_Reference_ as Raw_Reference, 
    }
