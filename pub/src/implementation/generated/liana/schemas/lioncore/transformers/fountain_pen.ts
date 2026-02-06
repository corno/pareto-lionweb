    
    import * as _p from 'pareto-core/dist/expression'
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lioncore/serialize"
    
    import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/transformers/fountain_pen"
    
    import * as v_marshall from "./astn_sealed_target"
    
    export const M3: t_signatures.M3 = ($) => v_serialize.Document(
        v_marshall.M3(
            $,
        ),
    )
    
    export const ID: t_signatures.ID = ($) => v_serialize.Document(
        v_marshall.ID(
            $,
        ),
    )
    
    export const Raw_Reference: t_signatures.Raw_Reference = ($) => v_serialize.Document(
        v_marshall.Raw_Reference(
            $,
        ),
    )
