import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_ID = _pt.Optional_Value<{
    readonly 'id': string
    readonly 'key': string
}>

export type _T_M3 = {
    readonly 'dependencies': _i_core._T_List<null, _T_Raw_Reference>
    readonly 'entities': _i_core._T_Dictionary<null, {
        readonly 'id': _T_ID
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['classifier', {
                readonly 'features': _i_core._T_Dictionary<null, {
                    readonly 'id': _T_ID
                    readonly 'optional': string
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['link', {
                            readonly 'link type': _i_core._T_State_Group<null, 
                                | readonly ['containment', null]
                                | readonly ['reference', null]
                            >
                            readonly 'multiple': string
                            readonly 'type': _T_Raw_Reference
                        }]
                        | readonly ['property', {
                            readonly 'type': _T_Raw_Reference
                        }]
                    >
                }>
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['concept', {
                        readonly 'abstract': string
                        readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                        readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                        readonly 'partition': string
                    }]
                    | readonly ['interface', {
                        readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                    }]
                >
            }]
            | readonly ['datatype', _i_core._T_State_Group<null, 
                | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
            >]
        >
    }>
    readonly 'id': _T_ID
    readonly 'version': string
}

export type _T_Raw_Reference = {
    readonly 'reference': _pt.Optional_Value<string>
    readonly 'resolveInfo': string
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type ID = _T_ID

export type M3 = _T_M3

export type Raw_Reference = _T_Raw_Reference

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_ID {
    
    export namespace O {
        export type id = string
        export type key = string
    }
    export type O = {
        readonly 'id': string
        readonly 'key': string
    }
}

export namespace _T_M3 {
    
    export namespace dependencies {
        
        export namespace L {
        }
        export type L = _T_Raw_Reference
    }
    export type dependencies = _i_core._T_List<null, _T_Raw_Reference>
    
    export namespace entities {
        
        export namespace D {
            
            export namespace id {
            }
            export type id = _T_ID
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace classifier {
                        
                        export namespace features {
                            
                            export namespace D {
                                
                                export namespace id {
                                }
                                export type id = _T_ID
                                export type optional = string
                                
                                export namespace _type {
                                    
                                    export namespace SG {
                                        
                                        export namespace link {
                                            
                                            export namespace link_type {
                                                
                                                export namespace SG {
                                                    export type containment = null
                                                    export type reference = null
                                                }
                                                export type SG = 
                                                    | readonly ['containment', null]
                                                    | readonly ['reference', null]
                                            }
                                            export type link_type = _i_core._T_State_Group<null, 
                                                | readonly ['containment', null]
                                                | readonly ['reference', null]
                                            >
                                            export type multiple = string
                                            
                                            export namespace _type {
                                            }
                                            export type _type = _T_Raw_Reference
                                        }
                                        export type link = {
                                            readonly 'link type': _i_core._T_State_Group<null, 
                                                | readonly ['containment', null]
                                                | readonly ['reference', null]
                                            >
                                            readonly 'multiple': string
                                            readonly 'type': _T_Raw_Reference
                                        }
                                        
                                        export namespace property {
                                            
                                            export namespace _type {
                                            }
                                            export type _type = _T_Raw_Reference
                                        }
                                        export type property = {
                                            readonly 'type': _T_Raw_Reference
                                        }
                                    }
                                    export type SG = 
                                        | readonly ['link', {
                                            readonly 'link type': _i_core._T_State_Group<null, 
                                                | readonly ['containment', null]
                                                | readonly ['reference', null]
                                            >
                                            readonly 'multiple': string
                                            readonly 'type': _T_Raw_Reference
                                        }]
                                        | readonly ['property', {
                                            readonly 'type': _T_Raw_Reference
                                        }]
                                }
                                export type _type = _i_core._T_State_Group<null, 
                                    | readonly ['link', {
                                        readonly 'link type': _i_core._T_State_Group<null, 
                                            | readonly ['containment', null]
                                            | readonly ['reference', null]
                                        >
                                        readonly 'multiple': string
                                        readonly 'type': _T_Raw_Reference
                                    }]
                                    | readonly ['property', {
                                        readonly 'type': _T_Raw_Reference
                                    }]
                                >
                            }
                            export type D = {
                                readonly 'id': _T_ID
                                readonly 'optional': string
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['link', {
                                        readonly 'link type': _i_core._T_State_Group<null, 
                                            | readonly ['containment', null]
                                            | readonly ['reference', null]
                                        >
                                        readonly 'multiple': string
                                        readonly 'type': _T_Raw_Reference
                                    }]
                                    | readonly ['property', {
                                        readonly 'type': _T_Raw_Reference
                                    }]
                                >
                            }
                        }
                        export type features = _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['link', {
                                    readonly 'link type': _i_core._T_State_Group<null, 
                                        | readonly ['containment', null]
                                        | readonly ['reference', null]
                                    >
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_Reference
                                }]
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_Reference
                                }]
                            >
                        }>
                        
                        export namespace _type {
                            
                            export namespace SG {
                                
                                export namespace concept {
                                    export type abstract = string
                                    
                                    export namespace _extends {
                                        
                                        export namespace O {
                                        }
                                        export type O = _T_Raw_Reference
                                    }
                                    export type _extends = _pt.Optional_Value<_T_Raw_Reference>
                                    
                                    export namespace _implements {
                                        
                                        export namespace L {
                                        }
                                        export type L = _T_Raw_Reference
                                    }
                                    export type _implements = _i_core._T_List<null, _T_Raw_Reference>
                                    export type partition = string
                                }
                                export type concept = {
                                    readonly 'abstract': string
                                    readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                                    readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                                    readonly 'partition': string
                                }
                                
                                export namespace _interface {
                                    
                                    export namespace _extends {
                                        
                                        export namespace L {
                                        }
                                        export type L = _T_Raw_Reference
                                    }
                                    export type _extends = _i_core._T_List<null, _T_Raw_Reference>
                                }
                                export type _interface = {
                                    readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                                }
                            }
                            export type SG = 
                                | readonly ['concept', {
                                    readonly 'abstract': string
                                    readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                                    readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                                    readonly 'partition': string
                                }]
                                | readonly ['interface', {
                                    readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                                }]
                        }
                        export type _type = _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                                readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                                readonly 'partition': string
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                        >
                    }
                    export type classifier = {
                        readonly 'features': _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['link', {
                                    readonly 'link type': _i_core._T_State_Group<null, 
                                        | readonly ['containment', null]
                                        | readonly ['reference', null]
                                    >
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_Reference
                                }]
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_Reference
                                }]
                            >
                        }>
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                                readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                                readonly 'partition': string
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                        >
                    }
                    
                    export namespace datatype {
                        
                        export namespace SG {
                            
                            export namespace enumeration {
                                
                                export namespace D {
                                }
                                export type D = _T_ID
                            }
                            export type enumeration = _i_core._T_Dictionary<null, _T_ID>
                        }
                        export type SG = 
                            | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
                    }
                    export type datatype = _i_core._T_State_Group<null, 
                        | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
                    >
                }
                export type SG = 
                    | readonly ['classifier', {
                        readonly 'features': _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['link', {
                                    readonly 'link type': _i_core._T_State_Group<null, 
                                        | readonly ['containment', null]
                                        | readonly ['reference', null]
                                    >
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_Reference
                                }]
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_Reference
                                }]
                            >
                        }>
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                                readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                                readonly 'partition': string
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                        >
                    }]
                    | readonly ['datatype', _i_core._T_State_Group<null, 
                        | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
                    >]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['classifier', {
                    readonly 'features': _i_core._T_Dictionary<null, {
                        readonly 'id': _T_ID
                        readonly 'optional': string
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['link', {
                                readonly 'link type': _i_core._T_State_Group<null, 
                                    | readonly ['containment', null]
                                    | readonly ['reference', null]
                                >
                                readonly 'multiple': string
                                readonly 'type': _T_Raw_Reference
                            }]
                            | readonly ['property', {
                                readonly 'type': _T_Raw_Reference
                            }]
                        >
                    }>
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['concept', {
                            readonly 'abstract': string
                            readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                            readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                            readonly 'partition': string
                        }]
                        | readonly ['interface', {
                            readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                        }]
                    >
                }]
                | readonly ['datatype', _i_core._T_State_Group<null, 
                    | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
                >]
            >
        }
        export type D = {
            readonly 'id': _T_ID
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['classifier', {
                    readonly 'features': _i_core._T_Dictionary<null, {
                        readonly 'id': _T_ID
                        readonly 'optional': string
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['link', {
                                readonly 'link type': _i_core._T_State_Group<null, 
                                    | readonly ['containment', null]
                                    | readonly ['reference', null]
                                >
                                readonly 'multiple': string
                                readonly 'type': _T_Raw_Reference
                            }]
                            | readonly ['property', {
                                readonly 'type': _T_Raw_Reference
                            }]
                        >
                    }>
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['concept', {
                            readonly 'abstract': string
                            readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                            readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                            readonly 'partition': string
                        }]
                        | readonly ['interface', {
                            readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                        }]
                    >
                }]
                | readonly ['datatype', _i_core._T_State_Group<null, 
                    | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
                >]
            >
        }
    }
    export type entities = _i_core._T_Dictionary<null, {
        readonly 'id': _T_ID
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['classifier', {
                readonly 'features': _i_core._T_Dictionary<null, {
                    readonly 'id': _T_ID
                    readonly 'optional': string
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['link', {
                            readonly 'link type': _i_core._T_State_Group<null, 
                                | readonly ['containment', null]
                                | readonly ['reference', null]
                            >
                            readonly 'multiple': string
                            readonly 'type': _T_Raw_Reference
                        }]
                        | readonly ['property', {
                            readonly 'type': _T_Raw_Reference
                        }]
                    >
                }>
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['concept', {
                        readonly 'abstract': string
                        readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                        readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                        readonly 'partition': string
                    }]
                    | readonly ['interface', {
                        readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                    }]
                >
            }]
            | readonly ['datatype', _i_core._T_State_Group<null, 
                | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
            >]
        >
    }>
    
    export namespace id {
    }
    export type id = _T_ID
    export type version = string
}

export namespace _T_Raw_Reference {
    
    export namespace reference {
        export type O = string
    }
    export type reference = _pt.Optional_Value<string>
    export type resolveInfo = string
}

// *** ALIASES FOR NESTED TYPES

export namespace ID {
    
    export namespace O {
        export type id = string
        export type key = string
    }
    export type O = {
        readonly 'id': string
        readonly 'key': string
    }
}

export namespace M3 {
    
    export namespace dependencies {
        
        export namespace L {
        }
        export type L = _T_Raw_Reference
    }
    export type dependencies = _i_core._T_List<null, _T_Raw_Reference>
    
    export namespace entities {
        
        export namespace D {
            
            export namespace id {
            }
            export type id = _T_ID
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace classifier {
                        
                        export namespace features {
                            
                            export namespace D {
                                
                                export namespace id {
                                }
                                export type id = _T_ID
                                export type optional = string
                                
                                export namespace _type {
                                    
                                    export namespace SG {
                                        
                                        export namespace link {
                                            
                                            export namespace link_type {
                                                
                                                export namespace SG {
                                                    export type containment = null
                                                    export type reference = null
                                                }
                                                export type SG = 
                                                    | readonly ['containment', null]
                                                    | readonly ['reference', null]
                                            }
                                            export type link_type = _i_core._T_State_Group<null, 
                                                | readonly ['containment', null]
                                                | readonly ['reference', null]
                                            >
                                            export type multiple = string
                                            
                                            export namespace _type {
                                            }
                                            export type _type = _T_Raw_Reference
                                        }
                                        export type link = {
                                            readonly 'link type': _i_core._T_State_Group<null, 
                                                | readonly ['containment', null]
                                                | readonly ['reference', null]
                                            >
                                            readonly 'multiple': string
                                            readonly 'type': _T_Raw_Reference
                                        }
                                        
                                        export namespace property {
                                            
                                            export namespace _type {
                                            }
                                            export type _type = _T_Raw_Reference
                                        }
                                        export type property = {
                                            readonly 'type': _T_Raw_Reference
                                        }
                                    }
                                    export type SG = 
                                        | readonly ['link', {
                                            readonly 'link type': _i_core._T_State_Group<null, 
                                                | readonly ['containment', null]
                                                | readonly ['reference', null]
                                            >
                                            readonly 'multiple': string
                                            readonly 'type': _T_Raw_Reference
                                        }]
                                        | readonly ['property', {
                                            readonly 'type': _T_Raw_Reference
                                        }]
                                }
                                export type _type = _i_core._T_State_Group<null, 
                                    | readonly ['link', {
                                        readonly 'link type': _i_core._T_State_Group<null, 
                                            | readonly ['containment', null]
                                            | readonly ['reference', null]
                                        >
                                        readonly 'multiple': string
                                        readonly 'type': _T_Raw_Reference
                                    }]
                                    | readonly ['property', {
                                        readonly 'type': _T_Raw_Reference
                                    }]
                                >
                            }
                            export type D = {
                                readonly 'id': _T_ID
                                readonly 'optional': string
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['link', {
                                        readonly 'link type': _i_core._T_State_Group<null, 
                                            | readonly ['containment', null]
                                            | readonly ['reference', null]
                                        >
                                        readonly 'multiple': string
                                        readonly 'type': _T_Raw_Reference
                                    }]
                                    | readonly ['property', {
                                        readonly 'type': _T_Raw_Reference
                                    }]
                                >
                            }
                        }
                        export type features = _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['link', {
                                    readonly 'link type': _i_core._T_State_Group<null, 
                                        | readonly ['containment', null]
                                        | readonly ['reference', null]
                                    >
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_Reference
                                }]
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_Reference
                                }]
                            >
                        }>
                        
                        export namespace _type {
                            
                            export namespace SG {
                                
                                export namespace concept {
                                    export type abstract = string
                                    
                                    export namespace _extends {
                                        
                                        export namespace O {
                                        }
                                        export type O = _T_Raw_Reference
                                    }
                                    export type _extends = _pt.Optional_Value<_T_Raw_Reference>
                                    
                                    export namespace _implements {
                                        
                                        export namespace L {
                                        }
                                        export type L = _T_Raw_Reference
                                    }
                                    export type _implements = _i_core._T_List<null, _T_Raw_Reference>
                                    export type partition = string
                                }
                                export type concept = {
                                    readonly 'abstract': string
                                    readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                                    readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                                    readonly 'partition': string
                                }
                                
                                export namespace _interface {
                                    
                                    export namespace _extends {
                                        
                                        export namespace L {
                                        }
                                        export type L = _T_Raw_Reference
                                    }
                                    export type _extends = _i_core._T_List<null, _T_Raw_Reference>
                                }
                                export type _interface = {
                                    readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                                }
                            }
                            export type SG = 
                                | readonly ['concept', {
                                    readonly 'abstract': string
                                    readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                                    readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                                    readonly 'partition': string
                                }]
                                | readonly ['interface', {
                                    readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                                }]
                        }
                        export type _type = _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                                readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                                readonly 'partition': string
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                        >
                    }
                    export type classifier = {
                        readonly 'features': _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['link', {
                                    readonly 'link type': _i_core._T_State_Group<null, 
                                        | readonly ['containment', null]
                                        | readonly ['reference', null]
                                    >
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_Reference
                                }]
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_Reference
                                }]
                            >
                        }>
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                                readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                                readonly 'partition': string
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                        >
                    }
                    
                    export namespace datatype {
                        
                        export namespace SG {
                            
                            export namespace enumeration {
                                
                                export namespace D {
                                }
                                export type D = _T_ID
                            }
                            export type enumeration = _i_core._T_Dictionary<null, _T_ID>
                        }
                        export type SG = 
                            | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
                    }
                    export type datatype = _i_core._T_State_Group<null, 
                        | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
                    >
                }
                export type SG = 
                    | readonly ['classifier', {
                        readonly 'features': _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['link', {
                                    readonly 'link type': _i_core._T_State_Group<null, 
                                        | readonly ['containment', null]
                                        | readonly ['reference', null]
                                    >
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_Reference
                                }]
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_Reference
                                }]
                            >
                        }>
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                                readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                                readonly 'partition': string
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                        >
                    }]
                    | readonly ['datatype', _i_core._T_State_Group<null, 
                        | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
                    >]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['classifier', {
                    readonly 'features': _i_core._T_Dictionary<null, {
                        readonly 'id': _T_ID
                        readonly 'optional': string
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['link', {
                                readonly 'link type': _i_core._T_State_Group<null, 
                                    | readonly ['containment', null]
                                    | readonly ['reference', null]
                                >
                                readonly 'multiple': string
                                readonly 'type': _T_Raw_Reference
                            }]
                            | readonly ['property', {
                                readonly 'type': _T_Raw_Reference
                            }]
                        >
                    }>
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['concept', {
                            readonly 'abstract': string
                            readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                            readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                            readonly 'partition': string
                        }]
                        | readonly ['interface', {
                            readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                        }]
                    >
                }]
                | readonly ['datatype', _i_core._T_State_Group<null, 
                    | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
                >]
            >
        }
        export type D = {
            readonly 'id': _T_ID
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['classifier', {
                    readonly 'features': _i_core._T_Dictionary<null, {
                        readonly 'id': _T_ID
                        readonly 'optional': string
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['link', {
                                readonly 'link type': _i_core._T_State_Group<null, 
                                    | readonly ['containment', null]
                                    | readonly ['reference', null]
                                >
                                readonly 'multiple': string
                                readonly 'type': _T_Raw_Reference
                            }]
                            | readonly ['property', {
                                readonly 'type': _T_Raw_Reference
                            }]
                        >
                    }>
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['concept', {
                            readonly 'abstract': string
                            readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                            readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                            readonly 'partition': string
                        }]
                        | readonly ['interface', {
                            readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                        }]
                    >
                }]
                | readonly ['datatype', _i_core._T_State_Group<null, 
                    | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
                >]
            >
        }
    }
    export type entities = _i_core._T_Dictionary<null, {
        readonly 'id': _T_ID
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['classifier', {
                readonly 'features': _i_core._T_Dictionary<null, {
                    readonly 'id': _T_ID
                    readonly 'optional': string
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['link', {
                            readonly 'link type': _i_core._T_State_Group<null, 
                                | readonly ['containment', null]
                                | readonly ['reference', null]
                            >
                            readonly 'multiple': string
                            readonly 'type': _T_Raw_Reference
                        }]
                        | readonly ['property', {
                            readonly 'type': _T_Raw_Reference
                        }]
                    >
                }>
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['concept', {
                        readonly 'abstract': string
                        readonly 'extends': _pt.Optional_Value<_T_Raw_Reference>
                        readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                        readonly 'partition': string
                    }]
                    | readonly ['interface', {
                        readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                    }]
                >
            }]
            | readonly ['datatype', _i_core._T_State_Group<null, 
                | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
            >]
        >
    }>
    
    export namespace id {
    }
    export type id = _T_ID
    export type version = string
}

export namespace Raw_Reference {
    
    export namespace reference {
        export type O = string
    }
    export type reference = _pt.Optional_Value<string>
    export type resolveInfo = string
}
