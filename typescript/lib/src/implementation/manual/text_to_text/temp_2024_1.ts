import * as p_ri from 'pareto-core/dist/interface/refiner'
import p_change_context from 'pareto-core/dist/implementation/specials/change_context'

//data types
import * as d_loc from "pareto-resources/dist/interface/generated/liana/schemas/list_of_characters/data"
import * as d_function from "../../../interface/data/processing"
import * as d_out from "../../../interface/generated/liana/schemas/lioncore/data"

//dependencies
import * as r_serialization_tree_from_list_of_characters from "../../../modules/lionweb-core/implementation/manual/refiners/serialization_tree/list_of_characters"
import * as r_lion_core_from_serialization_tree from "../refiners/LionCore-M3-2024-1/serialization_tree"


export type Signature = p_ri.Refiner_With_Parameter<
    d_out.M3,
    d_function.Error,
    d_loc.List_of_Characters,
    d_function.Parameter
>

export const $$x: Signature = ($, abort, $p) => p_change_context(
    r_serialization_tree_from_list_of_characters.Serialization_Tree(
        $,
        ($) => abort(['serialization tree', $]),
        $p
    ),
    ($) => p_change_context(
        r_lion_core_from_serialization_tree.M3(
            $,
            ($) => abort(['lioncore', $]),
            {
                'write source': false
            },
        ),
        ($) => $
    )
)