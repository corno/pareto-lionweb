
import * as p_ from 'pareto-core/implementation/transformer'

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_tree/signatures/transformers/boilerplate_for_migrate.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/serialization_tree/data.js"

import * as v_location from "../../location/transformers/boilerplate_for_migrate.js"

export const Serialization_Tree: t_signatures.Serialization_Tree = ($) => ({
    'serializationFormatVersion': p_change_context(
        $['serializationFormatVersion'],
        ($) => $,
    ),
    'languages': p_change_context(
        $['languages'],
        ($) => p_.from.list($,
        ).map(
            ($) => ({
                'key': p_change_context(
                    $['key'],
                    ($) => $,
                ),
                'version': p_change_context(
                    $['version'],
                    ($) => $,
                ),
            }),
        ),
    ),
    'root node id': p_change_context(
        $['root node id'],
        ($) => $,
    ),
    'node tree': p_change_context(
        $['node tree'],
        ($) => Node(
            $,
        ),
    ),
})

export const Node: t_signatures.Node = ($) => ({
    'range': p_change_context(
        $['range'],
        ($) => v_location.Range(
            $,
        ),
    ),
    'classifier': p_change_context(
        $['classifier'],
        ($) => $,
    ),
    'properties': p_change_context(
        $['properties'],
        ($) => p_.from.dictionary($,
        ).map(
            ($, id) => $,
        ),
    ),
    'containments': p_change_context(
        $['containments'],
        ($) => p_.from.dictionary($,
        ).map(
            ($, id) => p_.from.dictionary($,
            ).map(
                ($, id) => Node(
                    $,
                ),
            ),
        ),
    ),
    'references': p_change_context(
        $['references'],
        ($) => p_.from.dictionary($,
        ).map(
            ($, id) => Targets(
                $,
            ),
        ),
    ),
    'annotations': p_change_context(
        $['annotations'],
        ($) => p_.from.list($,
        ).map(
            ($) => $,
        ),
    ),
})

export const Targets: t_signatures.Targets = ($) => p_.from.list($,
).map(
    ($) => ({
        'resolveInfo': p_change_context(
            $['resolveInfo'],
            ($) => $,
        ),
        'reference': p_change_context(
            $['reference'],
            ($) => p_.from.optional($,
            ).map(
                ($) => $,
            ),
        ),
    }),
)
