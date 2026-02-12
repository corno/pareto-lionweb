import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'
import _p_change_context from 'pareto-core/dist/_p_change_context'

//data types
import * as d_loc from "pareto-resources/dist/interface/generated/liana/schemas/list_of_characters/data"
import * as d_function from "../../../interface/to_be_generated/processing"

//dependencies
import * as r_serialization_tree_from_list_of_characters from "../../../modules/lionweb-core/implementation/manual/refiners/serialization_tree/list_of_characters"
import * as r_lion_core_from_serialization_tree from "../refiners/LionCore-M3-2024-1/serialization_tree"
import * as t_lioncore_to_fp from "../../generated/liana/schemas/lioncore/transformers/fountain_pen"
import * as t_fp_to_list_of_characters from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/list_of_characters"


export type Signature = _pi.Refiner_With_Parameter<
    d_loc.List_of_Characters,
    d_function.Error,
    d_loc.List_of_Characters,
    d_function.Parameter
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
        ($) => t_fp_to_list_of_characters.Paragraph(
            t_lioncore_to_fp.M3(
                $,
            ),
            {
                'indentation': "    ",
                'newline': "\n",
            }
        )
    )
)