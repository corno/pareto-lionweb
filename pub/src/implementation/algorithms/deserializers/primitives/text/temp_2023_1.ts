import * as _pds from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'
import * as _pinternals from 'pareto-core-internals'


import * as d_m3 from "../../../../../interface/generated/pareto/schemas/lioncore/data_types/source"
import * as d_st from "../../../../../interface/generated/pareto/schemas/serialization_tree/data_types/source"

import * as r_sf_to_tree from "../../../refinements/serialization_format/serialization_format_to_tree"
import * as r_tree from "../../../refinements/2023_1_tree/2023_1_tree_to_M3"

import * as m_x from "../../../../generated/pareto/schemas/lioncore/marshall"

import * as serialize from "../../../../generated/pareto/generic/serialize"
import { create_context, Unmarshall_Error } from "../../../refinements/context"
import { temp_json_unmarshall_should_be_done_extenally } from "../../../../temp/unmarshall_json/unmarshall"

import { $$ as serialize_decimal } from "pareto-standard-operations/dist/implementation/serializers/primitives/integer/decimal"
import { $$ as serialize_boolean } from "pareto-standard-operations/dist/implementation/serializers/primitives/boolean/true_false"

const temp_serialize_should_be_generated = (
    m3: d_m3.M3,
    $p: {
        'value serializers': {
            'boolean': (value: boolean) => string,
            'default number': ($: number) => string,
            'custom numbers': null,
        }
    }
) => {

    return serialize.Document(
        m_x.M3(
            m3,
            $p
        ),
    )
}

export type Some_Error =
    | ['deserialization error', r_sf_to_tree.Deserialization_Error]
    | ['unmarshalling error', Unmarshall_Error]

export const $$: _pi.Refiner<string, Some_Error, string> = ($, abort) => {
    return _pinternals.cc(
        r_sf_to_tree.Serialization_Chunk(
            {
                'chunk': temp_json_unmarshall_should_be_done_extenally($),
            },
            ($) => abort(['deserialization error', $])
        ),
        ($) => _pinternals.cc(
            r_tree.M3(
                {
                    $: $,
                    'write id': false
                },
                create_context(($) => abort(['unmarshalling error', $]),
                )
            ),
            ($) => temp_serialize_should_be_generated(
                $,
                {
                    'value serializers': {
                        'boolean': ($) => serialize_boolean($),
                        'default number': ($) => serialize_decimal($),
                        'custom numbers': null
                    }
                }
            )
        )
    )

}
