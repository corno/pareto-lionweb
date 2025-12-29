import * as _pa from 'pareto-core-serializer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/serialization_chunk/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const Meta_Pointer: _i_signatures._T_Meta_Pointer = ($, $p) => _i_serialize.Document(
    _i_marshall.Meta_Pointer(
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
export const Serialization_Chunk: _i_signatures._T_Serialization_Chunk = ($, $p) => _i_serialize.Document(
    _i_marshall.Serialization_Chunk(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
