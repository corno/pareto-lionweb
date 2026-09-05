
import * as p_i from 'pareto-core/__internal/Abort'

import * as i_generic from "liana-core/modules/unresolved_document_deserialization/schemas/unresolved_document_deserialization/schema"

import * as i_in from "astn-core/modules/deserialization/schemas/list_of_characters/schema"

import * as i_out from "../schema.js"

namespace declarations {
export namespace M3_ {
    
    export type I = i_in.List_Of_Characters
    
    export type O = i_out.M3
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type M3_ = (
    context: M3_.I,
    abort: p_i.Abort<M3_.E>,
    parameters: {
        readonly 'tab size': M3_.P.tab_size
    },
) => M3_.O
}

import * as v_deserialize from "astn-core/modules/deserialization/schemas/parse_tree/refiners/list_of_characters"

import * as v_unmarshall from "./astn_parse_tree.js"

export const M3: declarations.M3_ = ($, abort, $p) => v_unmarshall.M3(
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
