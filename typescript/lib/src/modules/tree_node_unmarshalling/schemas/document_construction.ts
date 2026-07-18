
import type * as s_tree from "../../tree_deserialization/schemas/tree.js"
import type * as s_unexpected_content from "./unexpected_content.js"
import type * as s_value_unmarshalling from "./node_unmarshalling.js"

export type Error =
    | ['node unmarshalling', s_value_unmarshalling.Error]
    | ['unexpected content', s_unexpected_content.Error]
    | ['unknown option', {
        'node': s_tree.Node
        'option name': string
        'state name': string
    }]
    | ['expected single element', {

        'node': s_tree.Node
        'name': string
    }]