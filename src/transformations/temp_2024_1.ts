import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _erd from 'exupery-core-rawdata'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'

import * as d_serialization_format from "../types/LionWeb_serialization_format" 

import * as unmarshall from "../unmarshall"

import * as t_sf_to_tree from "./serialization_format_to_tree"
import * as t_tree from "./2024_1_tree_to_M3"

import * as m_x from "../generated/implementation/schemas/m3/marshall"

import * as temp_astn_to_fp from "./temp_astn_target_to_fountain_pen_block"

import { $$ as expect_exactly_one_element } from "pareto-standard-operations/dist/impure/list/expect_exactly_one_element"
import { $$ as filter } from "pareto-standard-operations/dist/pure/list/filter"

export const $$ = (
    file_content: string,

) => {

    const raw = _erd.parse_json(file_content)
    const sysml = unmarshall.Serialization_Chunk(raw)

    const root = expect_exactly_one_element(
        filter<d_serialization_format.Serialization_Chunk.Node>(
            sysml.nodes.map(($ => $.parent.transform(
                () => _ea.not_set(),
                () => _ea.set($)
            )))
        )
    ).transform(
        ($) => {
            return $
        },
        () => _ea.panic("Could not determine root node")
    )

    const tree = t_sf_to_tree.Serialization_Chunk({
        'chunk': sysml,
        'root node id': root.id,
    })

    const m3 = t_tree.M3(
        tree
    )

    const value = m_x.M3(
        m3,
        {
            'value serializers': {
                'boolean': ($) => $ ? "true" : "false",
                'default number': () => "FIXME",
                'custom numbers': null
                // 'string': () => "FIXME", 
            }
        }
    )

    return temp_astn_to_fp.Document(
        value,
        {}
    )
}
