import * as _p from 'pareto-core-refiner'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/serialization_chunk/data"
import * as d_out from "../../../../../interface/generated/pareto/schemas/serialization_tree/data"


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
        _p.list.filter(
            $p.chunk.nodes,
            ($ => $.parent.__is_set()
                ? _p.optional.not_set<d_in.Serialization_Chunk.nodes.L>()
                : _p.optional.set($)
            )
        )
    ).__decide(
        ($) => $,
        () => abort(['could not determine root node', null]),
    )

    const nodes = _p.dictionary.from_list(
        $p.chunk.nodes,
        ($) => $.id,
        ($) => $,
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
        'properties': _p.dictionary.from_list(
            $p['current node'].properties,
            ($) => make_metapointer_key($.property),
            ($) => $.value,
            () => abort(['clashing property keys', null]),
        ),
        'containments': _p.dictionary.from_list(
            $p['current node'].containments,
            ($) => make_metapointer_key($.containment),
            ($) => _p.dictionary.from_list(
                $.children,
                ($) => $,
                ($) => Node(
                    {
                        'nodes': $p.nodes,
                        'current node': $p.nodes.__get_entry(
                            $,
                            () => abort(['child node not found', $]),
                        ),
                    },
                    abort,
                ),
                () => abort(['clashing child node IDs', null]),
            ),
            () => abort(['clashing containment keys', null]),
        ),
        'references': _p.dictionary.from_list(
            $p['current node'].references,
            ($) => make_metapointer_key($.reference),
            ($) => $.targets,
            () => abort(['clashing reference keys', null]),
        ),
        'annotations': $p['current node'].annotations,
    }
}