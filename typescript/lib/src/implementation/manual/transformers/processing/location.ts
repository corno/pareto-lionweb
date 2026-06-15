
import * as pt from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_in from "../../../../interface/to_be_generated/processing"
import * as d_out from "astn-core/dist/interface/generated/liana/schemas/location/data"

//dependencies
import * as t_deserialize_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/deserialize_parse_tree/location"

export const Error: p_i.Transformer<d_in.Error, d_out.Possible_Range> = ($) => pt.decide.state($, ($): d_out.Possible_Range => {
    switch ($[0]) {
        case 'serialization tree': return pt.ss($, ($) => pt.decide.state($, ($): d_out.Possible_Range => {
            switch ($[0]) {
                case 'tree from chunk': return pt.ss($, ($) => ['range', $.range])
                case 'unmarshall serialization chunk': return pt.ss($, ($) => pt.decide.state($, ($): d_out.Possible_Range => {
                    switch ($[0]) {
                        case 'deserialize': return pt.ss($, ($) => pt.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'deserialize astn parse tree': return pt.ss($, ($) => t_deserialize_parse_tree_to_location.Error($))
                                case 'jsonify': return pt.ss($, ($) => ['range', $.range])
                                default: return pt.au($[0])
                            }
                        }))
                        case 'unmarshall': return pt.ss($, ($) => ['range', $.range])
                        default: return pt.au($[0])
                    }
                }))
                default: return pt.au($[0])
            }
        }))
        case 'lioncore': return pt.ss($, ($) => ['range', $.node.range])
        default: return pt.au($[0])
    }
})