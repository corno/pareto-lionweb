
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "astn-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "./data"

export namespace M3_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.M3
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type M3_ = (
    context: M3_.I,
    abort: _pi.Abort<M3_.E>,
    parameters: {
        readonly 'document resource identifier': M3_.P.document_resource_identifier
        readonly 'tab size': M3_.P.tab_size
    },
) => M3_.O

export { 
    M3_ as M3, 
}
