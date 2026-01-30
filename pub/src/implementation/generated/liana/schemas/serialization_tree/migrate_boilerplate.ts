
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/serialization_tree/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/serialization_tree/data"

export const Targets: t_signatures.Targets = ($) => _p.list.map(
    $,
    ($) => ({
        'resolveInfo': _p_cc(
            $['resolveInfo'],
            ($) => $
        ),
        'reference': _p_cc(
            $['reference'],
            ($) => _p.optional.map(
                $,
                ($) => $
            )
        ),
    })
)

export const Node: t_signatures.Node = ($) => ({
    'classifier': _p_cc(
        $['classifier'],
        ($) => $
    ),
    'properties': _p_cc(
        $['properties'],
        ($) => _p.dictionary.map(
            $,
            ($, id) => $
        )
    ),
    'containments': _p_cc(
        $['containments'],
        ($) => _p.dictionary.map(
            $,
            ($, id) => _p.dictionary.map(
                $,
                ($, id) => Node(
                    $
                )
            )
        )
    ),
    'references': _p_cc(
        $['references'],
        ($) => _p.dictionary.map(
            $,
            ($, id) => Targets(
                $
            )
        )
    ),
    'annotations': _p_cc(
        $['annotations'],
        ($) => _p.list.map(
            $,
            ($) => $
        )
    ),
})

export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($) => ({
    'serializationFormatVersion': _p_cc(
        $['serializationFormatVersion'],
        ($) => $
    ),
    'languages': _p_cc(
        $['languages'],
        ($) => _p.list.map(
            $,
            ($) => ({
                'key': _p_cc(
                    $['key'],
                    ($) => $
                ),
                'version': _p_cc(
                    $['version'],
                    ($) => $
                ),
            })
        )
    ),
    'root node id': _p_cc(
        $['root node id'],
        ($) => $
    ),
    'node tree': _p_cc(
        $['node tree'],
        ($) => Node(
            $
        )
    ),
})
