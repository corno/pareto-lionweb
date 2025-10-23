import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_ID = {
    readonly 'key': string
    readonly 'name': string
}

export type _T_M3 = {
    readonly 'dependencies': _T_Raw_References
    readonly 'entities': _i_core._T_Dictionary<null, {
        readonly 'id': _T_ID
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['classifier', {
                readonly 'features': _i_core._T_Dictionary<null, {
                    readonly 'id': _T_ID
                    readonly 'optional': string
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['feature', {
                            readonly 'multiple': string
                            readonly 'type': _T_Raw_References
                        }]
                        | readonly ['property', {
                            readonly 'type': _T_Raw_References
                        }]
                    >
                }>
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['concept', {
                        readonly 'abstract': string
                        readonly 'extends': _T_Raw_References
                        readonly 'implements': _T_Raw_References
                        readonly 'partition': string
                    }]
                    | readonly ['interface', {
                        readonly 'extends': _T_Raw_References
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

export type _T_Raw_References = _i_core._T_List<null, {
    readonly 'reference': _pt.Optional_Value<string>
    readonly 'resolveInfo': string
}>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type ID = _T_ID

export type M3 = _T_M3

export type Raw_References = _T_Raw_References

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_ID {
    export type key = string
    export type name = string
}

export namespace _T_M3 {
    
    export namespace dependencies {
    }
    export type dependencies = _T_Raw_References
    
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
                                        
                                        export namespace feature {
                                            export type multiple = string
                                            
                                            export namespace _type {
                                            }
                                            export type _type = _T_Raw_References
                                        }
                                        export type feature = {
                                            readonly 'multiple': string
                                            readonly 'type': _T_Raw_References
                                        }
                                        
                                        export namespace property {
                                            
                                            export namespace _type {
                                            }
                                            export type _type = _T_Raw_References
                                        }
                                        export type property = {
                                            readonly 'type': _T_Raw_References
                                        }
                                    }
                                    export type SG = 
                                        | readonly ['feature', {
                                            readonly 'multiple': string
                                            readonly 'type': _T_Raw_References
                                        }]
                                        | readonly ['property', {
                                            readonly 'type': _T_Raw_References
                                        }]
                                }
                                export type _type = _i_core._T_State_Group<null, 
                                    | readonly ['feature', {
                                        readonly 'multiple': string
                                        readonly 'type': _T_Raw_References
                                    }]
                                    | readonly ['property', {
                                        readonly 'type': _T_Raw_References
                                    }]
                                >
                            }
                            export type D = {
                                readonly 'id': _T_ID
                                readonly 'optional': string
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['feature', {
                                        readonly 'multiple': string
                                        readonly 'type': _T_Raw_References
                                    }]
                                    | readonly ['property', {
                                        readonly 'type': _T_Raw_References
                                    }]
                                >
                            }
                        }
                        export type features = _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['feature', {
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_References
                                }]
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_References
                                }]
                            >
                        }>
                        
                        export namespace _type {
                            
                            export namespace SG {
                                
                                export namespace concept {
                                    export type abstract = string
                                    
                                    export namespace _extends {
                                    }
                                    export type _extends = _T_Raw_References
                                    
                                    export namespace _implements {
                                    }
                                    export type _implements = _T_Raw_References
                                    export type partition = string
                                }
                                export type concept = {
                                    readonly 'abstract': string
                                    readonly 'extends': _T_Raw_References
                                    readonly 'implements': _T_Raw_References
                                    readonly 'partition': string
                                }
                                
                                export namespace _interface {
                                    
                                    export namespace _extends {
                                    }
                                    export type _extends = _T_Raw_References
                                }
                                export type _interface = {
                                    readonly 'extends': _T_Raw_References
                                }
                            }
                            export type SG = 
                                | readonly ['concept', {
                                    readonly 'abstract': string
                                    readonly 'extends': _T_Raw_References
                                    readonly 'implements': _T_Raw_References
                                    readonly 'partition': string
                                }]
                                | readonly ['interface', {
                                    readonly 'extends': _T_Raw_References
                                }]
                        }
                        export type _type = _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'extends': _T_Raw_References
                                readonly 'implements': _T_Raw_References
                                readonly 'partition': string
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _T_Raw_References
                            }]
                        >
                    }
                    export type classifier = {
                        readonly 'features': _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['feature', {
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_References
                                }]
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_References
                                }]
                            >
                        }>
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'extends': _T_Raw_References
                                readonly 'implements': _T_Raw_References
                                readonly 'partition': string
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _T_Raw_References
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
                                | readonly ['feature', {
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_References
                                }]
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_References
                                }]
                            >
                        }>
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'extends': _T_Raw_References
                                readonly 'implements': _T_Raw_References
                                readonly 'partition': string
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _T_Raw_References
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
                            | readonly ['feature', {
                                readonly 'multiple': string
                                readonly 'type': _T_Raw_References
                            }]
                            | readonly ['property', {
                                readonly 'type': _T_Raw_References
                            }]
                        >
                    }>
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['concept', {
                            readonly 'abstract': string
                            readonly 'extends': _T_Raw_References
                            readonly 'implements': _T_Raw_References
                            readonly 'partition': string
                        }]
                        | readonly ['interface', {
                            readonly 'extends': _T_Raw_References
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
                            | readonly ['feature', {
                                readonly 'multiple': string
                                readonly 'type': _T_Raw_References
                            }]
                            | readonly ['property', {
                                readonly 'type': _T_Raw_References
                            }]
                        >
                    }>
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['concept', {
                            readonly 'abstract': string
                            readonly 'extends': _T_Raw_References
                            readonly 'implements': _T_Raw_References
                            readonly 'partition': string
                        }]
                        | readonly ['interface', {
                            readonly 'extends': _T_Raw_References
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
                        | readonly ['feature', {
                            readonly 'multiple': string
                            readonly 'type': _T_Raw_References
                        }]
                        | readonly ['property', {
                            readonly 'type': _T_Raw_References
                        }]
                    >
                }>
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['concept', {
                        readonly 'abstract': string
                        readonly 'extends': _T_Raw_References
                        readonly 'implements': _T_Raw_References
                        readonly 'partition': string
                    }]
                    | readonly ['interface', {
                        readonly 'extends': _T_Raw_References
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

export namespace _T_Raw_References {
    
    export namespace L {
        
        export namespace reference {
            export type O = string
        }
        export type reference = _pt.Optional_Value<string>
        export type resolveInfo = string
    }
    export type L = {
        readonly 'reference': _pt.Optional_Value<string>
        readonly 'resolveInfo': string
    }
}

// *** ALIASES FOR NESTED TYPES

export namespace ID {
    export type key = string
    export type name = string
}

export namespace M3 {
    
    export namespace dependencies {
    }
    export type dependencies = _T_Raw_References
    
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
                                        
                                        export namespace feature {
                                            export type multiple = string
                                            
                                            export namespace _type {
                                            }
                                            export type _type = _T_Raw_References
                                        }
                                        export type feature = {
                                            readonly 'multiple': string
                                            readonly 'type': _T_Raw_References
                                        }
                                        
                                        export namespace property {
                                            
                                            export namespace _type {
                                            }
                                            export type _type = _T_Raw_References
                                        }
                                        export type property = {
                                            readonly 'type': _T_Raw_References
                                        }
                                    }
                                    export type SG = 
                                        | readonly ['feature', {
                                            readonly 'multiple': string
                                            readonly 'type': _T_Raw_References
                                        }]
                                        | readonly ['property', {
                                            readonly 'type': _T_Raw_References
                                        }]
                                }
                                export type _type = _i_core._T_State_Group<null, 
                                    | readonly ['feature', {
                                        readonly 'multiple': string
                                        readonly 'type': _T_Raw_References
                                    }]
                                    | readonly ['property', {
                                        readonly 'type': _T_Raw_References
                                    }]
                                >
                            }
                            export type D = {
                                readonly 'id': _T_ID
                                readonly 'optional': string
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['feature', {
                                        readonly 'multiple': string
                                        readonly 'type': _T_Raw_References
                                    }]
                                    | readonly ['property', {
                                        readonly 'type': _T_Raw_References
                                    }]
                                >
                            }
                        }
                        export type features = _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['feature', {
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_References
                                }]
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_References
                                }]
                            >
                        }>
                        
                        export namespace _type {
                            
                            export namespace SG {
                                
                                export namespace concept {
                                    export type abstract = string
                                    
                                    export namespace _extends {
                                    }
                                    export type _extends = _T_Raw_References
                                    
                                    export namespace _implements {
                                    }
                                    export type _implements = _T_Raw_References
                                    export type partition = string
                                }
                                export type concept = {
                                    readonly 'abstract': string
                                    readonly 'extends': _T_Raw_References
                                    readonly 'implements': _T_Raw_References
                                    readonly 'partition': string
                                }
                                
                                export namespace _interface {
                                    
                                    export namespace _extends {
                                    }
                                    export type _extends = _T_Raw_References
                                }
                                export type _interface = {
                                    readonly 'extends': _T_Raw_References
                                }
                            }
                            export type SG = 
                                | readonly ['concept', {
                                    readonly 'abstract': string
                                    readonly 'extends': _T_Raw_References
                                    readonly 'implements': _T_Raw_References
                                    readonly 'partition': string
                                }]
                                | readonly ['interface', {
                                    readonly 'extends': _T_Raw_References
                                }]
                        }
                        export type _type = _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'extends': _T_Raw_References
                                readonly 'implements': _T_Raw_References
                                readonly 'partition': string
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _T_Raw_References
                            }]
                        >
                    }
                    export type classifier = {
                        readonly 'features': _i_core._T_Dictionary<null, {
                            readonly 'id': _T_ID
                            readonly 'optional': string
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['feature', {
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_References
                                }]
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_References
                                }]
                            >
                        }>
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'extends': _T_Raw_References
                                readonly 'implements': _T_Raw_References
                                readonly 'partition': string
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _T_Raw_References
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
                                | readonly ['feature', {
                                    readonly 'multiple': string
                                    readonly 'type': _T_Raw_References
                                }]
                                | readonly ['property', {
                                    readonly 'type': _T_Raw_References
                                }]
                            >
                        }>
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['concept', {
                                readonly 'abstract': string
                                readonly 'extends': _T_Raw_References
                                readonly 'implements': _T_Raw_References
                                readonly 'partition': string
                            }]
                            | readonly ['interface', {
                                readonly 'extends': _T_Raw_References
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
                            | readonly ['feature', {
                                readonly 'multiple': string
                                readonly 'type': _T_Raw_References
                            }]
                            | readonly ['property', {
                                readonly 'type': _T_Raw_References
                            }]
                        >
                    }>
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['concept', {
                            readonly 'abstract': string
                            readonly 'extends': _T_Raw_References
                            readonly 'implements': _T_Raw_References
                            readonly 'partition': string
                        }]
                        | readonly ['interface', {
                            readonly 'extends': _T_Raw_References
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
                            | readonly ['feature', {
                                readonly 'multiple': string
                                readonly 'type': _T_Raw_References
                            }]
                            | readonly ['property', {
                                readonly 'type': _T_Raw_References
                            }]
                        >
                    }>
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['concept', {
                            readonly 'abstract': string
                            readonly 'extends': _T_Raw_References
                            readonly 'implements': _T_Raw_References
                            readonly 'partition': string
                        }]
                        | readonly ['interface', {
                            readonly 'extends': _T_Raw_References
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
                        | readonly ['feature', {
                            readonly 'multiple': string
                            readonly 'type': _T_Raw_References
                        }]
                        | readonly ['property', {
                            readonly 'type': _T_Raw_References
                        }]
                    >
                }>
                readonly 'type': _i_core._T_State_Group<null, 
                    | readonly ['concept', {
                        readonly 'abstract': string
                        readonly 'extends': _T_Raw_References
                        readonly 'implements': _T_Raw_References
                        readonly 'partition': string
                    }]
                    | readonly ['interface', {
                        readonly 'extends': _T_Raw_References
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

export namespace Raw_References {
    
    export namespace L {
        
        export namespace reference {
            export type O = string
        }
        export type reference = _pt.Optional_Value<string>
        export type resolveInfo = string
    }
    export type L = {
        readonly 'reference': _pt.Optional_Value<string>
        readonly 'resolveInfo': string
    }
}
