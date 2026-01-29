import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'
import { _p_cc } from 'pareto-core/dist/change_context'

import * as d_m3 from "../../../interface/generated/liana/schemas/lioncore/data"

import * as r_sf_to_tree from "../schemas/serialization_tree/refiners/serialization_chunk"
import * as r_tree from "../schemas/lioncore/refiners/2024_1_tree"

// import * as m_x from "../../generated/liana/schemas/lioncore/marshall"

// import * as serialize from "../../generated/liana/generic/serialize"

import { create_context, Unmarshall_Error } from "../../temp_context"
import { temp_json_unmarshall_should_be_done_extenally } from "../../temp/unmarshall_json/unmarshall"


const temp_serialize_should_be_generated = (
    m3: d_m3.M3,

// ) => serialize.Document(
//     m_x.M3(
//         m3,
//         $p
//     ),
// )
) => _pdev.implement_me("LW2024")

export type Some_Error =
    | ['deserialization error', r_sf_to_tree.Deserialization_Error]
    | ['unmarshalling error', Unmarshall_Error]

export const $$: _pi.Text_Deserializer<Some_Error> = ($, abort) => _p_cc(
    r_sf_to_tree.Serialization_Chunk(
        temp_json_unmarshall_should_be_done_extenally($),
        ($) => abort(['deserialization error', $])
    ),
    ($) => _p_cc(
        r_tree.M3(
            {
                $: $,
                'write id': false
            },
            create_context(($) => abort(['unmarshalling error', $]),
            )
        ),
        ($) => temp_serialize_should_be_generated(
            $,
        )
    )
)