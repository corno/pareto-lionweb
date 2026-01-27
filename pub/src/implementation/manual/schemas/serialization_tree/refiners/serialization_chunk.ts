import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/serialization_chunk/data"
import * as d_out from "../../../../../interface/generated/liana/schemas/serialization_tree/data"


export const Meta_Pointer = ($: d_in.Meta_Pointer): string => {
    return `${$.language}:${$.version}:${$.key}`
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
    $: d_in.Serialization_Chunk,
    abort: _pi.Abort<Deserialization_Error>
): d_out.Serialization_Chunk => {
    const chunk = $
    const nodes_without_parent = _p.list.filter(
        $.nodes,
        ($) => $.parent.__is_set()
            ? _p.optional.not_set<d_in.Serialization_Chunk.nodes.L>()
            : _p.optional.set($)
        
    )
    if (_p.natural.amount_of_list_items(nodes_without_parent) > 1) {
        return abort(['could not determine root node', null])
    }
    return _p.deprecated_cc(
        nodes_without_parent.__get_possible_item_at(0).__decide(
            ($): d_in.Serialization_Chunk.nodes.L => $,
            () => abort(['could not determine root node', null]),
        ),
        ($) => ({
            'serializationFormatVersion': chunk.serializationFormatVersion,
            'languages': chunk.languages,
            'root node id': $.id,
            'node tree': Node(
                {
                    'nodes': _p.dictionary.from_list(
                        chunk.nodes,
                        ($) => $.id,
                        ($) => $,
                        () => abort(['clashing node IDs', null]),
                    ),
                    'current node': $,
                },
                abort,
            )
        })
    )

}

const Node = (
    $p: {
        'nodes': _pi.Dictionary<d_in.Serialization_Chunk.nodes.L>,
        'current node': d_in.Serialization_Chunk.nodes.L,
    },
    abort: _pi.Abort<Deserialization_Error>
): d_out.Node => {
    return {
        'classifier': Meta_Pointer($p['current node'].classifier),
        'properties': _p.dictionary.from_list(
            $p['current node'].properties,
            ($) => Meta_Pointer($.property),
            ($) => $.value,
            () => abort(['clashing property keys', null]),
        ),
        'containments': _p.dictionary.from_list(
            $p['current node'].containments,
            ($) => Meta_Pointer($.containment),
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
            ($) => Meta_Pointer($.reference),
            ($) => $.targets,
            () => abort(['clashing reference keys', null]),
        ),
        'annotations': $p['current node'].annotations,
    }
}