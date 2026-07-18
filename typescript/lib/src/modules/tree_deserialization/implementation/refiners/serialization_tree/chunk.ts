import * as p_ from 'pareto-core/implementation/refiner'
import * as p_temp from 'pareto-core/implementation/transformer'
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'
import type * as p_i from 'pareto-core/interface/refiner'

import type * as s_in from "../../../../chunk.to_be_generated/schemas/chunk.js"
import type * as s_function from "../../../schemas/construction_from_chunk.js"
import type * as s_out from "../../../schemas/tree.js"

export const Meta_Pointer = ($: s_in.Meta_Pointer): string => {
    return `${$.language}:${$.version}:${$.key}`
}


export const Serialization_Tree: p_i.Refiner<
    s_out.Serialization_Tree,
    s_function.Error,
    s_in.Serialization_Chunk
> = (
    $,
    abort
) => {
        const chunk = $
        const nodes_without_parent = p_temp.from.list($.nodes).map_optionally(
            ($) => p_temp.from.optional($.parent).decide(
                () => p_.literal.not_set<s_in.Serialization_Chunk.nodes.L>(),
                () => p_.literal.set($)
            )

        )
        if (p_temp.from.list(nodes_without_parent).amount_of_items() > 1) {
            return abort({
                'range': chunk.range,
                'type': ['could not determine root node', null]
            })
        }
        return p_change_context(
            p_.from.optional(nodes_without_parent.__deprecated_get_possible_item_at(0)).decide(
                ($): s_in.Serialization_Chunk.nodes.L => $,
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
                        'nodes': p_.from.list(chunk.nodes).convert_to_dictionary(
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
    s_out.Node,
    s_function.Error,
    s_in.Serialization_Chunk.nodes.L,
    s_function.Node_Parameters
> = (
    $,
    abort,
    $p,
): s_out.Node => {
        const node = $
        return {
            'range': $.range,
            'classifier': Meta_Pointer($.classifier),
            'properties': p_.from.list($.properties).convert_to_dictionary(
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
            'containments': p_.from.list($.containments).convert_to_dictionary(
                ($) => Meta_Pointer($.containment),
                ($) => p_.from.list($.children).convert_to_dictionary(
                    ($) => $,
                    ($) => Node(
                        p_.from.dictionary($p.nodes).get_entry(
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
            'references': p_.from.list($.references).convert_to_dictionary(
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