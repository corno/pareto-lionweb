
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/modules/unresolved_document_deserialization/schemas/unresolved_document_deserialization/schema"

import * as i_in from "astn-core/modules/deserialization/schemas/list_of_characters/schema"

import * as i_out from "../schema.js"

export namespace ID_ {
    
    export type I = i_in.List_Of_Characters
    
    export type O = i_out.ID
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type ID_ = (
    context: ID_.I,
    abort: p_i.Abort<ID_.E>,
    parameters: {
        readonly 'tab size': ID_.P.tab_size
    },
) => ID_.O

export namespace Raw_Reference_ {
    
    export type I = i_in.List_Of_Characters
    
    export type O = i_out.Raw_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Raw_Reference_ = (
    context: Raw_Reference_.I,
    abort: p_i.Abort<Raw_Reference_.E>,
    parameters: {
        readonly 'tab size': Raw_Reference_.P.tab_size
    },
) => Raw_Reference_.O

export namespace Singular_Reference_ {
    
    export type I = i_in.List_Of_Characters
    
    export type O = i_out.Singular_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Singular_Reference_ = (
    context: Singular_Reference_.I,
    abort: p_i.Abort<Singular_Reference_.E>,
    parameters: {
        readonly 'tab size': Singular_Reference_.P.tab_size
    },
) => Singular_Reference_.O

export namespace References_ {
    
    export type I = i_in.List_Of_Characters
    
    export type O = i_out.References
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type References_ = (
    context: References_.I,
    abort: p_i.Abort<References_.E>,
    parameters: {
        readonly 'tab size': References_.P.tab_size
    },
) => References_.O

export namespace Optional_Reference_ {
    
    export type I = i_in.List_Of_Characters
    
    export type O = i_out.Optional_Reference
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Optional_Reference_ = (
    context: Optional_Reference_.I,
    abort: p_i.Abort<Optional_Reference_.E>,
    parameters: {
        readonly 'tab size': Optional_Reference_.P.tab_size
    },
) => Optional_Reference_.O


import * as p_ from 'pareto-core/implementation/refiner'

import * as v_deserialize from "astn-core/modules/deserialization/schemas/parse_tree/refiners/list_of_characters"

import * as v_unmarshall from "./astn_parse_tree.js"

export const ID: ID_ = ($, abort, $p) => v_unmarshall.ID(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)

export const Raw_Reference: Raw_Reference_ = ($, abort, $p) => v_unmarshall.Raw_Reference(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)

export const Singular_Reference: Singular_Reference_ = ($, abort, $p) => v_unmarshall.Singular_Reference(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)

export const References: References_ = ($, abort, $p) => v_unmarshall.References(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)

export const Optional_Reference: Optional_Reference_ = ($, abort, $p) => v_unmarshall.Optional_Reference(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)
