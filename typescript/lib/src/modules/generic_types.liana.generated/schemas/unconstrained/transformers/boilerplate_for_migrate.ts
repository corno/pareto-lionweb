
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_out from "../schema.js"

import * as i_in from "../schema.js"

export namespace ID_ {
    
    export type I = i_in.ID
    
    export type O = i_out.ID
    
    export namespace P {
        
    }
    
}

export type ID_ = (
    context: ID_.I,
) => ID_.O

export namespace Raw_Reference_ {
    
    export type I = i_in.Raw_Reference
    
    export type O = i_out.Raw_Reference
    
    export namespace P {
        
    }
    
}

export type Raw_Reference_ = (
    context: Raw_Reference_.I,
) => Raw_Reference_.O

export namespace Singular_Reference_ {
    
    export type I = i_in.Singular_Reference
    
    export type O = i_out.Singular_Reference
    
    export namespace P {
        
    }
    
}

export type Singular_Reference_ = (
    context: Singular_Reference_.I,
) => Singular_Reference_.O

export namespace References_ {
    
    export type I = i_in.References
    
    export type O = i_out.References
    
    export namespace P {
        
    }
    
}

export type References_ = (
    context: References_.I,
) => References_.O

export namespace Optional_Reference_ {
    
    export type I = i_in.Optional_Reference
    
    export type O = i_out.Optional_Reference
    
    export namespace P {
        
    }
    
}

export type Optional_Reference_ = (
    context: Optional_Reference_.I,
) => Optional_Reference_.O


import * as p_ from 'pareto-core/implementation/transformer'
import p_implement_me from 'pareto-core-dev/implement_me'
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_out from "../schema.js"

// import * as v_location from "../../location/transformers/boilerplate_for_migrate.js"

export const ID: ID_ = ($) => ({
    'key': p_change_context(
        $['key'],
        ($) => $,
    ),
    'id': p_change_context(
        $['id'],
        ($) => $,
    ),
    'source': p_change_context(
        $['source'],
        ($) => p_.from.optional($,
        ).map(
            // ($) => v_location.Range(
            //     $,
            // ),
            ($) => p_implement_me("FFDSFSFDKJ"),
        ),
    ),
})

export const Raw_Reference: Raw_Reference_ = ($) => ({
    'resolveInfo': p_change_context(
        $['resolveInfo'],
        ($) => $,
    ),
    'reference': p_change_context(
        $['reference'],
        ($) => p_.from.optional($,
        ).map(
            ($) => $,
        ),
    ),
})

export const Singular_Reference: Singular_Reference_ = ($) => Raw_Reference(
    $,
)

export const References: References_ = ($) => p_.from.list($,
).map(
    ($) => Raw_Reference(
        $,
    ),
)

export const Optional_Reference: Optional_Reference_ = ($) => p_.from.optional($,
).map(
    ($) => Raw_Reference(
        $,
    ),
)
