import type * as p_ from 'pareto-core/interface/transformer'

//schemas
import type * as s_in from "../../../submodules/lioncore/interface/schemas/unconstrained.js"
import type * as s_out from "pareto-graphviz/interface/data/high_level_simple"


export type M3 = p_.Transformer<
    s_in.M3,
    s_out.Graph
>

