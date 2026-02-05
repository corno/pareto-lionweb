import * as _p from 'pareto-core/dist/expression'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'
import _p_change_context from 'pareto-core/dist/_p_change_context'


import * as d_m3 from "../../../interface/generated/liana/schemas/lioncore/data"
import * as d_loc from "pareto-resources/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as r_sf_to_tree from "../schemas/serialization_tree/refiners/serialization_chunk"
import * as r_tree from "../schemas/lioncore/refiners/2023_1_tree"

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
) => _pdev.implement_me("LW2023")

export type Some_Error =
    | ['deserialization error', r_sf_to_tree.Deserialization_Error]
    | ['unmarshalling error', Unmarshall_Error]

export const $$: _pi.Refiner<d_loc.List_of_Characters, Some_Error, d_loc.List_of_Characters> = ($, abort) => {
    return _p_change_context(
        r_sf_to_tree.Serialization_Chunk(
            temp_json_unmarshall_should_be_done_extenally($),
            ($) => abort(['deserialization error', $])
        ),
        ($) => _p_change_context(
            r_tree.M3(
                $,
                {
                    'write id': false
                },
                create_context(($) => abort(['unmarshalling error', $]),
                )
            ),
            ($) => temp_serialize_should_be_generated(
                $
            )
        )
    )

}
