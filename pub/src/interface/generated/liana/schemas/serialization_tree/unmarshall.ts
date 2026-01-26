
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/unmarshall"

import * as i_out from "./data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

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

export namespace Node_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Node_ = (
    context: Node_.I,
    abort: _pi.Abort<Node_.E>,
) => Node_.O

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

export { 
    Targets_ as Targets, 
    Node_ as Node, 
    Serialization_Chunk_ as Serialization_Chunk, 
}
