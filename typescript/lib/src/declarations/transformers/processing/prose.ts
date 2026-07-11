

import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../interface/data/processing.js"
import type * as d_out from "pareto-fountain-pen/interface/data/prose"
import type * as d_unmarshall_serialization_tree from "../../../submodules/lionweb-core/interface/data/lion_core_from_serialization_tree.js"


export type Error = p_.Transformer<
    d_in.Error,
    d_out.Phrase
>

