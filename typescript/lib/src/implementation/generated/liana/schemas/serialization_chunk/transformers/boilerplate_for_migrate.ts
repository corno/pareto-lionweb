
import * as p_ from 'pareto-core/dist/implementation/transformer'

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_chunk/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/serialization_chunk/data"

import * as v_location from "../../location/transformers/boilerplate_for_migrate"

export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($) => ({
    'range': $.range,
    'serializationFormatVersion': p_change_context(
        $['serializationFormatVersion'],
        ($) => $,
    ),
    'languages': p_change_context(
        $['languages'],
        ($) => p_.from.list(
            $,
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
    'nodes': p_change_context(
        $['nodes'],
        ($) => p_.from.list(
            $,
        ).map(
            ($) => ({
                'id': p_change_context(
                    $['id'],
                    ($) => $,
                ),
                'range': p_change_context(
                    $['range'],
                    ($) => v_location.Range(
                        $,
                    ),
                ),
                'parent': p_change_context(
                    $['parent'],
                    ($) => p_.from.optional(
                        $,
                    ).map(
                        ($) => $,
                    ),
                ),
                'classifier': p_change_context(
                    $['classifier'],
                    ($) => Meta_Pointer(
                        $,
                    ),
                ),
                'properties': p_change_context(
                    $['properties'],
                    ($) => p_.from.list(
                        $,
                    ).map(
                        ($) => ({
                            'property': p_change_context(
                                $['property'],
                                ($) => Meta_Pointer(
                                    $,
                                ),
                            ),
                            'value': p_change_context(
                                $['value'],
                                ($) => $,
                            ),
                        }),
                    ),
                ),
                'references': p_change_context(
                    $['references'],
                    ($) => p_.from.list(
                        $,
                    ).map(
                        ($) => ({
                            'reference': p_change_context(
                                $['reference'],
                                ($) => Meta_Pointer(
                                    $,
                                ),
                            ),
                            'targets': p_change_context(
                                $['targets'],
                                ($) => Targets(
                                    $,
                                ),
                            ),
                        }),
                    ),
                ),
                'containments': p_change_context(
                    $['containments'],
                    ($) => p_.from.list(
                        $,
                    ).map(
                        ($) => ({
                            'containment': p_change_context(
                                $['containment'],
                                ($) => Meta_Pointer(
                                    $,
                                ),
                            ),
                            'children': p_change_context(
                                $['children'],
                                ($) => p_.from.list(
                                    $,
                                ).map(
                                    ($) => $,
                                ),
                            ),
                        }),
                    ),
                ),
                'annotations': p_change_context(
                    $['annotations'],
                    ($) => p_.from.list(
                        $,
                    ).map(
                        ($) => $,
                    ),
                ),
            }),
        ),
    ),
})

export const Targets: t_signatures.Targets = ($) => p_.from.list(
    $,
).map(
    ($) => ({
        'resolveInfo': p_change_context(
            $['resolveInfo'],
            ($) => $,
        ),
        'reference': p_change_context(
            $['reference'],
            ($) => p_.from.optional(
                $,
            ).map(
                ($) => $,
            ),
        ),
    }),
)

export const Meta_Pointer: t_signatures.Meta_Pointer = ($) => ({
    'language': p_change_context(
        $['language'],
        ($) => $,
    ),
    'key': p_change_context(
        $['key'],
        ($) => $,
    ),
    'version': p_change_context(
        $['version'],
        ($) => $,
    ),
})
