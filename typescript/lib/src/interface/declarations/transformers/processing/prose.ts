
import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../data/processing.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"
import type * as d_unmarshall_serialization_tree from "../../../../modules/lionweb-core/interface/data/lion_core_from_serialization_tree.js"

export namespace interface_ {
    export type Error = p_i.Transformer<
        d_in.Error,
        d_out.Phrase
    >
}
