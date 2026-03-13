
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "../../data"

export namespace Serialization_Tree_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Serialization_Tree
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Serialization_Tree_ = (
    context: Serialization_Tree_.I,
    abort: _pi.Abort<Serialization_Tree_.E>,
    parameters: {
        readonly 'tab size': Serialization_Tree_.P.tab_size
    },
) => Serialization_Tree_.O

export namespace Node_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Node_ = (
    context: Node_.I,
    abort: _pi.Abort<Node_.E>,
    parameters: {
        readonly 'tab size': Node_.P.tab_size
    },
) => Node_.O

export namespace Targets_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Targets
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Targets_ = (
    context: Targets_.I,
    abort: _pi.Abort<Targets_.E>,
    parameters: {
        readonly 'tab size': Targets_.P.tab_size
    },
) => Targets_.O

export { 
    Serialization_Tree_ as Serialization_Tree, 
    Node_ as Node, 
    Targets_ as Targets, 
}
