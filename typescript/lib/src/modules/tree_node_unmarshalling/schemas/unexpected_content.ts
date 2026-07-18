import type * as p_ from 'pareto-core/interface/schema'

import type * as s_tree from "../../tree_deserialization/schemas/tree.js"

export type Unexpected_Content = {
    'unexpected': p_.Dictionary<null>
    'expected': p_.Dictionary<null>
}

export type Error = {
    'node': s_tree.Node
    'containments': Unexpected_Content
    'properties': Unexpected_Content
    'references': Unexpected_Content
}

export type Possible_Error = p_.Optional_Value<Error>