
import * as _pi from "pareto-core/dist/interface"

export namespace Serialization_Chunk_ {
    
    export type serializationFormatVersion = string
    
    export namespace languages {
        
        export namespace L {
            
            export type key = string
            
            export type version = string
            
        }
        
        export type L = {
            readonly 'key': L.key
            readonly 'version': L.version
        }
        
    }
    
    export type languages = _pi.List<languages.L>
    
    export type root_node_id = string
    
    export type node_tree = Node_
    
}

export type Serialization_Chunk_ = {
    readonly 'serializationFormatVersion': Serialization_Chunk_.serializationFormatVersion
    readonly 'languages': Serialization_Chunk_.languages
    readonly 'root node id': Serialization_Chunk_.root_node_id
    readonly 'node tree': Serialization_Chunk_.node_tree
}

export namespace Node_ {
    
    export type classifier = string
    
    export namespace properties {
        
        export type D = string
        
    }
    
    export type properties = _pi.Dictionary<properties.D>
    
    export namespace containments {
        
        export namespace D {
            
            export type D = Node_
            
        }
        
        export type D = _pi.Dictionary<D.D>
        
    }
    
    export type containments = _pi.Dictionary<containments.D>
    
    export namespace references {
        
        export type D = Targets_
        
    }
    
    export type references = _pi.Dictionary<references.D>
    
    export namespace annotations {
        
        export type L = string
        
    }
    
    export type annotations = _pi.List<annotations.L>
    
}

export type Node_ = {
    readonly 'classifier': Node_.classifier
    readonly 'properties': Node_.properties
    readonly 'containments': Node_.containments
    readonly 'references': Node_.references
    readonly 'annotations': Node_.annotations
}

export namespace Targets_ {
    
    export namespace L {
        
        export type resolveInfo = string
        
        export namespace reference {
            
            export type O = string
            
        }
        
        export type reference = _pi.Optional_Value<reference.O>
        
    }
    
    export type L = {
        readonly 'resolveInfo': L.resolveInfo
        readonly 'reference': L.reference
    }
    
}

export type Targets_ = _pi.List<Targets_.L>

export { 
    Serialization_Chunk_ as Serialization_Chunk, 
    Node_ as Node, 
    Targets_ as Targets, 
}
