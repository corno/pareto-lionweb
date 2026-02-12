
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_tree/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/serialization_tree/data"

import * as v_location from "../../location/transformers/boilerplate_for_migrate"

export const Serialization_Tree: t_signatures.Serialization_Tree = ($) => ({
    'serializationFormatVersion': _p_change_context(
        $['serializationFormatVersion'],
        ($) => $,
    ),
    'languages': _p_change_context(
        $['languages'],
        ($) => _p.list.from.list(
            $,
        ).map(
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
    'range': _p_change_context(
        $['range'],
        ($) => v_location.Range(
            $,
        ),
    ),
    'classifier': _p_change_context(
        $['classifier'],
        ($) => $,
    ),
    'properties': _p_change_context(
        $['properties'],
        ($) => _p.dictionary.from.dictionary(
            $,
        ).map(
            ($, id) => $,
        ),
    ),
    'containments': _p_change_context(
        $['containments'],
        ($) => _p.dictionary.from.dictionary(
            $,
        ).map(
            ($, id) => _p.dictionary.from.dictionary(
                $,
            ).map(
                ($, id) => Node(
                    $,
                ),
            ),
        ),
    ),
    'references': _p_change_context(
        $['references'],
        ($) => _p.dictionary.from.dictionary(
            $,
        ).map(
            ($, id) => Targets(
                $,
            ),
        ),
    ),
    'annotations': _p_change_context(
        $['annotations'],
        ($) => _p.list.from.list(
            $,
        ).map(
            ($) => $,
        ),
    ),
})

export const Targets: t_signatures.Targets = ($) => _p.list.from.list(
    $,
).map(
    ($) => ({
        'resolveInfo': _p_change_context(
            $['resolveInfo'],
            ($) => $,
        ),
        'reference': _p_change_context(
            $['reference'],
            ($) => _p.optional.from.optional(
                $,
            ).map(
                ($) => $,
            ),
        ),
    }),
)
