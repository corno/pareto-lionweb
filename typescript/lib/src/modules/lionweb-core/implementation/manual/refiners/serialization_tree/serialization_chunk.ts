import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_temp from 'pareto-core/dist/assign'
import p_change_context from 'pareto-core/dist/implementation/specials/change_context'
import * as p_i from 'pareto-core/dist/interface/refiner'

import * as d_in from "../../../../../../interface/generated/liana/schemas/serialization_chunk/data"
import * as d_out from "../../../../../../interface/generated/liana/schemas/serialization_tree/data"
import * as d_function from "../../../../interface/data/tree_from_chunk"


export const Meta_Pointer = ($: d_in.Meta_Pointer): string => {
    return `${$.language}:${$.version}:${$.key}`
}


export const Serialization_Tree: p_i.Refiner<
    d_out.Serialization_Tree,
    d_function.Error,
    d_in.Serialization_Chunk
> = (
    $,
    abort
) => {
        const chunk = $
        const nodes_without_parent = p_temp.list.from.list(
            $.nodes,
        ).map_optionally(
            ($) => p_temp.decide.boolean(
                p_temp.boolean.from.optional($.parent).is_set(),
                () => p_.literal.not_set<d_in.Serialization_Chunk.nodes.L>(),
                () => p_.literal.set($)
            )

        )
        if (p_temp.number.from.list(nodes_without_parent).amount_of_items() > 1) {
            return abort({
                'range': chunk.range,
                'type': ['could not determine root node', null]
            })
        }
        return p_change_context(
            nodes_without_parent.__deprecated_get_possible_item_at(0).__decide(
                ($): d_in.Serialization_Chunk.nodes.L => $,
                () => abort({
                    'range': chunk.range,
                    'type': ['could not determine root node', null]
                }),
            ),
            ($) => ({
                'serializationFormatVersion': chunk.serializationFormatVersion,
                'languages': chunk.languages,
                'root node id': $.id,
                'node tree': Node(
                    $,
                    abort,
                    {
                        'nodes': p_temp.dictionary.from.list(
                            chunk.nodes,
                        ).convert(
                            ($) => $.id,
                            ($) => $,
                            {
                                duplicate_id: () => abort({
                                    'range': $.range,
                                    'type': ['node', {
                                        'type': ['clashing node IDs', null],
                                        'node': $,
                                    }]
                                })
                            },
                        ),
                    },
                )
            })
        )

    }

const Node: p_i.Refiner_With_Parameter<
    d_out.Node,
    d_function.Error,
    d_in.Serialization_Chunk.nodes.L,
    d_function.Node_Parameters
> = (
    $,
    abort,
    $p,
): d_out.Node => {
        const node = $
        return {
            'range': $.range,
            'classifier': Meta_Pointer($.classifier),
            'properties': p_temp.dictionary.from.list(
                $.properties,
            ).convert(
                ($) => Meta_Pointer($.property),
                ($) => $.value,
                {
                    duplicate_id: () => abort({
                        'range': $.range,
                        'type': ['node', {
                            'type': ['clashing property keys', null],
                            'node': $,
                        }]
                    })
                },
            ),
            'containments': p_temp.dictionary.from.list(
                $.containments,
            ).convert(
                ($) => Meta_Pointer($.containment),
                ($) => p_temp.dictionary.from.list(
                    $.children,
                ).convert(
                    ($) => $,
                    ($) => Node(
                        $p.nodes.__get_entry_deprecated(
                            $,
                            {
                                no_such_entry: () => abort({
                                    'range': node.range,
                                    'type': ['node', {
                                        'type': ['child node not found', $],
                                        'node': node
                                    }]
                                }),
                            }
                        ),
                        abort,

                        {
                            'nodes': $p.nodes,
                        },
                    ),
                    {
                        duplicate_id: () => abort({
                            'range': node.range,
                            'type': ['node', {
                                'type': ['clashing child node IDs', null],
                                'node': node
                            }]
                        }),
                    }
                ),
                {
                    duplicate_id: () => abort({
                        'range': node.range,
                        'type': ['node', {
                            'type': ['clashing containment keys', null],
                            'node': node
                        }]
                    })
                },
            ),
            'references': p_temp.dictionary.from.list(
                $.references,
            ).convert(
                ($) => Meta_Pointer($.reference),
                ($) => $.targets,
                {
                    duplicate_id: () => abort({
                        'range': node.range,
                        'type': ['node', {
                            'type': ['clashing reference keys', null],
                            'node': node
                        }]
                    })
                },
            ),
            'annotations': $.annotations,
        }
    }