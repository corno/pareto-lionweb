import * as s_document_deserialization from  "../../tree_node_unmarshalling/schemas/document_deserialization.js"
import * as s_construction from "./construction.js"

export type Error = s_document_deserialization.Error

export type Parameters = {
    'document deserialization': s_document_deserialization.Parameters
    'construction': s_construction.M3_Parameters
}

