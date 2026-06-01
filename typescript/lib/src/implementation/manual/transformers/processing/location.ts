
import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_in from "../../../../interface/to_be_generated/processing"
import * as d_out from "astn-core/dist/interface/generated/liana/schemas/location/data"

//dependencies
import * as t_deserialize_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/deserialize_parse_tree/location"

export const Error: _pi.Transformer<d_in.Error, d_out.Possible_Range> = ($) => _p.decide.state($, ($): d_out.Possible_Range => {
    switch ($[0]) {
        case 'serialization tree': return _p.ss($, ($) => _p.decide.state($, ($): d_out.Possible_Range => {
            switch ($[0]) {
                case 'tree from chunk': return _p.ss($, ($) => ['range', $.range])
                case 'unmarshall serialization chunk': return _p.ss($, ($) => _p.decide.state($, ($): d_out.Possible_Range => {
                    switch ($[0]) {
                        case 'deserialize': return _p.ss($, ($) => _p.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'deserialize astn parse tree': return _p.ss($, ($) => t_deserialize_parse_tree_to_location.Error($))
                                case 'jsonify': return _p.ss($, ($) => ['range', $.range])
                                default: return _p.au($[0])
                            }
                        }))
                        case 'unmarshall': return _p.ss($, ($) => ['range', $.range])
                        default: return _p.au($[0])
                    }
                }))
                default: return _p.au($[0])
            }
        }))
        case 'lioncore': return _p.ss($, ($) => ['range', $.node.range])
        default: return _p.au($[0])
    }
})