import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../submodules/lioncore/interface/data/unconstrained.js"
import type * as d_out from "pareto-graphviz/interface/data/high_level_simple"


export type M3 = p_.Transformer<
    d_in.M3,
    d_out.Graph
>

