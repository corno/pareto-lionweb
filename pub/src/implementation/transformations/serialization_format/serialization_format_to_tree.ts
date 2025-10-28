import * as _et from "exupery-core-types"
import * as _ea from "exupery-core-alg"

import * as d_in from "../../../temp/types/LionWeb_serialization_format"
import * as d_out from "../../../temp/types/LionWeb_tree"

import { $$ as list_to_dictionary } from "pareto-standard-operations/dist/implementation/operations/impure/list/to_dictionary_if_no_clashes"


export const make_metapointer_key = (mp: d_in.Meta_Pointer): string => {
    return `${mp.language}:${mp.version}:${mp.key}`
}

export const Serialization_Chunk = (
    $p: {
        'chunk': d_in.Serialization_Chunk,
        'root node id': string
    }
): d_out.Serialization_Chunk => {
    const nodes = list_to_dictionary($p.chunk.nodes.map(($) => ({
        'key': $.id,
        'value': $,
    }))).transform(
        ($) => $,
        () => _ea.panic("clashing node IDs"),
    )
    return {
        'serializationFormatVersion': $p.chunk.serializationFormatVersion,
        'languages': $p.chunk.languages,
        'root node id': $p['root node id'],
        'node tree': Node(
            {
                'nodes': nodes,
                'current node': nodes.__get_entry($p['root node id']).transform(
                    ($) => $,
                    () => _ea.panic("root node not found"),
                ),
            }
        )
    }
}

const Node = (
    $p: {
        'nodes': _et.Dictionary<d_in.Serialization_Chunk.Node>,
        'current node': d_in.Serialization_Chunk.Node,
    }
): d_out.Node => {
    return {
        'classifier': make_metapointer_key($p['current node'].classifier),
        'properties': list_to_dictionary($p['current node'].properties.map(($) => ({
            'key': make_metapointer_key($.property),
            'value': $.value,
        }))).transform(
            ($) => $,
            () => _ea.panic("clashing property keys"),
        ),
        'containments': list_to_dictionary($p['current node'].containments.map(($) => ({
            'key': make_metapointer_key($.containment),
            'value': list_to_dictionary($.children.map(($) => {
                return {
                    'key': $,
                    'value': Node(
                        {
                            'nodes': $p.nodes,
                            'current node': $p.nodes.__get_entry($).transform(
                                ($) => $,
                                () => _ea.panic(`child node not found: ${$}`),
                            ),
                        }
                    ),
                }
            })).transform(
                ($) => $,
                () => _ea.panic("clashing child node IDs"),
            ),
        }))).transform(
            ($) => $,
            () => _ea.panic("clashing containment keys"),
        ),
        'references': list_to_dictionary($p['current node'].references.map(($) => ({
            'key': make_metapointer_key($.reference),
            'value': $.targets,
        }))).transform(
            ($) => $,
            () => _ea.panic("clashing reference keys"),
        ),
        'annotations': $p['current node'].annotations,
    }
}