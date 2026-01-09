import * as _p from 'pareto-core-serializer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/lioncore/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const ID: _i_signatures._T_ID = ($, $p) => _i_serialize.Document(
    _i_marshall.ID(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Raw_Reference: _i_signatures._T_Raw_Reference = ($, $p) => _i_serialize.Document(
    _i_marshall.Raw_Reference(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const M3: _i_signatures._T_M3 = ($, $p) => _i_serialize.Document(
    _i_marshall.M3(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
