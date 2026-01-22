
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../generic/location"

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
            
            export namespace type_ {
                
                export namespace classifier {
                    
                    export namespace type_ {
                        
                        export namespace concept {
                            
                            export type abstract = string
                            
                            export type partition = string
                            
                            export namespace extends_ {
                                
                                export type O = Raw_Reference_
                                
                            }
                            
                            export type extends_ = _pi.Optional_Value<extends_.O>
                            
                            export namespace implements_ {
                                
                                export type L = Raw_Reference_
                                
                            }
                            
                            export type implements_ = _pi.List<implements_.L>
                            
                        }
                        
                        export type concept = {
                            readonly 'abstract': concept.abstract
                            readonly 'partition': concept.partition
                            readonly 'extends': concept.extends_
                            readonly 'implements': concept.implements_
                        }
                        
                        export namespace interface_ {
                            
                            export namespace extends_ {
                                
                                export type L = Raw_Reference_
                                
                            }
                            
                            export type extends_ = _pi.List<extends_.L>
                            
                        }
                        
                        export type interface_ = {
                            readonly 'extends': interface_.extends_
                        }
                        
                    }
                    
                    export type type_ = 
                        | readonly ['concept', type_.concept]
                        | readonly ['interface', type_.interface_]
                    
                    export namespace features {
                        
                        export namespace D {
                            
                            export type id = ID_
                            
                            export type optional = string
                            
                            export namespace type_ {
                                
                                export namespace property {
                                    
                                    export type type_ = Raw_Reference_
                                    
                                }
                                
                                export type property = {
                                    readonly 'type': property.type_
                                }
                                
                                export namespace link {
                                    
                                    export type multiple = string
                                    
                                    export type type_ = Raw_Reference_
                                    
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
                                    readonly 'type': link.type_
                                    readonly 'link type': link.link_type
                                }
                                
                            }
                            
                            export type type_ = 
                                | readonly ['property', type_.property]
                                | readonly ['link', type_.link]
                            
                        }
                        
                        export type D = {
                            readonly 'id': D.id
                            readonly 'optional': D.optional
                            readonly 'type': D.type_
                        }
                        
                    }
                    
                    export type features = _pi.Dictionary<features.D>
                    
                }
                
                export type classifier = {
                    readonly 'type': classifier.type_
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
            
            export type type_ = 
                | readonly ['classifier', type_.classifier]
                | readonly ['datatype', type_.datatype]
            
        }
        
        export type D = {
            readonly 'id': D.id
            readonly 'type': D.type_
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
