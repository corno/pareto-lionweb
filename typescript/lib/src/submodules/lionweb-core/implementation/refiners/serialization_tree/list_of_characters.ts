import type * as p_i from 'pareto-core/interface/refiner'

//schemas
import type * as s_function from "../../../interface/schemas/deserialize_serialization_tree.js"
import type * as s_in from "../../../interface/schemas/list_of_characters.js"

import type * as s_out from "../../../../../../interface/schemas/serialization_tree.js"
namespace interface_ {
    export type Serialization_Tree = p_i.Refiner_With_Parameter<
        s_out.Serialization_Tree,
        s_function.Error,
        s_in.List_Of_Characters,
        s_function.Parameter
    >
}

//dependencies
import * as r_serialization_tree_from_serialization_chunk from "./serialization_chunk.js"
import * as r_serialization_chunk_from_list_of_characters from "../../to_be_generated/refiners/serialization_chunk/list_of_characters.js"

export const Serialization_Tree: interface_.Serialization_Tree = ($, abort, $p) => r_serialization_tree_from_serialization_chunk.Serialization_Tree(
    r_serialization_chunk_from_list_of_characters.Serialization_Chunk(
        $,
        ($) => abort(['unmarshall serialization chunk', $]),
        $p
    ),
    ($) => abort(['tree from chunk', $])
)