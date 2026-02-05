    
    import * as _pi from "pareto-core/dist/interface"
    
    import * as i_generic from "astn-core/dist/interface/to_be_generated/deserialize"
    
    import * as i_out from "./data"
    
    export namespace Serialization_Chunk_ {
        
        export type I = string
        
        export type O = i_out.Serialization_Chunk
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Serialization_Chunk_ = (
        context: Serialization_Chunk_.I,
        abort: _pi.Abort<Serialization_Chunk_.E>,
        parameters: {
            readonly 'document resource identifier': Serialization_Chunk_.P.document_resource_identifier
            readonly 'tab size': Serialization_Chunk_.P.tab_size
        },
    ) => Serialization_Chunk_.O
    
    export namespace Targets_ {
        
        export type I = string
        
        export type O = i_out.Targets
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Targets_ = (
        context: Targets_.I,
        abort: _pi.Abort<Targets_.E>,
        parameters: {
            readonly 'document resource identifier': Targets_.P.document_resource_identifier
            readonly 'tab size': Targets_.P.tab_size
        },
    ) => Targets_.O
    
    export namespace Meta_Pointer_ {
        
        export type I = string
        
        export type O = i_out.Meta_Pointer
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Meta_Pointer_ = (
        context: Meta_Pointer_.I,
        abort: _pi.Abort<Meta_Pointer_.E>,
        parameters: {
            readonly 'document resource identifier': Meta_Pointer_.P.document_resource_identifier
            readonly 'tab size': Meta_Pointer_.P.tab_size
        },
    ) => Meta_Pointer_.O
    
    export { 
        Serialization_Chunk_ as Serialization_Chunk, 
        Targets_ as Targets, 
        Meta_Pointer_ as Meta_Pointer, 
    }
