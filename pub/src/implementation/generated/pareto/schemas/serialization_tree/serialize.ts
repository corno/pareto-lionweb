import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_marshall from "./marshall"
import * as _i_serialize from "../../generic/serialize"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/serialization_tree/serialize"


export const Node: _i_signatures._T_Node = ($, $p) => _i_serialize.Document(
    _i_marshall.Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Serialization_Chunk: _i_signatures._T_Serialization_Chunk = ($, $p) => _i_serialize.Document(
    _i_marshall.Serialization_Chunk(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Targets: _i_signatures._T_Targets = ($, $p) => _i_serialize.Document(
    _i_marshall.Targets(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
