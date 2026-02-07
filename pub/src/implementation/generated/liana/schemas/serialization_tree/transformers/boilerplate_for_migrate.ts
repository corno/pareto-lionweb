
import * as _p from 'pareto-core/dist/expression'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_tree/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/serialization_tree/data"

export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($) => ({
    'serializationFormatVersion': _p_change_context(
        $['serializationFormatVersion'],
        ($) => $,
    ),
    'languages': _p_change_context(
        $['languages'],
        ($) => _p.list.map(
            $,
            ($) => ({
                'key': _p_change_context(
                    $['key'],
                    ($) => $,
                ),
                'version': _p_change_context(
                    $['version'],
                    ($) => $,
                ),
            }),
        ),
    ),
    'root node id': _p_change_context(
        $['root node id'],
        ($) => $,
    ),
    'node tree': _p_change_context(
        $['node tree'],
        ($) => Node(
            $,
        ),
    ),
})

export const Node: t_signatures.Node = ($) => ({
    'classifier': _p_change_context(
        $['classifier'],
        ($) => $,
    ),
    'properties': _p_change_context(
        $['properties'],
        ($) => _p.dictionary.map(
            $,
            ($, id) => $,
        ),
    ),
    'containments': _p_change_context(
        $['containments'],
        ($) => _p.dictionary.map(
            $,
            ($, id) => _p.dictionary.map(
                $,
                ($, id) => Node(
                    $,
                ),
            ),
        ),
    ),
    'references': _p_change_context(
        $['references'],
        ($) => _p.dictionary.map(
            $,
            ($, id) => Targets(
                $,
            ),
        ),
    ),
    'annotations': _p_change_context(
        $['annotations'],
        ($) => _p.list.map(
            $,
            ($) => $,
        ),
    ),
})

export const Targets: t_signatures.Targets = ($) => _p.list.map(
    $,
    ($) => ({
        'resolveInfo': _p_change_context(
            $['resolveInfo'],
            ($) => $,
        ),
        'reference': _p_change_context(
            $['reference'],
            ($) => _p.optional.map(
                $,
                ($) => $,
            ),
        ),
    }),
)
