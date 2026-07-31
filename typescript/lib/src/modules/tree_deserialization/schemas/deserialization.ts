import type * as s_chunk_deserialization from "pareto-json/modules/deserialization/schemas/deserialization/schema"
import type * as s_construction_from_chunk from "./construction_from_chunk.js"

export type Error =
    | ['chunk deserialization', s_chunk_deserialization.Error]
    | ['construction from chunk', s_construction_from_chunk.Error]

export type Parameter = s_chunk_deserialization.Parameters