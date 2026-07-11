
import * as p_ from 'pareto-core/implementation/transformer'

import type * as interface_ from "../../../declarations/transformers/processing/location.js"


//data types
import type * as s_out from "astn-core/interface/data/location"

//dependencies
import * as t_deserialize_parse_tree_to_location from "astn-core/implementation/transformers/deserialize_parse_tree/location"

export const Error: interface_.Error = ($) => p_.from.state($).decide(
    ($): s_out.Possible_Range => {
        switch ($[0]) {
            case 'serialization tree': return p_.option($, ($) => p_.from.state($).decide(
                ($): s_out.Possible_Range => {
                    switch ($[0]) {
                        case 'tree from chunk': return p_.option($, ($) => ['range', $.range])
                        case 'unmarshall serialization chunk': return p_.option($, ($) => p_.from.state($).decide(
                            ($): s_out.Possible_Range => {
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