
import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_in from "../../../../interface/to_be_generated/processing"
import * as d_out from "astn-core/dist/interface/generated/liana/schemas/location/data"
import * as d_unmarshall_serialization_tree from "../../../../modules/lionweb-core/interface/to_be_generated/lion_core_from_serialization_tree"
import * as d_function_loc from "astn-core/dist/interface/to_be_generated/location_to_fountain_pen"

//dependencies
import * as t_deserialize_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/deserialize_parse_tree/location"
import * as t_astn_unmarshall_to_location from "astn-core/dist/implementation/manual/transformers/unmarshall/location"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"



export const Error: _pi.Transformer<d_in.Error, d_out.Possible_Range> = ($) => _p.decide.state($, ($): d_out.Possible_Range => {
    switch ($[0]) {
        case 'deserialization error': return _p.ss($, ($) => _p.decide.state($, ($): d_out.Possible_Range => {
            switch ($[0]) {
                case 'deserialize astn parse tree': return _p.ss($, ($) => t_deserialize_parse_tree_to_location.Error($))
                case 'tree from chunk': return _p.ss($, ($) => ['range', $.range])
                case 'unmarshall serialization chunk': return _p.ss($, ($) => _p.decide.state($, ($): d_out.Possible_Range => {
                    switch ($[0]) {
                        case 'astn': return _p.ss($, ($) => ['range', t_astn_unmarshall_to_location.Error($)])
                        case 'json': return _p.ss($, ($) => ['range', $.range])
                        default: return _p.au($[0])
                    }
                }))
                default: return _p.au($[0])
            }
        }))
        case 'unmarshalling error': return _p.ss($, ($) => ['range', $.node.range])
        default: return _p.au($[0])
    }
})