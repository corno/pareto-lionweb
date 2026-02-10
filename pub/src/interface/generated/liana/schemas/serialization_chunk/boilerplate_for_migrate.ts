
import * as _pi from 'pareto-core/dist/interface'

import * as i_out from "./data"

import * as i_in from "./data"

export namespace Serialization_Chunks_ {
    
    export type I = i_in.Serialization_Chunks
    
    export type O = i_out.Serialization_Chunks
    
    export namespace P {
        
    }
    
}

export type Serialization_Chunks_ = (
    context: Serialization_Chunks_.I,
) => Serialization_Chunks_.O

export namespace Serialization_Chunk_ {
    
    export type I = i_in.Serialization_Chunk
    
    export type O = i_out.Serialization_Chunk
    
    export namespace P {
        
    }
    
}

export type Serialization_Chunk_ = (
    context: Serialization_Chunk_.I,
) => Serialization_Chunk_.O

export namespace Targets_ {
    
    export type I = i_in.Targets
    
    export type O = i_out.Targets
    
    export namespace P {
        
    }
    
}

export type Targets_ = (
    context: Targets_.I,
) => Targets_.O

export namespace Meta_Pointer_ {
    
    export type I = i_in.Meta_Pointer
    
    export type O = i_out.Meta_Pointer
    
    export namespace P {
        
    }
    
}

export type Meta_Pointer_ = (
    context: Meta_Pointer_.I,
) => Meta_Pointer_.O

export { 
    Serialization_Chunks_ as Serialization_Chunks, 
    Serialization_Chunk_ as Serialization_Chunk, 
    Targets_ as Targets, 
    Meta_Pointer_ as Meta_Pointer, 
}
