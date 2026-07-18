import * as p_ from 'pareto-core/implementation/refiner'

//schemas
import type * as s_in from "../../../schemas/list_of_characters.js"
import type * as s_error from "../../../../tree_node_unmarshalling/schemas/document_deserialization.js"
import type * as s_out from "../../../schemas/lioncore.js"
import type * as s_parameters from "../../../schemas/deserialization.js"

//dependencies
import * as t_from_tree from "./serialization_tree.js"
import * as t_tree_from_list_of_characters from "../../../../tree_deserialization/implementation/refiners/serialization_tree/list_of_characters.js"

export const M3: p_.Refiner_With_Parameter<
    s_out.M3,
    s_error.Error,
    s_in.List_Of_Characters,
    s_parameters.Parameters
> = ($, abort, $p) => t_from_tree.M3(
    t_tree_from_list_of_characters.Serialization_Tree(
        $,
        ($) => abort(['tree deserialization', $]),
        $p['document deserialization']
    ),
    ($) => abort(['construction from tree', $]),
    $p.construction,
)
