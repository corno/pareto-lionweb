import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'
import _p_change_context from 'pareto-core/dist/_p_change_context'

//data types
import * as d_m3 from "../../../interface/generated/liana/schemas/lioncore/data"
import * as d_loc from "pareto-resources/dist/interface/generated/liana/schemas/list_of_characters/data"
import * as d_unmarshall from "../../../modules/lionweb-core/interface/to_be_generated/unmarshall_serialization_tree"
import * as d_deserialize_serialization_tree from "../../../modules/lionweb-core/interface/to_be_generated/deserialize_serialization_tree"

//dependencies
import * as r_serialization_tree_from_list_of_characters from "../../../modules/lionweb-core/implementation/manual/refiners/serialization_tree/list_of_characters"
import * as r_lion_core_from_serialization_tree from "../refiners/LionCore-M3-2024-1/serialization_tree"


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
    | ['deserialization error', d_deserialize_serialization_tree.Error]
    | ['unmarshalling error', d_unmarshall.Error]

export type Parameter = d_deserialize_serialization_tree.Parameter

export type Signature = _pi.Refiner_With_Parameter<
    d_loc.List_of_Characters,
    Some_Error,
    d_loc.List_of_Characters,
    Parameter
>

export const $$: Signature = ($, abort, $p) => _p_change_context(
    r_serialization_tree_from_list_of_characters.Serialization_Tree(
        $,
        ($) => abort(['deserialization error', $]),
        $p
    ),
    ($) => _p_change_context(
        r_lion_core_from_serialization_tree.M3(
            $,
            ($) => abort(['unmarshalling error', $]),
            {
                'write id': false
            },
        ),
        ($) => temp_serialize_should_be_generated(
            $,
        )
    )
)