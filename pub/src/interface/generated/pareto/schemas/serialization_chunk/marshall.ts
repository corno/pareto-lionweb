import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/source"
import * as _i_out from "../../core/astn_target"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Meta_Pointer = (
    $$_: _i_in._T_Meta_Pointer,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Serialization_Chunk = (
    $$_: _i_in._T_Serialization_Chunk,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Targets = (
    $$_: _i_in._T_Targets,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Meta_Pointer = _T_Meta_Pointer

export type Serialization_Chunk = _T_Serialization_Chunk

export type Targets = _T_Targets

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Meta_Pointer {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Meta_Pointer
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Serialization_Chunk {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Serialization_Chunk
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Targets {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Targets
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

// *** ALIASES FOR NESTED TYPES

export namespace Meta_Pointer {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Meta_Pointer
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Serialization_Chunk {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Serialization_Chunk
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Targets {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Targets
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
