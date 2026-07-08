
import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../../interface/data/processing.js"
import type * as d_out from "astn-core/interface/generated/liana/schemas/location/data"

export namespace interface_ {
    export type Error = p_i.Transformer<
        d_in.Error,
        d_out.Possible_Range
    >
}

//dependencies
import * as t_deserialize_parse_tree_to_location from "astn-core/implementation/manual/transformers/deserialize_parse_tree/location"

export const Error: interface_.Error = ($) => p_.from.state($).decide(
    ($): d_out.Possible_Range => {
        switch ($[0]) {
            case 'serialization tree': return p_.option($, ($) => p_.from.state($).decide(
                ($): d_out.Possible_Range => {
                    switch ($[0]) {
                        case 'tree from chunk': return p_.option($, ($) => ['range', $.range])
                        case 'unmarshall serialization chunk': return p_.option($, ($) => p_.from.state($).decide(
                            ($): d_out.Possible_Range => {
                                switch ($[0]) {
                                    case 'deserialize': return p_.option($, ($) => p_.from.state($).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'deserialize astn parse tree': return p_.option($, ($) => t_deserialize_parse_tree_to_location.Error($))
                                                case 'jsonify': return p_.option($, ($) => ['range', $.range])
                                                default: return p_.exhaustive($[0])
                                            }
                                        }))
                                    case 'unmarshall': return p_.option($, ($) => ['range', $.range])
                                    default: return p_.exhaustive($[0])
                                }
                            }))
                        default: return p_.exhaustive($[0])
                    }
                }
            ))
            case 'lioncore': return p_.option($, ($) => ['range', $.node.range])
            default: return p_.exhaustive($[0])
        }
    }
)