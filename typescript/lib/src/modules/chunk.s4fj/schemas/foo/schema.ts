import * as p_ from 'pareto-core/schema'

// types

namespace Root_ {
    
    export type serializationFormatVersion = string
    
    export namespace languages {
        
        export namespace D {
            
            export type version = string
        }
        
        export type D = {
            readonly 'version': D.version
        }
    }
    
    export type languages = p_.Dictionary<
        languages.D
    >
    
    export namespace nodes {
        
        export namespace D {
            
            export type classifier = Meta_Pointer_
            
            export namespace parent {
                
                export type O = string
            }
            
            export type parent = p_.Optional_Value<
                parent.O
            >
            
            export namespace properties {
                
                export namespace L {
                    
                    export type property = Meta_Pointer_
                    
                    export namespace value {
                        
                        export type O = string
                    }
                    
                    export type value = p_.Optional_Value<
                        value.O
                    >
                }
                
                export type L = {
                    readonly 'property': L.property
                    readonly 'value': L.value
                }
            }
            
            export type properties = p_.List<
                properties.L
            >
            
            export namespace containments {
                
                export namespace L {
                    
                    export type containment = Meta_Pointer_
                    
                    export namespace children {
                        
                        export type D = null
                    }
                    
                    export type children = p_.Dictionary<
                        children.D
                    >
                }
                
                export type L = {
                    readonly 'containment': L.containment
                    readonly 'children': L.children
                }
            }
            
            export type containments = p_.List<
                containments.L
            >
            
            export namespace references {
                
                export namespace L {
                    
                    export type reference = Meta_Pointer_
                    
                    export namespace targets {
                        
                        export namespace L {
                            
                            export namespace resolveInfo {
                                
                                export type O = string
                            }
                            
                            export type resolveInfo = p_.Optional_Value<
                                resolveInfo.O
                            >
                            
                            export namespace reference {
                                
                                export type O = string
                            }
                            
                            export type reference = p_.Optional_Value<
                                reference.O
                            >
                        }
                        
                        export type L = {
                            readonly 'resolveInfo': L.resolveInfo
                            readonly 'reference': L.reference
                        }
                    }
                    
                    export type targets = p_.List<
                        targets.L
                    >
                }
                
                export type L = {
                    readonly 'reference': L.reference
                    readonly 'targets': L.targets
                }
            }
            
            export type references = p_.List<
                references.L
            >
            
            export namespace annotations {
                
                export type L = string
            }
            
            export type annotations = p_.List<
                annotations.L
            >
        }
        
        export type D = {
            readonly 'classifier': D.classifier
            readonly 'parent': D.parent
            readonly 'properties': D.properties
            readonly 'containments': D.containments
            readonly 'references': D.references
            readonly 'annotations': D.annotations
        }
    }
    
    export type nodes = p_.Dictionary<
        nodes.D
    >
}

type Root_ = {
    readonly 'serializationFormatVersion': Root_.serializationFormatVersion
    readonly 'languages': Root_.languages
    readonly 'nodes': Root_.nodes
}

namespace Meta_Pointer_ {
    
    export type language = string
    
    export type version = string
    
    export type key = string
}

type Meta_Pointer_ = {
    readonly 'language': Meta_Pointer_.language
    readonly 'version': Meta_Pointer_.version
    readonly 'key': Meta_Pointer_.key
}

// exported root types
export { 
    type Root_ as Root, 
    type Meta_Pointer_ as Meta_Pointer, 
}
