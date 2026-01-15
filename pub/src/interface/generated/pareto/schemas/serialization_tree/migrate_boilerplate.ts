
import * as _pi from "pareto-core-interface"

import * as i_out from "./data"

import * as i_in from "./data"

export namespace Targets_ {
    
    export type I = i_in.Targets
    
    export type O = i_out.Targets
    
    export namespace P {
        
    }
    
}

export type Targets_ = (
    $$_: Targets_.I,
) => Targets_.O

export namespace Node_ {
    
    export type I = i_in.Node
    
    export type O = i_out.Node
    
    export namespace P {
        
    }
    
}

export type Node_ = (
    $$_: Node_.I,
) => Node_.O

export namespace Serialization_Chunk_ {
    
    export type I = i_in.Serialization_Chunk
    
    export type O = i_out.Serialization_Chunk
    
    export namespace P {
        
    }
    
}

export type Serialization_Chunk_ = (
    $$_: Serialization_Chunk_.I,
) => Serialization_Chunk_.O

export { 
    Targets_ as Targets, 
    Node_ as Node, 
    Serialization_Chunk_ as Serialization_Chunk, 
}
