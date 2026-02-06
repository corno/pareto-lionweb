    
    import * as _pi from 'pareto-core/dist/interface'
    
    import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"
    
    import * as i_out from "./data"
    
    import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
    
    export namespace Serialization_Chunk_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Serialization_Chunk
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Serialization_Chunk_ = (
        context: Serialization_Chunk_.I,
        abort: _pi.Abort<Serialization_Chunk_.E>,
    ) => Serialization_Chunk_.O
    
    export namespace Targets_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Targets
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Targets_ = (
        context: Targets_.I,
        abort: _pi.Abort<Targets_.E>,
    ) => Targets_.O
    
    export namespace Meta_Pointer_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Meta_Pointer
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Meta_Pointer_ = (
        context: Meta_Pointer_.I,
        abort: _pi.Abort<Meta_Pointer_.E>,
    ) => Meta_Pointer_.O
    
    export { 
        Serialization_Chunk_ as Serialization_Chunk, 
        Targets_ as Targets, 
        Meta_Pointer_ as Meta_Pointer, 
    }
