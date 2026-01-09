import * as _pi from 'pareto-core-interface'

import * as _i_out from "./data_types/target"
import * as _i_in from "./data_types/source"

// **** TYPES

export type _T_ID = (
    $$_: _i_in._T_ID,
    $$_p: null,
) => _i_out._T_ID

export type _T_Raw_Reference = (
    $$_: _i_in._T_Raw_Reference,
    $$_p: null,
) => _i_out._T_Raw_Reference

export type _T_M3 = (
    $$_: _i_in._T_M3,
    $$_p: null,
) => _i_out._T_M3

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
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_ID
}

export namespace _T_Raw_Reference {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Raw_Reference
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Raw_Reference
}

export namespace _T_M3 {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_M3
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_M3
}

// *** ALIASES FOR NESTED TYPES

export namespace ID {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_ID
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_ID
}

export namespace Raw_Reference {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Raw_Reference
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Raw_Reference
}

export namespace M3 {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_M3
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_M3
}
