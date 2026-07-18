import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../../chunk.to_be_generated/schemas/chunk.js"
import type * as s_out from "../../../schemas/paragraph.js"

//dependencies
import * as t_json_to_prose_block from "pareto-json/modules/serialization/implementation/transformers/with_guaranteed_unique_keys/paragraph"
import * as t_lionweb_to_json from "./json.js"


export const Serialization_Chunk: p_.Transformer<
    s_in.Serialization_Chunk,
    s_out.Paragraph
> = ($) => t_json_to_prose_block.Document(
    t_lionweb_to_json.Serialization_Chunk(
        $
    )
)