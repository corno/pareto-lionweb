import * as _et from 'pareto-core-interface'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_ID = _et.Optional_Value<{
    readonly 'key': string
    readonly 'id': string
}>

export type _T_Raw_Reference = {
    readonly 'resolveInfo': string
    readonly 'reference': _et.Optional_Value<string>
}

export type _T_M3 = {
    readonly 'id': _T_ID
    readonly 'version': string
    readonly 'dependencies': _i_core._T_List<null, _T_Raw_Reference>
    readonly 'entities': _i_core._T_Dictionary<null, {
        readonly 'id': _T_ID
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['classifier', {
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['concept', {
                        readonly 'abstract': string
                        readonly 'partition': string
                        readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                        readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                    }]
                    | readonly ['interface', {
                        readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                    }]
                >
                readonly 'features': _i_core._T_Dictionary<null, {
                    readonly 'id': _T_ID
                    readonly 'optional': string
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['property', {
                            readonly 'type': _T_Raw_Reference
                        }]
                        | readonly ['link', {
                            readonly 'multiple': string
                            readonly 'type': _T_Raw_Reference
                            readonly 'link type': _i_core._T_State_Group<null, 
                                | readonly ['containment', null]
                                | readonly ['reference', null]
                            >
                        }]
                    >
                }>
            }]
            | readonly ['datatype', _i_core._T_State_Group<null, 
                | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
            >]
        >
    }>
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type ID = _T_ID

export type Raw_Reference = _T_Raw_Reference

export type M3 = _T_M3

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_ID {
    
    export namespace O {
        export type key = string
        export type id = string
    }
    export type O = {
        readonly 'key': string
        readonly 'id': string
    }
}

export namespace _T_Raw_Reference {
    export type resolveInfo = string
    
    export namespace reference {
        export type O = string
    }
    export type reference = _et.Optional_Value<string>
}

export namespace _T_M3 {
    
    export namespace id {
    }
    export type id = _T_ID
    export type version = string
    
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
                        
                        export namespace _type {
                            
                            export namespace SG {
                                
                                export namespace concept {
                                    export type abstract = string
                                    export type partition = string
                                    
                                    export namespace _extends {
                                        
                                        export namespace O {
                                        }
                                        export type O = _T_Raw_Reference
                                    }
                                    export type _extends = _et.Optional_Value<_T_Raw_Reference>
                                    
                                    export namespace _implements {
                                        
                                        export namespace L {
                                        }
                                        export type L = _T_Raw_Reference
                                    }
                                    export type _implements = _i_core._T_List<null, _T_Raw_Reference>
                                }
                                export type concept = {
                                    readonly 'abstract': string
                                    readonly 'partition': string
                                    readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                                    readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
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
                                    readonly 'partition': string
                                    readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                                    readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                                }]
                                | readonly ['interface', {
                                    readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                                }]
                        }
                        export type _type = _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'partition': string
                                readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                                readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                        >
                        
                        export namespace features {
                            
                            export namespace D {
                                
                                export namespace id {
                                }
                                export type id = _T_ID
                                export type optional = string
                                
                                export namespace _type {
                                    
                                    export namespace SG {
                                        
                                        export namespace property {
                                            
                                            export namespace _type {
                                            }
                                            export type _type = _T_Raw_Reference
                                        }
                                        export type property = {
                                            readonly 'type': _T_Raw_Reference
                                        }
                                        
                                        export namespace link {
                                            export type multiple = string
                                            
                                            export namespace _type {
                                            }
                                            export type _type = _T_Raw_Reference
                                            
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
                                        }
                                        export type link = {
                                            readonly 'multiple': string
                                            readonly 'type': _T_Raw_Reference
                                            readonly 'link type': _i_core._T_State_Group<null, 
                                                | readonly ['containment', null]
                                                | readonly ['reference', null]
                                            >
                                        }
                                    }
                                    export type SG = 
                                        | readonly ['property', {
                                            readonly 'type': _T_Raw_Reference
                                        }]
                                        | readonly ['link', {
                                            readonly 'multiple': string
                                            readonly 'type': _T_Raw_Reference
                                            readonly 'link type': _i_core._T_State_Group<null, 
                                                | readonly ['containment', null]
                                                | readonly ['reference', null]
                                            >
                                        }]
                                }
                                export type _type = _i_core._T_State_Group<null, 
                                    | readonly ['property', {
                                        readonly 'type': _T_Raw_Reference
                                    }]
                                    | readonly ['link', {
                                        readonly 'multiple': string
                                        readonly 'type': _T_Raw_Reference
                                        readonly 'link type': _i_core._T_State_Group<null, 
                                            | readonly ['containment', null]
                                            | readonly ['reference', null]
                                        >
                                    }]
                                >
                            }
                            export type D = {
                                readonly 'id': _T_ID
                                readonly 'optional': string
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['property', {
                                        readonly 'type': _T_Raw_Reference
                                    }]
                                    | readonly ['link', {
                                        readonly 'multiple': string
                                        readonly 'type': _T_Raw_Reference
                                        readonly 'link type': _i_core._T_State_Group<null, 
                                            | readonly ['containment', null]
                                            | readonly ['reference', null]
                                        >
                                    }]
                                >
                            }
                        }
                        export type features = _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_Reference
                                }]
                                | readonly ['link', {
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_Reference
                                    readonly 'link type': _i_core._T_State_Group<null, 
                                        | readonly ['containment', null]
                                        | readonly ['reference', null]
                                    >
                                }]
                            >
                        }>
                    }
                    export type classifier = {
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'partition': string
                                readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                                readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                        >
                        readonly 'features': _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_Reference
                                }]
                                | readonly ['link', {
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_Reference
                                    readonly 'link type': _i_core._T_State_Group<null, 
                                        | readonly ['containment', null]
                                        | readonly ['reference', null]
                                    >
                                }]
                            >
                        }>
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
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'partition': string
                                readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                                readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                        >
                        readonly 'features': _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_Reference
                                }]
                                | readonly ['link', {
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_Reference
                                    readonly 'link type': _i_core._T_State_Group<null, 
                                        | readonly ['containment', null]
                                        | readonly ['reference', null]
                                    >
                                }]
                            >
                        }>
                    }]
                    | readonly ['datatype', _i_core._T_State_Group<null, 
                        | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
                    >]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['classifier', {
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['concept', {
                            readonly 'abstract': string
                            readonly 'partition': string
                            readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                            readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                        }]
                        | readonly ['interface', {
                            readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                        }]
                    >
                    readonly 'features': _i_core._T_Dictionary<null, {
                        readonly 'id': _T_ID
                        readonly 'optional': string
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['property', {
                                readonly 'type': _T_Raw_Reference
                            }]
                            | readonly ['link', {
                                readonly 'multiple': string
                                readonly 'type': _T_Raw_Reference
                                readonly 'link type': _i_core._T_State_Group<null, 
                                    | readonly ['containment', null]
                                    | readonly ['reference', null]
                                >
                            }]
                        >
                    }>
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
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['concept', {
                            readonly 'abstract': string
                            readonly 'partition': string
                            readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                            readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                        }]
                        | readonly ['interface', {
                            readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                        }]
                    >
                    readonly 'features': _i_core._T_Dictionary<null, {
                        readonly 'id': _T_ID
                        readonly 'optional': string
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['property', {
                                readonly 'type': _T_Raw_Reference
                            }]
                            | readonly ['link', {
                                readonly 'multiple': string
                                readonly 'type': _T_Raw_Reference
                                readonly 'link type': _i_core._T_State_Group<null, 
                                    | readonly ['containment', null]
                                    | readonly ['reference', null]
                                >
                            }]
                        >
                    }>
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
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['concept', {
                        readonly 'abstract': string
                        readonly 'partition': string
                        readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                        readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                    }]
                    | readonly ['interface', {
                        readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                    }]
                >
                readonly 'features': _i_core._T_Dictionary<null, {
                    readonly 'id': _T_ID
                    readonly 'optional': string
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['property', {
                            readonly 'type': _T_Raw_Reference
                        }]
                        | readonly ['link', {
                            readonly 'multiple': string
                            readonly 'type': _T_Raw_Reference
                            readonly 'link type': _i_core._T_State_Group<null, 
                                | readonly ['containment', null]
                                | readonly ['reference', null]
                            >
                        }]
                    >
                }>
            }]
            | readonly ['datatype', _i_core._T_State_Group<null, 
                | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
            >]
        >
    }>
}

// *** ALIASES FOR NESTED TYPES

export namespace ID {
    
    export namespace O {
        export type key = string
        export type id = string
    }
    export type O = {
        readonly 'key': string
        readonly 'id': string
    }
}

export namespace Raw_Reference {
    export type resolveInfo = string
    
    export namespace reference {
        export type O = string
    }
    export type reference = _et.Optional_Value<string>
}

export namespace M3 {
    
    export namespace id {
    }
    export type id = _T_ID
    export type version = string
    
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
                        
                        export namespace _type {
                            
                            export namespace SG {
                                
                                export namespace concept {
                                    export type abstract = string
                                    export type partition = string
                                    
                                    export namespace _extends {
                                        
                                        export namespace O {
                                        }
                                        export type O = _T_Raw_Reference
                                    }
                                    export type _extends = _et.Optional_Value<_T_Raw_Reference>
                                    
                                    export namespace _implements {
                                        
                                        export namespace L {
                                        }
                                        export type L = _T_Raw_Reference
                                    }
                                    export type _implements = _i_core._T_List<null, _T_Raw_Reference>
                                }
                                export type concept = {
                                    readonly 'abstract': string
                                    readonly 'partition': string
                                    readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                                    readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
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
                                    readonly 'partition': string
                                    readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                                    readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                                }]
                                | readonly ['interface', {
                                    readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                                }]
                        }
                        export type _type = _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'partition': string
                                readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                                readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                        >
                        
                        export namespace features {
                            
                            export namespace D {
                                
                                export namespace id {
                                }
                                export type id = _T_ID
                                export type optional = string
                                
                                export namespace _type {
                                    
                                    export namespace SG {
                                        
                                        export namespace property {
                                            
                                            export namespace _type {
                                            }
                                            export type _type = _T_Raw_Reference
                                        }
                                        export type property = {
                                            readonly 'type': _T_Raw_Reference
                                        }
                                        
                                        export namespace link {
                                            export type multiple = string
                                            
                                            export namespace _type {
                                            }
                                            export type _type = _T_Raw_Reference
                                            
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
                                        }
                                        export type link = {
                                            readonly 'multiple': string
                                            readonly 'type': _T_Raw_Reference
                                            readonly 'link type': _i_core._T_State_Group<null, 
                                                | readonly ['containment', null]
                                                | readonly ['reference', null]
                                            >
                                        }
                                    }
                                    export type SG = 
                                        | readonly ['property', {
                                            readonly 'type': _T_Raw_Reference
                                        }]
                                        | readonly ['link', {
                                            readonly 'multiple': string
                                            readonly 'type': _T_Raw_Reference
                                            readonly 'link type': _i_core._T_State_Group<null, 
                                                | readonly ['containment', null]
                                                | readonly ['reference', null]
                                            >
                                        }]
                                }
                                export type _type = _i_core._T_State_Group<null, 
                                    | readonly ['property', {
                                        readonly 'type': _T_Raw_Reference
                                    }]
                                    | readonly ['link', {
                                        readonly 'multiple': string
                                        readonly 'type': _T_Raw_Reference
                                        readonly 'link type': _i_core._T_State_Group<null, 
                                            | readonly ['containment', null]
                                            | readonly ['reference', null]
                                        >
                                    }]
                                >
                            }
                            export type D = {
                                readonly 'id': _T_ID
                                readonly 'optional': string
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['property', {
                                        readonly 'type': _T_Raw_Reference
                                    }]
                                    | readonly ['link', {
                                        readonly 'multiple': string
                                        readonly 'type': _T_Raw_Reference
                                        readonly 'link type': _i_core._T_State_Group<null, 
                                            | readonly ['containment', null]
                                            | readonly ['reference', null]
                                        >
                                    }]
                                >
                            }
                        }
                        export type features = _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_Reference
                                }]
                                | readonly ['link', {
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_Reference
                                    readonly 'link type': _i_core._T_State_Group<null, 
                                        | readonly ['containment', null]
                                        | readonly ['reference', null]
                                    >
                                }]
                            >
                        }>
                    }
                    export type classifier = {
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'partition': string
                                readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                                readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                        >
                        readonly 'features': _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_Reference
                                }]
                                | readonly ['link', {
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_Reference
                                    readonly 'link type': _i_core._T_State_Group<null, 
                                        | readonly ['containment', null]
                                        | readonly ['reference', null]
                                    >
                                }]
                            >
                        }>
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
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'partition': string
                                readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                                readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                            }]
                        >
                        readonly 'features': _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_Reference
                                }]
                                | readonly ['link', {
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_Reference
                                    readonly 'link type': _i_core._T_State_Group<null, 
                                        | readonly ['containment', null]
                                        | readonly ['reference', null]
                                    >
                                }]
                            >
                        }>
                    }]
                    | readonly ['datatype', _i_core._T_State_Group<null, 
                        | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
                    >]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['classifier', {
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['concept', {
                            readonly 'abstract': string
                            readonly 'partition': string
                            readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                            readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                        }]
                        | readonly ['interface', {
                            readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                        }]
                    >
                    readonly 'features': _i_core._T_Dictionary<null, {
                        readonly 'id': _T_ID
                        readonly 'optional': string
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['property', {
                                readonly 'type': _T_Raw_Reference
                            }]
                            | readonly ['link', {
                                readonly 'multiple': string
                                readonly 'type': _T_Raw_Reference
                                readonly 'link type': _i_core._T_State_Group<null, 
                                    | readonly ['containment', null]
                                    | readonly ['reference', null]
                                >
                            }]
                        >
                    }>
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
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['concept', {
                            readonly 'abstract': string
                            readonly 'partition': string
                            readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                            readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                        }]
                        | readonly ['interface', {
                            readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                        }]
                    >
                    readonly 'features': _i_core._T_Dictionary<null, {
                        readonly 'id': _T_ID
                        readonly 'optional': string
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['property', {
                                readonly 'type': _T_Raw_Reference
                            }]
                            | readonly ['link', {
                                readonly 'multiple': string
                                readonly 'type': _T_Raw_Reference
                                readonly 'link type': _i_core._T_State_Group<null, 
                                    | readonly ['containment', null]
                                    | readonly ['reference', null]
                                >
                            }]
                        >
                    }>
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
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['concept', {
                        readonly 'abstract': string
                        readonly 'partition': string
                        readonly 'extends': _et.Optional_Value<_T_Raw_Reference>
                        readonly 'implements': _i_core._T_List<null, _T_Raw_Reference>
                    }]
                    | readonly ['interface', {
                        readonly 'extends': _i_core._T_List<null, _T_Raw_Reference>
                    }]
                >
                readonly 'features': _i_core._T_Dictionary<null, {
                    readonly 'id': _T_ID
                    readonly 'optional': string
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['property', {
                            readonly 'type': _T_Raw_Reference
                        }]
                        | readonly ['link', {
                            readonly 'multiple': string
                            readonly 'type': _T_Raw_Reference
                            readonly 'link type': _i_core._T_State_Group<null, 
                                | readonly ['containment', null]
                                | readonly ['reference', null]
                            >
                        }]
                    >
                }>
            }]
            | readonly ['datatype', _i_core._T_State_Group<null, 
                | readonly ['enumeration', _i_core._T_Dictionary<null, _T_ID>]
            >]
        >
    }>
}
