
import * as _pi from "pareto-core-interface"

import * as i__location from "../../core/location"

export namespace ID_ {
    
    export namespace O {
        
        export type key = string
        
        export type id = string
        
    }
    
    export type O = {
        readonly 'key': O.key
        readonly 'id': O.id
    }
    
}

export type ID_ = _pi.Optional_Value<ID_.O>

export namespace Raw_Reference_ {
    
    export type resolveInfo = string
    
    export namespace reference {
        
        export type O = string
        
    }
    
    export type reference = _pi.Optional_Value<reference.O>
    
}

export type Raw_Reference_ = {
    readonly 'resolveInfo': Raw_Reference_.resolveInfo
    readonly 'reference': Raw_Reference_.reference
}

export namespace M3_ {
    
    export type id = ID_
    
    export type version = string
    
    export namespace dependencies {
        
        export type L = Raw_Reference_
        
    }
    
    export type dependencies = _pi.List<dependencies.L>
    
    export namespace entities {
        
        export namespace D {
            
            export type id = ID_
            
            export namespace _type {
                
                export namespace classifier {
                    
                    export namespace _type {
                        
                        export namespace concept {
                            
                            export type abstract = string
                            
                            export type partition = string
                            
                            export namespace _extends {
                                
                                export type O = Raw_Reference_
                                
                            }
                            
                            export type _extends = _pi.Optional_Value<_extends.O>
                            
                            export namespace _implements {
                                
                                export type L = Raw_Reference_
                                
                            }
                            
                            export type _implements = _pi.List<_implements.L>
                            
                        }
                        
                        export type concept = {
                            readonly 'abstract': concept.abstract
                            readonly 'partition': concept.partition
                            readonly 'extends': concept._extends
                            readonly 'implements': concept._implements
                        }
                        
                        export namespace _interface {
                            
                            export namespace _extends {
                                
                                export type L = Raw_Reference_
                                
                            }
                            
                            export type _extends = _pi.List<_extends.L>
                            
                        }
                        
                        export type _interface = {
                            readonly 'extends': _interface._extends
                        }
                        
                    }
                    
                    export type _type = 
                        | readonly ['concept', _type.concept]
                        | readonly ['interface', _type._interface]
                    
                    export namespace features {
                        
                        export namespace D {
                            
                            export type id = ID_
                            
                            export type optional = string
                            
                            export namespace _type {
                                
                                export namespace property {
                                    
                                    export type _type = Raw_Reference_
                                    
                                }
                                
                                export type property = {
                                    readonly 'type': property._type
                                }
                                
                                export namespace link {
                                    
                                    export type multiple = string
                                    
                                    export type _type = Raw_Reference_
                                    
                                    export namespace link_type {
                                        
                                        export type containment = null
                                        
                                        export type reference = null
                                        
                                    }
                                    
                                    export type link_type = 
                                        | readonly ['containment', link_type.containment]
                                        | readonly ['reference', link_type.reference]
                                    
                                }
                                
                                export type link = {
                                    readonly 'multiple': link.multiple
                                    readonly 'type': link._type
                                    readonly 'link type': link.link_type
                                }
                                
                            }
                            
                            export type _type = 
                                | readonly ['property', _type.property]
                                | readonly ['link', _type.link]
                            
                        }
                        
                        export type D = {
                            readonly 'id': D.id
                            readonly 'optional': D.optional
                            readonly 'type': D._type
                        }
                        
                    }
                    
                    export type features = _pi.Dictionary<features.D>
                    
                }
                
                export type classifier = {
                    readonly 'type': classifier._type
                    readonly 'features': classifier.features
                }
                
                export namespace datatype {
                    
                    export namespace enumeration {
                        
                        export type D = ID_
                        
                    }
                    
                    export type enumeration = _pi.Dictionary<enumeration.D>
                    
                }
                
                export type datatype = 
                    | readonly ['enumeration', datatype.enumeration]
                
            }
            
            export type _type = 
                | readonly ['classifier', _type.classifier]
                | readonly ['datatype', _type.datatype]
            
        }
        
        export type D = {
            readonly 'id': D.id
            readonly 'type': D._type
        }
        
    }
    
    export type entities = _pi.Dictionary<entities.D>
    
}

export type M3_ = {
    readonly 'id': M3_.id
    readonly 'version': M3_.version
    readonly 'dependencies': M3_.dependencies
    readonly 'entities': M3_.entities
}

export { 
    ID_ as ID, 
    Raw_Reference_ as Raw_Reference, 
    M3_ as M3, 
}
