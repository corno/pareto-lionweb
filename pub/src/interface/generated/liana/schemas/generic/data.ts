
import * as _pi from 'pareto-core/dist/interface'

import * as i__imports_location from "../location/data"

export namespace ID_ {
    
    export type key = string
    
    export type id = string
    
    export namespace source {
        
        export type O = i__imports_location.Range
        
    }
    
    export type source = _pi.Optional_Value<source.O>
    
}

export type ID_ = {
    readonly 'key': ID_.key
    readonly 'id': ID_.id
    readonly 'source': ID_.source
}

export namespace Raw_Reference_ {
    
    export type resolveInfo = string
    
    export namespace reference {
        
        export type O = string
        
    }
    
    export type reference = _pi.Optional_Value<reference.O>
    
}

export type Raw_Reference_ = {
    readonly 'resolveInfo': Raw_Reference_.resolveInfo
    readonly 'reference': Raw_Reference_.reference
}

export type Singular_Reference_ = Raw_Reference_

export namespace References_ {
    
    export type L = Raw_Reference_
    
}

export type References_ = _pi.List<References_.L>

export namespace Optional_Reference_ {
    
    export type O = Raw_Reference_
    
}

export type Optional_Reference_ = _pi.Optional_Value<Optional_Reference_.O>

export { 
    ID_ as ID, 
    Raw_Reference_ as Raw_Reference, 
    Singular_Reference_ as Singular_Reference, 
    References_ as References, 
    Optional_Reference_ as Optional_Reference, 
}
