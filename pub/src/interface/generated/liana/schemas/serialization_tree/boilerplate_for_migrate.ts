
import * as _pi from 'pareto-core/dist/interface'

import * as i_out from "./data"

import * as i_in from "./data"

export namespace Serialization_Tree_ {
    
    export type I = i_in.Serialization_Tree
    
    export type O = i_out.Serialization_Tree
    
    export namespace P {
        
    }
    
}

export type Serialization_Tree_ = (
    context: Serialization_Tree_.I,
) => Serialization_Tree_.O

export namespace Node_ {
    
    export type I = i_in.Node
    
    export type O = i_out.Node
    
    export namespace P {
        
    }
    
}

export type Node_ = (
    context: Node_.I,
) => Node_.O

export namespace Targets_ {
    
    export type I = i_in.Targets
    
    export type O = i_out.Targets
    
    export namespace P {
        
    }
    
}

export type Targets_ = (
    context: Targets_.I,
) => Targets_.O

export { 
    Serialization_Tree_ as Serialization_Tree, 
    Node_ as Node, 
    Targets_ as Targets, 
}
