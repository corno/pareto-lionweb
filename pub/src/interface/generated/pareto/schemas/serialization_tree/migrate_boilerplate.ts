import * as _pi from 'pareto-core-interface'

import * as _i_out from "./data_types/target"
import * as _i_in from "./data_types/source"

// **** TYPES

export type _T_Targets = (
    $$_: _i_in._T_Targets,
    $$_p: null,
) => _i_out._T_Targets

export type _T_Node = (
    $$_: _i_in._T_Node,
    $$_p: null,
) => _i_out._T_Node

export type _T_Serialization_Chunk = (
    $$_: _i_in._T_Serialization_Chunk,
    $$_p: null,
) => _i_out._T_Serialization_Chunk

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Targets = _T_Targets

export type Node = _T_Node

export type Serialization_Chunk = _T_Serialization_Chunk

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Targets {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Targets
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Targets
}

export namespace _T_Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Node
}

export namespace _T_Serialization_Chunk {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Serialization_Chunk
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Serialization_Chunk
}

// *** ALIASES FOR NESTED TYPES

export namespace Targets {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Targets
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Targets
}

export namespace Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Node
}

export namespace Serialization_Chunk {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Serialization_Chunk
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Serialization_Chunk
}
