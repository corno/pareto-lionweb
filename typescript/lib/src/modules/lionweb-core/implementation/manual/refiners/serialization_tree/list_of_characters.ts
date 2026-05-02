import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_loc from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"
import * as d_out from "../../../../../../interface/generated/liana/schemas/serialization_tree/data"
import * as d_function from "../../../../interface/to_be_generated/deserialize_serialization_tree"
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

//dependencies
import * as r_serialization_tree_from_serialization_chunk from "./serialization_chunk"
import * as r_serialization_chunk_from_parse_tree from "../serialization_chunk/astn_parse_tree"
import * as r_astn_parse_tree_from_list_of_characters from "astn-core/dist/implementation/manual/refiners/parse_tree/list_of_characters"

export type Serialization_Tree = _pi.Refiner_With_Parameter<
    d_out.Serialization_Tree,
    d_function.Error,
    d_in.List_of_Characters,
    d_function.Parameter
>

export const Serialization_Tree: Serialization_Tree = ($, abort, $p) => r_serialization_tree_from_serialization_chunk.Serialization_Tree(
    r_serialization_chunk_from_parse_tree.Serialization_Chunk(
        r_astn_parse_tree_from_list_of_characters.Document(
            $,
            ($) => abort(['deserialize astn parse tree', $]),
            $p
        ).content,
        ($) => abort(['unmarshall serialization chunk', $])
    ),
    ($) => abort(['tree from chunk', $])
)