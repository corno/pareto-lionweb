import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Meta_Pointer = {
    readonly 'key': string
    readonly 'language': string
    readonly 'version': string
}

export type _T_Serialization_Chunk = {
    readonly 'languages': _i_core._T_List<null, {
        readonly 'key': string
        readonly 'version': string
    }>
    readonly 'nodes': _i_core._T_List<null, {
        readonly 'annotations': _i_core._T_List<null, string>
        readonly 'classifier': _T_Meta_Pointer
        readonly 'containments': _i_core._T_List<null, {
            readonly 'children': _i_core._T_List<null, string>
            readonly 'containment': _T_Meta_Pointer
        }>
        readonly 'id': string
        readonly 'parent': _pt.Optional_Value<string>
        readonly 'properties': _i_core._T_List<null, {
            readonly 'property': _T_Meta_Pointer
            readonly 'value': string
        }>
        readonly 'references': _i_core._T_List<null, {
            readonly 'reference': _T_Meta_Pointer
            readonly 'targets': _T_Targets
        }>
    }>
    readonly 'serializationFormatVersion': string
}

export type _T_Targets = _i_core._T_List<null, {
    readonly 'reference': _pt.Optional_Value<string>
    readonly 'resolveInfo': string
}>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Meta_Pointer = _T_Meta_Pointer

export type Serialization_Chunk = _T_Serialization_Chunk

export type Targets = _T_Targets

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Meta_Pointer {
    export type key = string
    export type language = string
    export type version = string
}

export namespace _T_Serialization_Chunk {
    
    export namespace languages {
        
        export namespace L {
            export type key = string
            export type version = string
        }
        export type L = {
            readonly 'key': string
            readonly 'version': string
        }
    }
    export type languages = _i_core._T_List<null, {
        readonly 'key': string
        readonly 'version': string
    }>
    
    export namespace nodes {
        
        export namespace L {
            
            export namespace annotations {
                export type L = string
            }
            export type annotations = _i_core._T_List<null, string>
            
            export namespace classifier {
            }
            export type classifier = _T_Meta_Pointer
            
            export namespace containments {
                
                export namespace L {
                    
                    export namespace children {
                        export type L = string
                    }
                    export type children = _i_core._T_List<null, string>
                    
                    export namespace containment {
                    }
                    export type containment = _T_Meta_Pointer
                }
                export type L = {
                    readonly 'children': _i_core._T_List<null, string>
                    readonly 'containment': _T_Meta_Pointer
                }
            }
            export type containments = _i_core._T_List<null, {
                readonly 'children': _i_core._T_List<null, string>
                readonly 'containment': _T_Meta_Pointer
            }>
            export type id = string
            
            export namespace parent {
                export type O = string
            }
            export type parent = _pt.Optional_Value<string>
            
            export namespace properties {
                
                export namespace L {
                    
                    export namespace property {
                    }
                    export type property = _T_Meta_Pointer
                    export type value = string
                }
                export type L = {
                    readonly 'property': _T_Meta_Pointer
                    readonly 'value': string
                }
            }
            export type properties = _i_core._T_List<null, {
                readonly 'property': _T_Meta_Pointer
                readonly 'value': string
            }>
            
            export namespace references {
                
                export namespace L {
                    
                    export namespace reference {
                    }
                    export type reference = _T_Meta_Pointer
                    
                    export namespace targets {
                    }
                    export type targets = _T_Targets
                }
                export type L = {
                    readonly 'reference': _T_Meta_Pointer
                    readonly 'targets': _T_Targets
                }
            }
            export type references = _i_core._T_List<null, {
                readonly 'reference': _T_Meta_Pointer
                readonly 'targets': _T_Targets
            }>
        }
        export type L = {
            readonly 'annotations': _i_core._T_List<null, string>
            readonly 'classifier': _T_Meta_Pointer
            readonly 'containments': _i_core._T_List<null, {
                readonly 'children': _i_core._T_List<null, string>
                readonly 'containment': _T_Meta_Pointer
            }>
            readonly 'id': string
            readonly 'parent': _pt.Optional_Value<string>
            readonly 'properties': _i_core._T_List<null, {
                readonly 'property': _T_Meta_Pointer
                readonly 'value': string
            }>
            readonly 'references': _i_core._T_List<null, {
                readonly 'reference': _T_Meta_Pointer
                readonly 'targets': _T_Targets
            }>
        }
    }
    export type nodes = _i_core._T_List<null, {
        readonly 'annotations': _i_core._T_List<null, string>
        readonly 'classifier': _T_Meta_Pointer
        readonly 'containments': _i_core._T_List<null, {
            readonly 'children': _i_core._T_List<null, string>
            readonly 'containment': _T_Meta_Pointer
        }>
        readonly 'id': string
        readonly 'parent': _pt.Optional_Value<string>
        readonly 'properties': _i_core._T_List<null, {
            readonly 'property': _T_Meta_Pointer
            readonly 'value': string
        }>
        readonly 'references': _i_core._T_List<null, {
            readonly 'reference': _T_Meta_Pointer
            readonly 'targets': _T_Targets
        }>
    }>
    export type serializationFormatVersion = string
}

export namespace _T_Targets {
    
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

export namespace Meta_Pointer {
    export type key = string
    export type language = string
    export type version = string
}

export namespace Serialization_Chunk {
    
    export namespace languages {
        
        export namespace L {
            export type key = string
            export type version = string
        }
        export type L = {
            readonly 'key': string
            readonly 'version': string
        }
    }
    export type languages = _i_core._T_List<null, {
        readonly 'key': string
        readonly 'version': string
    }>
    
    export namespace nodes {
        
        export namespace L {
            
            export namespace annotations {
                export type L = string
            }
            export type annotations = _i_core._T_List<null, string>
            
            export namespace classifier {
            }
            export type classifier = _T_Meta_Pointer
            
            export namespace containments {
                
                export namespace L {
                    
                    export namespace children {
                        export type L = string
                    }
                    export type children = _i_core._T_List<null, string>
                    
                    export namespace containment {
                    }
                    export type containment = _T_Meta_Pointer
                }
                export type L = {
                    readonly 'children': _i_core._T_List<null, string>
                    readonly 'containment': _T_Meta_Pointer
                }
            }
            export type containments = _i_core._T_List<null, {
                readonly 'children': _i_core._T_List<null, string>
                readonly 'containment': _T_Meta_Pointer
            }>
            export type id = string
            
            export namespace parent {
                export type O = string
            }
            export type parent = _pt.Optional_Value<string>
            
            export namespace properties {
                
                export namespace L {
                    
                    export namespace property {
                    }
                    export type property = _T_Meta_Pointer
                    export type value = string
                }
                export type L = {
                    readonly 'property': _T_Meta_Pointer
                    readonly 'value': string
                }
            }
            export type properties = _i_core._T_List<null, {
                readonly 'property': _T_Meta_Pointer
                readonly 'value': string
            }>
            
            export namespace references {
                
                export namespace L {
                    
                    export namespace reference {
                    }
                    export type reference = _T_Meta_Pointer
                    
                    export namespace targets {
                    }
                    export type targets = _T_Targets
                }
                export type L = {
                    readonly 'reference': _T_Meta_Pointer
                    readonly 'targets': _T_Targets
                }
            }
            export type references = _i_core._T_List<null, {
                readonly 'reference': _T_Meta_Pointer
                readonly 'targets': _T_Targets
            }>
        }
        export type L = {
            readonly 'annotations': _i_core._T_List<null, string>
            readonly 'classifier': _T_Meta_Pointer
            readonly 'containments': _i_core._T_List<null, {
                readonly 'children': _i_core._T_List<null, string>
                readonly 'containment': _T_Meta_Pointer
            }>
            readonly 'id': string
            readonly 'parent': _pt.Optional_Value<string>
            readonly 'properties': _i_core._T_List<null, {
                readonly 'property': _T_Meta_Pointer
                readonly 'value': string
            }>
            readonly 'references': _i_core._T_List<null, {
                readonly 'reference': _T_Meta_Pointer
                readonly 'targets': _T_Targets
            }>
        }
    }
    export type nodes = _i_core._T_List<null, {
        readonly 'annotations': _i_core._T_List<null, string>
        readonly 'classifier': _T_Meta_Pointer
        readonly 'containments': _i_core._T_List<null, {
            readonly 'children': _i_core._T_List<null, string>
            readonly 'containment': _T_Meta_Pointer
        }>
        readonly 'id': string
        readonly 'parent': _pt.Optional_Value<string>
        readonly 'properties': _i_core._T_List<null, {
            readonly 'property': _T_Meta_Pointer
            readonly 'value': string
        }>
        readonly 'references': _i_core._T_List<null, {
            readonly 'reference': _T_Meta_Pointer
            readonly 'targets': _T_Targets
        }>
    }>
    export type serializationFormatVersion = string
}

export namespace Targets {
    
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
