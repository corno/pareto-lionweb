    
    import * as _pi from "pareto-core/dist/interface"
    
    import * as i_in from "./data"
    
    export namespace Serialization_Chunk_ {
        
        export type I = i_in.Serialization_Chunk
        
        export type O = string
        
        export namespace P {
            
        }
        
    }
    
    export type Serialization_Chunk_ = (
        context: Serialization_Chunk_.I,
    ) => Serialization_Chunk_.O
    
    export namespace Node_ {
        
        export type I = i_in.Node
        
        export type O = string
        
        export namespace P {
            
        }
        
    }
    
    export type Node_ = (
        context: Node_.I,
    ) => Node_.O
    
    export namespace Targets_ {
        
        export type I = i_in.Targets
        
        export type O = string
        
        export namespace P {
            
        }
        
    }
    
    export type Targets_ = (
        context: Targets_.I,
    ) => Targets_.O
    
    export { 
        Serialization_Chunk_ as Serialization_Chunk, 
        Node_ as Node, 
        Targets_ as Targets, 
    }
