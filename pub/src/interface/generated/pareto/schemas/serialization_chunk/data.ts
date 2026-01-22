
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../core/location"

export namespace Meta_Pointer_ {
    
    export type language = string
    
    export type key = string
    
    export type version = string
    
}

export type Meta_Pointer_ = {
    readonly 'language': Meta_Pointer_.language
    readonly 'key': Meta_Pointer_.key
    readonly 'version': Meta_Pointer_.version
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
    
    export namespace nodes {
        
        export namespace L {
            
            export type id = string
            
            export namespace parent {
                
                export type O = string
                
            }
            
            export type parent = _pi.Optional_Value<parent.O>
            
            export type classifier = Meta_Pointer_
            
            export namespace properties {
                
                export namespace L {
                    
                    export type property = Meta_Pointer_
                    
                    export type value = string
                    
                }
                
                export type L = {
                    readonly 'property': L.property
                    readonly 'value': L.value
                }
                
            }
            
            export type properties = _pi.List<properties.L>
            
            export namespace references {
                
                export namespace L {
                    
                    export type reference = Meta_Pointer_
                    
                    export type targets = Targets_
                    
                }
                
                export type L = {
                    readonly 'reference': L.reference
                    readonly 'targets': L.targets
                }
                
            }
            
            export type references = _pi.List<references.L>
            
            export namespace containments {
                
                export namespace L {
                    
                    export type containment = Meta_Pointer_
                    
                    export namespace children {
                        
                        export type L = string
                        
                    }
                    
                    export type children = _pi.List<children.L>
                    
                }
                
                export type L = {
                    readonly 'containment': L.containment
                    readonly 'children': L.children
                }
                
            }
            
            export type containments = _pi.List<containments.L>
            
            export namespace annotations {
                
                export type L = string
                
            }
            
            export type annotations = _pi.List<annotations.L>
            
        }
        
        export type L = {
            readonly 'id': L.id
            readonly 'parent': L.parent
            readonly 'classifier': L.classifier
            readonly 'properties': L.properties
            readonly 'references': L.references
            readonly 'containments': L.containments
            readonly 'annotations': L.annotations
        }
        
    }
    
    export type nodes = _pi.List<nodes.L>
    
}

export type Serialization_Chunk_ = {
    readonly 'serializationFormatVersion': Serialization_Chunk_.serializationFormatVersion
    readonly 'languages': Serialization_Chunk_.languages
    readonly 'nodes': Serialization_Chunk_.nodes
}

export { 
    Meta_Pointer_ as Meta_Pointer, 
    Targets_ as Targets, 
    Serialization_Chunk_ as Serialization_Chunk, 
}
