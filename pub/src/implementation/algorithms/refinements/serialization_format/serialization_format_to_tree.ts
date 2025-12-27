import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d_in from "../../../../interface/generated/pareto/schemas/serialization_chunk/data_types/source"
import * as d_out from "../../../../interface/generated/pareto/schemas/serialization_tree/data_types/target"

const list_to_dictionary = <T>($: _et.List<_et.Key_Value_Pair<T>>): _et.Optional_Value<_et.Dictionary<T>> => {
    const seenKeys: { [key: string]: null } = {}
    let foundClash: boolean = false
    const result = _ea.deprecated_build_dictionary<T>(($i) => {
        $.__for_each(($) => {
            if (seenKeys[$.key] !== undefined) {
                foundClash = true
            }
            seenKeys[$.key] = null
            $i['add entry']($.key, $.value)
        })
    })
    return foundClash ? _ea.not_set() : _ea.set(result)
}

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
    abort: _ea.Abort<Deserialization_Error>
): d_out.Serialization_Chunk => {
    const root_node_id = expect_exactly_one_element(
        $p.chunk.nodes.filter<d_in.Serialization_Chunk.nodes.L>(($ => $.parent.is_set()
            ? _ea.not_set()
            : _ea.set($)
        ))
    ).transform(
        ($) => {
            return $
        },
        () => abort(['could not determine root node', null]),
    ).id
    const nodes = list_to_dictionary($p.chunk.nodes.map(($) => ({
        'key': $.id,
        'value': $,
    }))).transform(
        ($) => $,
        () => abort(['clashing node IDs', null]),
    )
    return {
        'serializationFormatVersion': $p.chunk.serializationFormatVersion,
        'languages': $p.chunk.languages,
        'root node id': root_node_id,
        'node tree': Node(
            {
                'nodes': nodes,
                'current node': nodes.get_entry(root_node_id).transform(
                    ($) => $,
                    () => abort(['could not determine root node', null]),
                ),
            },
            abort,
        )
    }
}

const Node = (
    $p: {
        'nodes': _et.Dictionary<d_in.Serialization_Chunk.nodes.L>,
        'current node': d_in.Serialization_Chunk.nodes.L,
    },
    abort: _ea.Abort<Deserialization_Error>
): d_out.Node => {
    return {
        'classifier': make_metapointer_key($p['current node'].classifier),
        'properties': list_to_dictionary($p['current node'].properties.map(($) => ({
            'key': make_metapointer_key($.property),
            'value': $.value,
        }))).transform(
            ($) => $,
            () => abort(['clashing property keys', null]),
        ),
        'containments': list_to_dictionary($p['current node'].containments.map(($) => ({
            'key': make_metapointer_key($.containment),
            'value': list_to_dictionary($.children.map(($) => {
                return {
                    'key': $,
                    'value': Node(
                        {
                            'nodes': $p.nodes,
                            'current node': $p.nodes.get_entry($).transform(
                                ($) => $,
                                () => abort(['child node not found', $]),
                            ),
                        },
                        abort,
                    ),
                }
            })).transform(
                ($) => $,
                () => abort(['clashing child node IDs', null]),
            ),
        }))).transform(
            ($) => $,
            () => abort(['clashing containment keys', null]),
        ),
        'references': list_to_dictionary($p['current node'].references.map(($) => ({
            'key': make_metapointer_key($.reference),
            'value': $.targets,
        }))).transform(
            ($) => $,
            () => abort(['clashing reference keys', null]),
        ),
        'annotations': $p['current node'].annotations,
    }
}