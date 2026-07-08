import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../generated/liana/schemas/lioncore/data.js"
import type * as d_out from "pareto-graphviz/interface/generated/liana/schemas/high_level_simple/data"


export type M3 = p_.Transformer<
    d_in.M3,
    d_out.Graph
>

