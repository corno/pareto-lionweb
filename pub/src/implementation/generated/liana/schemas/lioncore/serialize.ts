
import * as _p from "pareto-core/dist/serializer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/lioncore/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"

export const ID: t_signatures.ID = ($) => v_serialize.Document(
    v_marshall.ID(
        $
    )
)

export const Raw_Reference: t_signatures.Raw_Reference = ($) => v_serialize.Document(
    v_marshall.Raw_Reference(
        $
    )
)

export const M3: t_signatures.M3 = ($) => v_serialize.Document(
    v_marshall.M3(
        $
    )
)
