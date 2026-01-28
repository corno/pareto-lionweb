
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace Targets_ {
    
    export type I = string
    
    export type O = i_out.Targets
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Targets_ = (
    context: Targets_.I,
    abort: _pi.Abort<Targets_.E>,
    parameters: {
        readonly 'document resource identifier': Targets_.P.document_resource_identifier
        readonly 'indentation': Targets_.P.indentation
    },
) => Targets_.O

export namespace Node_ {
    
    export type I = string
    
    export type O = i_out.Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Node_ = (
    context: Node_.I,
    abort: _pi.Abort<Node_.E>,
    parameters: {
        readonly 'document resource identifier': Node_.P.document_resource_identifier
        readonly 'indentation': Node_.P.indentation
    },
) => Node_.O

export namespace Serialization_Chunk_ {
    
    export type I = string
    
    export type O = i_out.Serialization_Chunk
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Serialization_Chunk_ = (
    context: Serialization_Chunk_.I,
    abort: _pi.Abort<Serialization_Chunk_.E>,
    parameters: {
        readonly 'document resource identifier': Serialization_Chunk_.P.document_resource_identifier
        readonly 'indentation': Serialization_Chunk_.P.indentation
    },
) => Serialization_Chunk_.O

export { 
    Targets_ as Targets, 
    Node_ as Node, 
    Serialization_Chunk_ as Serialization_Chunk, 
}
