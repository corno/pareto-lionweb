import type * as s_in from "../../../../../interface/schemas/serialization_chunk.js"
import type * as s_out from "pareto-fountain-pen/interface/data/prose"

//dependencies
import * as t_json_to_prose_block from "pareto-json/implementation/transformers/json_with_guaranteed_unique_keys/prose"
import * as t_lionweb_to_json from "./json.js"


export const Serialization_Chunk = ($: s_in.Serialization_Chunk): s_out.Paragraph => t_json_to_prose_block.Document(t_lionweb_to_json.Serialization_Chunk($))