import * as p_ from 'pareto-core/interface/schema'

import type * as s_tree from "../../tree_deserialization/schemas/tree.js"

export type Error = {
    'node': s_tree.Node
    'type':
    | ['missing content', {
        'type':
        | ['containment', null]
        | ['property', null]
        | ['reference', null]
        'id': string
    }]
    | ['too many feature elements', null]
    | ['missing feature element', null]
}