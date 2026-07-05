import * as p_i from 'pareto-core/interface/refiner'

//data types
import * as d_out from "../../../../../../interface/generated/liana/schemas/serialization_tree/data.js"
import * as d_function from "../../../../interface/data/deserialize_serialization_tree.js"
import * as d_in from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"

//dependencies
import * as r_serialization_tree_from_serialization_chunk from "./serialization_chunk.js"
import * as r_serialization_chunk_from_list_of_characters from "../../../to_be_generated/refiners/serialization_chunk/list_of_characters.js"

export type Serialization_Tree = p_i.Refiner_With_Parameter<
    d_out.Serialization_Tree,
    d_function.Error,
    d_in.List_of_Characters,
    d_function.Parameter
>

export const Serialization_Tree: Serialization_Tree = ($, abort, $p) => r_serialization_tree_from_serialization_chunk.Serialization_Tree(
    r_serialization_chunk_from_list_of_characters.Serialization_Chunk(
        $,
        ($) => abort(['unmarshall serialization chunk', $]),
        $p
    ),
    ($) => abort(['tree from chunk', $])
)