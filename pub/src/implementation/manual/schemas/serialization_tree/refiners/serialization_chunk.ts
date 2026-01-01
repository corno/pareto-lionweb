import * as _pi from 'pareto-core-interface'
import * as _p from 'pareto-core-refiner'

import * as d_in from "../../../../../interface/generated/pareto/schemas/serialization_chunk/data_types/source"
import * as d_out from "../../../../../interface/generated/pareto/schemas/serialization_tree/data_types/target"


import { $$ as expect_exactly_one_element } from "pareto-standard-operations/dist/implementation/operations/impure/list/expect_exactly_one_element"

export const make_metapointer_key = (mp: d_in.Meta_Pointer): string => {
    return `${mp.language}:${mp.version}:${mp.key}`
}

export type Deserialization_Error =
    | ['could not determine root node', null]
    | ['clashing node IDs', null]
    | ['clashing child node IDs', null]
    | ['clashing property keys', null]
    | ['child node not found', string]
    | ['clashing containment keys', null]
    | ['clashing reference keys', null]

export const Serialization_Chunk = (
    $p: {
        'chunk': d_in.Serialization_Chunk,
    },
    abort: _pi.Abort<Deserialization_Error>
): d_out.Serialization_Chunk => {
    const root_node = expect_exactly_one_element(
        $p.chunk.nodes.filter<d_in.Serialization_Chunk.nodes.L>(($ => $.parent.is_set()
            ? _p.not_set()
            : _p.set($)
        ))
    ).transform(
        ($) => $,
        () => abort(['could not determine root node', null]),
    )

    const nodes = _p.list_to_dictionary(
        $p.chunk.nodes,
        ($) => $.id,
        () => abort(['clashing node IDs', null]),
    )
    return {
        'serializationFormatVersion': $p.chunk.serializationFormatVersion,
        'languages': $p.chunk.languages,
        'root node id': root_node.id,
        'node tree': Node(
            {
                'nodes': nodes,
                'current node': root_node,
            },
            abort,
        )
    }
}

const Node = (
    $p: {
        'nodes': _pi.Dictionary<d_in.Serialization_Chunk.nodes.L>,
        'current node': d_in.Serialization_Chunk.nodes.L,
    },
    abort: _pi.Abort<Deserialization_Error>
): d_out.Node => {
    return {
        'classifier': make_metapointer_key($p['current node'].classifier),
        'properties': _p.list_to_dictionary(
            $p['current node'].properties,
            ($) => make_metapointer_key($.property),
            () => abort(['clashing property keys', null]),
        ).map(($) => $.value),
        'containments': _p.list_to_dictionary(
            $p['current node'].containments,
            ($) => make_metapointer_key($.containment),
            () => abort(['clashing containment keys', null]),
        ).map(($) => _p.list_to_dictionary(
            $.children,
            ($) => $,
            () => abort(['clashing child node IDs', null]),
        ).map(($) => Node(
            {
                'nodes': $p.nodes,
                'current node': $p.nodes.get_entry($).transform(
                    ($) => $,
                    () => abort(['child node not found', $]),
                ),
            },
            abort,
        ))),
        'references': _p.list_to_dictionary(
            $p['current node'].references,
            ($) => make_metapointer_key($.reference),
            () => abort(['clashing reference keys', null]),
        ).map(($) => $.targets),
        'annotations': $p['current node'].annotations,
    }
}