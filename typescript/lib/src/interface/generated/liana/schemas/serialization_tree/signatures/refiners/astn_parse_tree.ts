
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/unmarshall"

import * as i_out from "../../data.js"

import * as i_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"

export namespace Serialization_Tree_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Serialization_Tree
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Serialization_Tree_ = (
    context: Serialization_Tree_.I,
    abort: p_i.Abort<Serialization_Tree_.E>,
) => Serialization_Tree_.O

export namespace Node_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Node_ = (
    context: Node_.I,
    abort: p_i.Abort<Node_.E>,
) => Node_.O

export namespace Targets_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Targets
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Targets_ = (
    context: Targets_.I,
    abort: p_i.Abort<Targets_.E>,
) => Targets_.O

export type { 
    Serialization_Tree_ as Serialization_Tree, 
    Node_ as Node, 
    Targets_ as Targets, 
}
