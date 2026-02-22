import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as d_in from "../../../../../../interface/generated/liana/schemas/serialization_chunk/data"
import * as d_out from "../../../../../../interface/generated/liana/schemas/serialization_tree/data"
import * as d_function from "../../../../interface/to_be_generated/tree_from_chunk"
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'


export const Meta_Pointer = ($: d_in.Meta_Pointer): string => {
    return `${$.language}:${$.version}:${$.key}`
}


export const Serialization_Tree = (
    $: d_in.Serialization_Chunk,
    abort: _pi.Abort<d_function.Error>
): d_out.Serialization_Tree => {
    const chunk = $
    const nodes_without_parent = _p.list.from.list(
        $.nodes,
    ).filter(
        ($) => _p.decide.boolean(
            _p.boolean.from.optional($.parent).is_set(),
            () => _p.optional.literal.not_set<d_in.Serialization_Chunk.nodes.L>(),
            () => _p.optional.literal.set($)
        )

    )
    if (_p.number.natural.from.list(nodes_without_parent).amount_of_items() > 1) {
        return abort(['could not determine root node', null])
    }
    return _p_change_context(
        nodes_without_parent.__deprecated_get_possible_item_at(0).__decide(
            ($): d_in.Serialization_Chunk.nodes.L => $,
            () => abort(['could not determine root node', null]),
        ),
        ($) => ({
            'serializationFormatVersion': chunk.serializationFormatVersion,
            'languages': chunk.languages,
            'root node id': $.id,
            'node tree': Node(
                $,
                abort,
                {
                    'nodes': _p.dictionary.from.list(
                        chunk.nodes,
                    ).convert(
                        ($) => $.id,
                        ($) => $,
                        {
                            duplicate_id: () => abort(['node', {
                                'type': ['clashing node IDs', null],
                                'node': $,
                            }])
                        },
                    ),
                },
            )
        })
    )

}

const Node = (
    $: d_in.Serialization_Chunk.nodes.L,
    abort: _pi.Abort<d_function.Error>,
    $p: {
        'nodes': _pi.Dictionary<d_in.Serialization_Chunk.nodes.L>,
    },
): d_out.Node => {
    const node = $
    return {
        'range': $.range,
        'classifier': Meta_Pointer($.classifier),
        'properties': _p.dictionary.from.list(
            $.properties,
        ).convert(
            ($) => Meta_Pointer($.property),
            ($) => $.value,
            {
                duplicate_id: () => abort(['node', {
                    'type': ['clashing property keys', null],
                    'node': $,
                }])
            },
        ),
        'containments': _p.dictionary.from.list(
            $.containments,
        ).convert(
            ($) => Meta_Pointer($.containment),
            ($) => _p.dictionary.from.list(
                $.children,
            ).convert(
                ($) => $,
                ($) => Node(
                    $p.nodes.__get_entry_deprecated(
                        $,
                        {
                            no_such_entry: () => abort(['node', {
                                'type': ['child node not found', $],
                                'node': node
                            }]),
                        }
                    ),
                    abort,

                    {
                        'nodes': $p.nodes,
                    },
                ),
                {
                    duplicate_id: () => abort(['node', {
                        'type': ['clashing child node IDs', null],
                        'node': node
                    }]),
                }
            ),
            {
                duplicate_id: () => abort(['node', {
                    'type': ['clashing containment keys', null],
                    'node': node
                }])
            },
        ),
        'references': _p.dictionary.from.list(
            $.references,
        ).convert(
            ($) => Meta_Pointer($.reference),
            ($) => $.targets,
            {
                duplicate_id: () => abort(['node', {
                    'type': ['clashing reference keys', null],
                    'node': node
                }])
            },
        ),
        'annotations': $.annotations,
    }
}