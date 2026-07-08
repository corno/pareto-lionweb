import type * as p_i from 'pareto-core/interface/transformer'
import * as p_ from 'pareto-core/implementation/transformer'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

//data types
import type * as d_in from "../../../generated/liana/schemas/lioncore/data.js"
import type * as d_out from "pareto-graphviz/interface/generated/liana/schemas/high_level_simple/data"
import type * as d_out_attributes from "pareto-graphviz/interface/generated/liana/schemas/attributes/data"

export namespace interface_ {
    export type M3 = p_i.Transformer<
        d_in.M3,
        d_out.Graph
    >
}
