
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_in from "../schema.js"

import * as i_out from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/schema"

export namespace M3_ {

    export type I = i_in.M3

    export type O = i_out.Paragraph

    export namespace P {

    }

}


namespace declarations {
    export type M3_ = (
        context: M3_.I,
    ) => M3_.O
}

import * as v_serialize from "astn-core/modules/serialization/schemas/sealed_target/transformers/paragraph"

import * as v_marshall from "./astn_sealed_target.js"

export const M3: declarations.M3_ = ($) => v_serialize.Document(
    v_marshall.M3(
        $,
    ),
)
