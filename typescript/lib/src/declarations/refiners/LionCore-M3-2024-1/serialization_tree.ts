
import type * as p_ from 'pareto-core/interface/refiner'

//data types
import type * as d_in from "../../../interface/schemas/serialization_tree.js"
import type * as d_out from "../../../submodules/lioncore/interface/schemas/unconstrained.js"
import type * as d_out_generic from "../../../submodules/generic/interface/schemas/unconstrained.js"
import type * as d_function from "../../../submodules/lionweb-core/interface/schemas/lion_core_from_serialization_tree.js"


export type ID = p_.Refiner_With_Parameter<
    d_out_generic.ID,
    d_function.Error,
    d_in.Node,
    {
        'id': string,
        'write source': boolean,
    }
>

export type M3 = p_.Refiner_With_Parameter<
    d_out.M3,
    d_function.Error,
    d_in.Serialization_Tree,
    {
        'write source': boolean
    }
>

