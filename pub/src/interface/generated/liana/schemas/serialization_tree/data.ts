
import * as _pi from 'pareto-core/dist/interface'

import * as i__imports_location from "../location/data"

export namespace Serialization_Tree_ {
    
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

export type Serialization_Tree_ = {
    readonly 'serializationFormatVersion': Serialization_Tree_.serializationFormatVersion
    readonly 'languages': Serialization_Tree_.languages
    readonly 'root node id': Serialization_Tree_.root_node_id
    readonly 'node tree': Serialization_Tree_.node_tree
}

export namespace Node_ {
    
    export type range = i__imports_location.Range
    
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
    readonly 'range': Node_.range
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
    Serialization_Tree_ as Serialization_Tree, 
    Node_ as Node, 
    Targets_ as Targets, 
}
