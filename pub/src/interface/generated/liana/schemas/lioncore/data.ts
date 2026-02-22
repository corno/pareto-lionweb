
import * as _pi from 'pareto-core/dist/interface'

import * as i__imports_generic from "../generic/data"

export namespace M3_ {
    
    export type id = i__imports_generic.ID
    
    export namespace properties {
        
        export type version = string
        
    }
    
    export type properties = {
        readonly 'version': properties.version
    }
    
    export namespace references {
        
        export type dependencies = i__imports_generic.References
        
    }
    
    export type references = {
        readonly 'dependencies': references.dependencies
    }
    
    export namespace containments {
        
        export namespace entities {
            
            export namespace D {
                
                export type id = i__imports_generic.ID
                
                export namespace classifier {
                    
                    export namespace Classifier {
                        
                        export namespace classifier {
                            
                            export namespace Concept {
                                
                                export namespace properties {
                                    
                                    export type abstract = string
                                    
                                    export type partition = string
                                    
                                }
                                
                                export type properties = {
                                    readonly 'abstract': properties.abstract
                                    readonly 'partition': properties.partition
                                }
                                
                                export namespace references {
                                    
                                    export type extends_ = i__imports_generic.Optional_Reference
                                    
                                    export type implements_ = i__imports_generic.References
                                    
                                }
                                
                                export type references = {
                                    readonly 'extends': references.extends_
                                    readonly 'implements': references.implements_
                                }
                                
                            }
                            
                            export type Concept = {
                                readonly 'properties': Concept.properties
                                readonly 'references': Concept.references
                            }
                            
                            export namespace Interface {
                                
                                export namespace references {
                                    
                                    export type extends_ = i__imports_generic.References
                                    
                                }
                                
                                export type references = {
                                    readonly 'extends': references.extends_
                                }
                                
                            }
                            
                            export type Interface = {
                                readonly 'references': Interface.references
                            }
                            
                        }
                        
                        export type classifier = 
                            | readonly ['Concept', classifier.Concept]
                            | readonly ['Interface', classifier.Interface]
                        
                        export namespace containments {
                            
                            export namespace features {
                                
                                export namespace D {
                                    
                                    export type id = i__imports_generic.ID
                                    
                                    export namespace classifier {
                                        
                                        export namespace Property {
                                            
                                            export namespace references {
                                                
                                                export type type_ = i__imports_generic.Singular_Reference
                                                
                                            }
                                            
                                            export type references = {
                                                readonly 'type': references.type_
                                            }
                                            
                                        }
                                        
                                        export type Property = {
                                            readonly 'references': Property.references
                                        }
                                        
                                        export namespace Link {
                                            
                                            export namespace classifier {
                                                
                                                export type Containment = null
                                                
                                                export type Reference = null
                                                
                                            }
                                            
                                            export type classifier = 
                                                | readonly ['Containment', classifier.Containment]
                                                | readonly ['Reference', classifier.Reference]
                                            
                                            export namespace properties {
                                                
                                                export type multiple = string
                                                
                                            }
                                            
                                            export type properties = {
                                                readonly 'multiple': properties.multiple
                                            }
                                            
                                            export namespace references {
                                                
                                                export type type_ = i__imports_generic.Singular_Reference
                                                
                                            }
                                            
                                            export type references = {
                                                readonly 'type': references.type_
                                            }
                                            
                                        }
                                        
                                        export type Link = {
                                            readonly 'classifier': Link.classifier
                                            readonly 'properties': Link.properties
                                            readonly 'references': Link.references
                                        }
                                        
                                    }
                                    
                                    export type classifier = 
                                        | readonly ['Property', classifier.Property]
                                        | readonly ['Link', classifier.Link]
                                    
                                    export namespace properties {
                                        
                                        export type optional = string
                                        
                                    }
                                    
                                    export type properties = {
                                        readonly 'optional': properties.optional
                                    }
                                    
                                }
                                
                                export type D = {
                                    readonly 'id': D.id
                                    readonly 'classifier': D.classifier
                                    readonly 'properties': D.properties
                                }
                                
                            }
                            
                            export type features = _pi.Dictionary<features.D>
                            
                        }
                        
                        export type containments = {
                            readonly 'features': containments.features
                        }
                        
                    }
                    
                    export type Classifier = {
                        readonly 'classifier': Classifier.classifier
                        readonly 'containments': Classifier.containments
                    }
                    
                    export namespace Datatype {
                        
                        export namespace Enumeration {
                            
                            export namespace D {
                                
                                export type id = i__imports_generic.ID
                                
                            }
                            
                            export type D = {
                                readonly 'id': D.id
                            }
                            
                        }
                        
                        export type Enumeration = _pi.Dictionary<Enumeration.D>
                        
                    }
                    
                    export type Datatype = 
                        | readonly ['Enumeration', Datatype.Enumeration]
                    
                }
                
                export type classifier = 
                    | readonly ['Classifier', classifier.Classifier]
                    | readonly ['Datatype', classifier.Datatype]
                
            }
            
            export type D = {
                readonly 'id': D.id
                readonly 'classifier': D.classifier
            }
            
        }
        
        export type entities = _pi.Dictionary<entities.D>
        
    }
    
    export type containments = {
        readonly 'entities': containments.entities
    }
    
}

export type M3_ = {
    readonly 'id': M3_.id
    readonly 'properties': M3_.properties
    readonly 'references': M3_.references
    readonly 'containments': M3_.containments
}

export { 
    M3_ as M3, 
}
