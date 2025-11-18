import * as _et from 'exupery-core-types'

import * as _i_in from "./data_types/source"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_ID = (
    $$_: _i_in._T_ID,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Raw_Reference = (
    $$_: _i_in._T_Raw_Reference,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_M3 = (
    $$_: _i_in._T_M3,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type ID = _T_ID

export type Raw_Reference = _T_Raw_Reference

export type M3 = _T_M3

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_ID {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_ID
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Raw_Reference {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Raw_Reference
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_M3 {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_M3
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

// *** ALIASES FOR NESTED TYPES

export namespace ID {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_ID
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Raw_Reference {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Raw_Reference
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace M3 {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_M3
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}
