import * as p_ from 'pareto-core/implementation/refiner'
import * as p_temp from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/refiner'
import p_assert from 'pareto-core/implementation/refiner/specials/assert'
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

//data types
import type * as d_in from "../../../generated/liana/schemas/serialization_tree/data.js"
import type * as d_out from "../../../generated/liana/schemas/lioncore/data.js"
import type * as d_out_generic from "../../../generated/liana/schemas/generic/data.js"
import type * as d_function from "../../../../modules/lionweb-core/interface/data/lion_core_from_serialization_tree.js"

export namespace interface_ {
    export type ID = p_i.Refiner_With_Parameter<
        d_out_generic.ID,
        d_function.Error,
        d_in.Node,
        {
            'id': string,
            'write source': boolean,
        }
    >

    export type M3 = p_i.Refiner_With_Parameter<
        d_out.M3,
        d_function.Error,
        d_in.Serialization_Tree,
        {
            'write source': boolean
        }
    >
}
