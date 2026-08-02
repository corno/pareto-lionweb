
//schemas
import type * as s_construction_from_tree from "../document_construction/schema.js"
import type * as s_tree_deserialization from "../../../tree_deserialization/schemas/deserialization/schema.js"


export type Error =
    | ['tree deserialization', s_tree_deserialization.Error]
    | ['construction from tree', s_construction_from_tree.Error]

export type Parameters = s_tree_deserialization.Parameter


