

import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as s_in from "../../../interface/schemas/processing.js"
import type * as s_out from "pareto-fountain-pen/interface/data/prose"
import type * as s_unmarshall_serialization_tree from "../../../submodules/lionweb-core/interface/schemas/lion_core_from_serialization_tree.js"


export type Error = p_.Transformer<
    s_in.Error,
    s_out.Phrase
>

