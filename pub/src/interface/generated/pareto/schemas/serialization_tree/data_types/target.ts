import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Node = {
    readonly 'annotations': _i_core._T_List<null, string>
    readonly 'classifier': string
    readonly 'containments': _i_core._T_Dictionary<null, _i_core._T_Dictionary<null, _T_Node>>
    readonly 'properties': _i_core._T_Dictionary<null, string>
    readonly 'references': _i_core._T_Dictionary<null, _T_Targets>
}

export type _T_Serialization_Chunk = {
    readonly 'languages': _i_core._T_List<null, {
        readonly 'key': string
        readonly 'version': string
    }>
    readonly 'node tree': _T_Node
    readonly 'root node id': string
    readonly 'serializationFormatVersion': string
}

export type _T_Targets = _i_core._T_List<null, {
    readonly 'reference': _pt.Optional_Value<string>
    readonly 'resolveInfo': string
}>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Node = _T_Node

export type Serialization_Chunk = _T_Serialization_Chunk

export type Targets = _T_Targets

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Node {
    
    export namespace annotations {
        export type L = string
    }
    export type annotations = _i_core._T_List<null, string>
    export type classifier = string
    
    export namespace containments {
        
        export namespace D {
            
            export namespace D {
            }
            export type D = _T_Node
        }
        export type D = _i_core._T_Dictionary<null, _T_Node>
    }
    export type containments = _i_core._T_Dictionary<null, _i_core._T_Dictionary<null, _T_Node>>
    
    export namespace properties {
        export type D = string
    }
    export type properties = _i_core._T_Dictionary<null, string>
    
    export namespace references {
        
        export namespace D {
        }
        export type D = _T_Targets
    }
    export type references = _i_core._T_Dictionary<null, _T_Targets>
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
    
    export namespace node_tree {
    }
    export type node_tree = _T_Node
    export type root_node_id = string
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

export namespace Node {
    
    export namespace annotations {
        export type L = string
    }
    export type annotations = _i_core._T_List<null, string>
    export type classifier = string
    
    export namespace containments {
        
        export namespace D {
            
            export namespace D {
            }
            export type D = _T_Node
        }
        export type D = _i_core._T_Dictionary<null, _T_Node>
    }
    export type containments = _i_core._T_Dictionary<null, _i_core._T_Dictionary<null, _T_Node>>
    
    export namespace properties {
        export type D = string
    }
    export type properties = _i_core._T_Dictionary<null, string>
    
    export namespace references {
        
        export namespace D {
        }
        export type D = _T_Targets
    }
    export type references = _i_core._T_Dictionary<null, _T_Targets>
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
    
    export namespace node_tree {
    }
    export type node_tree = _T_Node
    export type root_node_id = string
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
