
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

import * as i_out from "./data"

export namespace Serialization_Chunk_ {
    
    export type I = i_in.List_of_Characters
    
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

export namespace Node_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Node_ = (
    context: Node_.I,
    abort: _pi.Abort<Node_.E>,
    parameters: {
        readonly 'document resource identifier': Node_.P.document_resource_identifier
        readonly 'tab size': Node_.P.tab_size
    },
) => Node_.O

export namespace Targets_ {
    
    export type I = i_in.List_of_Characters
    
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

export { 
    Serialization_Chunk_ as Serialization_Chunk, 
    Node_ as Node, 
    Targets_ as Targets, 
}
