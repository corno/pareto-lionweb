import * as p_ from 'pareto-core/refiner'
import p_implement_me from 'pareto-core-dev/implement_me'

// schemas
import * as s_target from "../schema.js"
import * as s_source from "pareto-json/modules/deserialization/schemas/deserialized_json/schema"
import * as s_error from "pareto-json/modules/unmarshalling/schemas/json_value_unmarshalling/schema"

// refiner dependencies
import * as r_unmarshalled_from_parse_tree from "pareto-json/modules/unmarshalling/schemas/unmarshalled_json_value/refiners/deserialized_json"

export namespace declarations {
    
    export type Root = p_.Refiner<
        s_target.Root,
        s_error.Error,
        s_source.Value
    >
    
    export type Meta_Pointer = p_.Refiner<
        s_target.Meta_Pointer,
        s_error.Error,
        s_source.Value
    >
}

// implementations

export const Root: declarations.Root = (
    $,
    abort,
) => p_implement_me("OBJECT, GROUP")

export const Meta_Pointer: declarations.Meta_Pointer = (
    $,
    abort,
) => p_implement_me("OBJECT, GROUP")
