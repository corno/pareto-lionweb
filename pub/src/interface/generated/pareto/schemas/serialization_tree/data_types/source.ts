import * as _pi from 'pareto-core-interface'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Targets = _i_core._T_List<null, {
    readonly 'resolveInfo': string
    readonly 'reference': _pi.Optional_Value<string>
}>

export type _T_Node = {
    readonly 'classifier': string
    readonly 'properties': _i_core._T_Dictionary<null, string>
    readonly 'containments': _i_core._T_Dictionary<null, _i_core._T_Dictionary<null, _T_Node>>
    readonly 'references': _i_core._T_Dictionary<null, _T_Targets>
    readonly 'annotations': _i_core._T_List<null, string>
}

export type _T_Serialization_Chunk = {
    readonly 'serializationFormatVersion': string
    readonly 'languages': _i_core._T_List<null, {
        readonly 'key': string
        readonly 'version': string
    }>
    readonly 'root node id': string
    readonly 'node tree': _T_Node
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Targets = _T_Targets

export type Node = _T_Node

export type Serialization_Chunk = _T_Serialization_Chunk

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Targets {
    
    export namespace L {
        export type resolveInfo = string
        
        export namespace reference {
            export type O = string
        }
        export type reference = _pi.Optional_Value<string>
    }
    export type L = {
        readonly 'resolveInfo': string
        readonly 'reference': _pi.Optional_Value<string>
    }
}

export namespace _T_Node {
    export type classifier = string
    
    export namespace properties {
        export type D = string
    }
    export type properties = _i_core._T_Dictionary<null, string>
    
    export namespace containments {
        
        export namespace D {
            
            export namespace D {
            }
            export type D = _T_Node
        }
        export type D = _i_core._T_Dictionary<null, _T_Node>
    }
    export type containments = _i_core._T_Dictionary<null, _i_core._T_Dictionary<null, _T_Node>>
    
    export namespace references {
        
        export namespace D {
        }
        export type D = _T_Targets
    }
    export type references = _i_core._T_Dictionary<null, _T_Targets>
    
    export namespace annotations {
        export type L = string
    }
    export type annotations = _i_core._T_List<null, string>
}

export namespace _T_Serialization_Chunk {
    export type serializationFormatVersion = string
    
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
    export type root_node_id = string
    
    export namespace node_tree {
    }
    export type node_tree = _T_Node
}

// *** ALIASES FOR NESTED TYPES

export namespace Targets {
    
    export namespace L {
        export type resolveInfo = string
        
        export namespace reference {
            export type O = string
        }
        export type reference = _pi.Optional_Value<string>
    }
    export type L = {
        readonly 'resolveInfo': string
        readonly 'reference': _pi.Optional_Value<string>
    }
}

export namespace Node {
    export type classifier = string
    
    export namespace properties {
        export type D = string
    }
    export type properties = _i_core._T_Dictionary<null, string>
    
    export namespace containments {
        
        export namespace D {
            
            export namespace D {
            }
            export type D = _T_Node
        }
        export type D = _i_core._T_Dictionary<null, _T_Node>
    }
    export type containments = _i_core._T_Dictionary<null, _i_core._T_Dictionary<null, _T_Node>>
    
    export namespace references {
        
        export namespace D {
        }
        export type D = _T_Targets
    }
    export type references = _i_core._T_Dictionary<null, _T_Targets>
    
    export namespace annotations {
        export type L = string
    }
    export type annotations = _i_core._T_List<null, string>
}

export namespace Serialization_Chunk {
    export type serializationFormatVersion = string
    
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
    export type root_node_id = string
    
    export namespace node_tree {
    }
    export type node_tree = _T_Node
}
