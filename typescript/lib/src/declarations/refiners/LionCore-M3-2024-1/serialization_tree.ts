
import type * as p_ from 'pareto-core/interface/refiner'

//schemas
import type * as s_in from "../../../interface/schemas/serialization_tree.js"
import type * as s_out from "../../../submodules/lioncore/interface/schemas/unconstrained.js"
import type * as s_out_generic from "../../../submodules/generic/interface/schemas/unconstrained.js"
import type * as s_function from "../../../submodules/lionweb-core/interface/schemas/lion_core_from_serialization_tree.js"


export type ID = p_.Refiner_With_Parameter<
    s_out_generic.ID,
    s_function.Error,
    s_in.Node,
    {
        'id': string,
        'write source': boolean,
    }
>

export type M3 = p_.Refiner_With_Parameter<
    s_out.M3,
    s_function.Error,
    s_in.Serialization_Tree,
    {
        'write source': boolean
    }
>

