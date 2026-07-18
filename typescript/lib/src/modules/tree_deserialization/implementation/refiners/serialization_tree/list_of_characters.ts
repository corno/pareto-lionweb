import type * as p_i from 'pareto-core/interface/refiner'

//schemas
import type * as s_function from "../../../schemas/deserialization.js"
import type * as s_in from "../../../schemas/list_of_characters.js"

import type * as s_out from "../../../schemas/tree.js"

namespace interface_ {
    export type Serialization_Tree = p_i.Refiner_With_Parameter<
        s_out.Serialization_Tree,
        s_function.Error,
        s_in.List_Of_Characters,
        s_function.Parameter
    >
}

//dependencies
import * as r_serialization_tree_from_serialization_chunk from "./chunk.js"
import * as r_serialization_chunk_from_list_of_characters from "../../../../chunk_deserialization.to_be_generated/implementation/refiners/serialization_chunk/list_of_characters.js"

export const Serialization_Tree: interface_.Serialization_Tree = ($, abort, $p) => r_serialization_tree_from_serialization_chunk.Serialization_Tree(
    r_serialization_chunk_from_list_of_characters.Serialization_Chunk(
        $,
        ($) => abort(['chunk deserialization', $]),
        $p
    ),
    ($) => abort(['construction from chunk', $])
)