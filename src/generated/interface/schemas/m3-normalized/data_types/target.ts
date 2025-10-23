import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Features = _i_core._T_Dictionary<null, {
    readonly 'feature type': _pt.Optional_Value<_T_Raw_References>
    readonly 'multiple': _pt.Optional_Value<string>
    readonly 'optional': string
    readonly 'property type': _pt.Optional_Value<_T_Raw_References>
}>

export type _T_M3 = {
    readonly 'dependencies': _T_Raw_References
    readonly 'entities': _i_core._T_Dictionary<null, {
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['concept', {
                readonly 'abstract': string
                readonly 'extends': _T_Raw_References
                readonly 'features': _T_Features
                readonly 'implements': _T_Raw_References
                readonly 'partition': string
            }]
            | readonly ['enumeration', _i_core._T_Dictionary<null, null>]
            | readonly ['interface', {
                readonly 'extends': _T_Raw_References
                readonly 'features': _T_Features
            }]
        >
    }>
    readonly 'name': string
    readonly 'version': string
}

export type _T_Raw_References = _i_core._T_List<null, {
    readonly 'reference': string
    readonly 'resolveInfo': string
}>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Features = _T_Features

export type M3 = _T_M3

export type Raw_References = _T_Raw_References

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Features {
    
    export namespace D {
        
        export namespace feature_type {
            
            export namespace O {
            }
            export type O = _T_Raw_References
        }
        export type feature_type = _pt.Optional_Value<_T_Raw_References>
        
        export namespace multiple {
            export type O = string
        }
        export type multiple = _pt.Optional_Value<string>
        export type optional = string
        
        export namespace property_type {
            
            export namespace O {
            }
            export type O = _T_Raw_References
        }
        export type property_type = _pt.Optional_Value<_T_Raw_References>
    }
    export type D = {
        readonly 'feature type': _pt.Optional_Value<_T_Raw_References>
        readonly 'multiple': _pt.Optional_Value<string>
        readonly 'optional': string
        readonly 'property type': _pt.Optional_Value<_T_Raw_References>
    }
}

export namespace _T_M3 {
    
    export namespace dependencies {
    }
    export type dependencies = _T_Raw_References
    
    export namespace entities {
        
        export namespace D {
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace concept {
                        export type abstract = string
                        
                        export namespace _extends {
                        }
                        export type _extends = _T_Raw_References
                        
                        export namespace features {
                        }
                        export type features = _T_Features
                        
                        export namespace _implements {
                        }
                        export type _implements = _T_Raw_References
                        export type partition = string
                    }
                    export type concept = {
                        readonly 'abstract': string
                        readonly 'extends': _T_Raw_References
                        readonly 'features': _T_Features
                        readonly 'implements': _T_Raw_References
                        readonly 'partition': string
                    }
                    
                    export namespace enumeration {
                        export type D = null
                    }
                    export type enumeration = _i_core._T_Dictionary<null, null>
                    
                    export namespace _interface {
                        
                        export namespace _extends {
                        }
                        export type _extends = _T_Raw_References
                        
                        export namespace features {
                        }
                        export type features = _T_Features
                    }
                    export type _interface = {
                        readonly 'extends': _T_Raw_References
                        readonly 'features': _T_Features
                    }
                }
                export type SG = 
                    | readonly ['concept', {
                        readonly 'abstract': string
                        readonly 'extends': _T_Raw_References
                        readonly 'features': _T_Features
                        readonly 'implements': _T_Raw_References
                        readonly 'partition': string
                    }]
                    | readonly ['enumeration', _i_core._T_Dictionary<null, null>]
                    | readonly ['interface', {
                        readonly 'extends': _T_Raw_References
                        readonly 'features': _T_Features
                    }]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['concept', {
                    readonly 'abstract': string
                    readonly 'extends': _T_Raw_References
                    readonly 'features': _T_Features
                    readonly 'implements': _T_Raw_References
                    readonly 'partition': string
                }]
                | readonly ['enumeration', _i_core._T_Dictionary<null, null>]
                | readonly ['interface', {
                    readonly 'extends': _T_Raw_References
                    readonly 'features': _T_Features
                }]
            >
        }
        export type D = {
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['concept', {
                    readonly 'abstract': string
                    readonly 'extends': _T_Raw_References
                    readonly 'features': _T_Features
                    readonly 'implements': _T_Raw_References
                    readonly 'partition': string
                }]
                | readonly ['enumeration', _i_core._T_Dictionary<null, null>]
                | readonly ['interface', {
                    readonly 'extends': _T_Raw_References
                    readonly 'features': _T_Features
                }]
            >
        }
    }
    export type entities = _i_core._T_Dictionary<null, {
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['concept', {
                readonly 'abstract': string
                readonly 'extends': _T_Raw_References
                readonly 'features': _T_Features
                readonly 'implements': _T_Raw_References
                readonly 'partition': string
            }]
            | readonly ['enumeration', _i_core._T_Dictionary<null, null>]
            | readonly ['interface', {
                readonly 'extends': _T_Raw_References
                readonly 'features': _T_Features
            }]
        >
    }>
    export type name = string
    export type version = string
}

export namespace _T_Raw_References {
    
    export namespace L {
        export type reference = string
        export type resolveInfo = string
    }
    export type L = {
        readonly 'reference': string
        readonly 'resolveInfo': string
    }
}

// *** ALIASES FOR NESTED TYPES

export namespace Features {
    
    export namespace D {
        
        export namespace feature_type {
            
            export namespace O {
            }
            export type O = _T_Raw_References
        }
        export type feature_type = _pt.Optional_Value<_T_Raw_References>
        
        export namespace multiple {
            export type O = string
        }
        export type multiple = _pt.Optional_Value<string>
        export type optional = string
        
        export namespace property_type {
            
            export namespace O {
            }
            export type O = _T_Raw_References
        }
        export type property_type = _pt.Optional_Value<_T_Raw_References>
    }
    export type D = {
        readonly 'feature type': _pt.Optional_Value<_T_Raw_References>
        readonly 'multiple': _pt.Optional_Value<string>
        readonly 'optional': string
        readonly 'property type': _pt.Optional_Value<_T_Raw_References>
    }
}

export namespace M3 {
    
    export namespace dependencies {
    }
    export type dependencies = _T_Raw_References
    
    export namespace entities {
        
        export namespace D {
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace concept {
                        export type abstract = string
                        
                        export namespace _extends {
                        }
                        export type _extends = _T_Raw_References
                        
                        export namespace features {
                        }
                        export type features = _T_Features
                        
                        export namespace _implements {
                        }
                        export type _implements = _T_Raw_References
                        export type partition = string
                    }
                    export type concept = {
                        readonly 'abstract': string
                        readonly 'extends': _T_Raw_References
                        readonly 'features': _T_Features
                        readonly 'implements': _T_Raw_References
                        readonly 'partition': string
                    }
                    
                    export namespace enumeration {
                        export type D = null
                    }
                    export type enumeration = _i_core._T_Dictionary<null, null>
                    
                    export namespace _interface {
                        
                        export namespace _extends {
                        }
                        export type _extends = _T_Raw_References
                        
                        export namespace features {
                        }
                        export type features = _T_Features
                    }
                    export type _interface = {
                        readonly 'extends': _T_Raw_References
                        readonly 'features': _T_Features
                    }
                }
                export type SG = 
                    | readonly ['concept', {
                        readonly 'abstract': string
                        readonly 'extends': _T_Raw_References
                        readonly 'features': _T_Features
                        readonly 'implements': _T_Raw_References
                        readonly 'partition': string
                    }]
                    | readonly ['enumeration', _i_core._T_Dictionary<null, null>]
                    | readonly ['interface', {
                        readonly 'extends': _T_Raw_References
                        readonly 'features': _T_Features
                    }]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['concept', {
                    readonly 'abstract': string
                    readonly 'extends': _T_Raw_References
                    readonly 'features': _T_Features
                    readonly 'implements': _T_Raw_References
                    readonly 'partition': string
                }]
                | readonly ['enumeration', _i_core._T_Dictionary<null, null>]
                | readonly ['interface', {
                    readonly 'extends': _T_Raw_References
                    readonly 'features': _T_Features
                }]
            >
        }
        export type D = {
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['concept', {
                    readonly 'abstract': string
                    readonly 'extends': _T_Raw_References
                    readonly 'features': _T_Features
                    readonly 'implements': _T_Raw_References
                    readonly 'partition': string
                }]
                | readonly ['enumeration', _i_core._T_Dictionary<null, null>]
                | readonly ['interface', {
                    readonly 'extends': _T_Raw_References
                    readonly 'features': _T_Features
                }]
            >
        }
    }
    export type entities = _i_core._T_Dictionary<null, {
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['concept', {
                readonly 'abstract': string
                readonly 'extends': _T_Raw_References
                readonly 'features': _T_Features
                readonly 'implements': _T_Raw_References
                readonly 'partition': string
            }]
            | readonly ['enumeration', _i_core._T_Dictionary<null, null>]
            | readonly ['interface', {
                readonly 'extends': _T_Raw_References
                readonly 'features': _T_Features
            }]
        >
    }>
    export type name = string
    export type version = string
}

export namespace Raw_References {
    
    export namespace L {
        export type reference = string
        export type resolveInfo = string
    }
    export type L = {
        readonly 'reference': string
        readonly 'resolveInfo': string
    }
}
