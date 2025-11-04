import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _erd from 'exupery-core-rawdata'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'

import * as d_serialization_format from "../../../interface/generated/pareto/schemas/serialization_chunk/data_types/source"
import * as d_m3 from "../../../interface/generated/pareto/schemas/lioncore/data_types/source"

import * as unmarshall_json from "../../../temp/unmarshall_json/unmarshall"

import * as t_sf_to_tree from "../transformations/serialization_format/serialization_format_to_tree"
import * as t_tree from "../transformations/2023_1_tree/2023_1_tree_to_M3"

import * as m_x from "../../generated/pareto/schemas/lioncore/marshall"

import * as serialize from "../../generated/pareto/generic/serialize"

import { $$ as expect_exactly_one_element } from "pareto-standard-operations/dist/implementation/operations/impure/list/expect_exactly_one_element"
import { $$ as filter } from "pareto-standard-operations/dist/implementation/operations/pure/list/filter"

const temp_json_unmarshall_should_be_done_extenally = ($: string) => {
    return unmarshall_json.Serialization_Chunk(_erd.parse_json($))

}

const temp_serialize_should_be_generated = (
    m3: d_m3.M3,
    $p: {
        'value serializers': {
            'boolean': (value: boolean) => string,
            'default number': () => string,
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

export const $$ = (
    file_content: string,

) => {

    const serialization_chunk = temp_json_unmarshall_should_be_done_extenally(file_content)

    const m3 = t_tree.M3(
        t_sf_to_tree.Serialization_Chunk({
            'chunk': serialization_chunk,
            'root node id': expect_exactly_one_element(
                filter<d_serialization_format.Serialization_Chunk.nodes.L>(
                    serialization_chunk.nodes.map(($ => $.parent.transform(
                        () => _ea.not_set(),
                        () => _ea.set($)
                    )))
                )
            ).transform(
                ($) => {
                    return $
                },
                () => _ea.panic("Could not determine root node")
            ).id,
        }),
        {
            'write id': false
        }
    )


    return temp_serialize_should_be_generated(
        m3,
        {
            'value serializers': {
                'boolean': ($) => $ ? "true" : "false",
                'default number': () => "FIXME",
                'custom numbers': null
            }
        }
    )
}
