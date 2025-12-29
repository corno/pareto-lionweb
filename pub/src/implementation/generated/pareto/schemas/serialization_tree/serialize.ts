import * as _pa from 'pareto-core-serializer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/serialization_tree/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const Targets: _i_signatures._T_Targets = ($, $p) => _i_serialize.Document(
    _i_marshall.Targets(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
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
