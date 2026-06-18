
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_in from "../../../../interface/data/processing"
import * as d_out from "astn-core/dist/interface/generated/liana/schemas/location/data"

//dependencies
import * as t_deserialize_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/deserialize_parse_tree/location"

export const Error: p_i.Transformer<d_in.Error, d_out.Possible_Range> = ($) => p_.from.state($).decide(($): d_out.Possible_Range => {
    switch ($[0]) {
        case 'serialization tree': return p_.ss($, ($) => p_.from.state($).decide(($): d_out.Possible_Range => {
            switch ($[0]) {
                case 'tree from chunk': return p_.ss($, ($) => ['range', $.range])
                case 'unmarshall serialization chunk': return p_.ss($, ($) => p_.from.state($).decide(($): d_out.Possible_Range => {
                    switch ($[0]) {
                        case 'deserialize': return p_.ss($, ($) => p_.from.state($).decide(($) => {
                            switch ($[0]) {
                                case 'deserialize astn parse tree': return p_.ss($, ($) => t_deserialize_parse_tree_to_location.Error($))
                                case 'jsonify': return p_.ss($, ($) => ['range', $.range])
                                default: return p_.au($[0])
                            }
                        }))
                        case 'unmarshall': return p_.ss($, ($) => ['range', $.range])
                        default: return p_.au($[0])
                    }
                }))
                default: return p_.au($[0])
            }
        }))
        case 'lioncore': return p_.ss($, ($) => ['range', $.node.range])
        default: return p_.au($[0])
    }
})