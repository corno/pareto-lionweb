
import * as _p from 'pareto-core/dist/expression'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_chunk/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/serialization_chunk/data"

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
    'nodes': _p_change_context(
        $['nodes'],
        ($) => _p.list.map(
            $,
            ($) => ({
                'id': _p_change_context(
                    $['id'],
                    ($) => $,
                ),
                'parent': _p_change_context(
                    $['parent'],
                    ($) => _p.optional.map(
                        $,
                        ($) => $,
                    ),
                ),
                'classifier': _p_change_context(
                    $['classifier'],
                    ($) => Meta_Pointer(
                        $,
                    ),
                ),
                'properties': _p_change_context(
                    $['properties'],
                    ($) => _p.list.map(
                        $,
                        ($) => ({
                            'property': _p_change_context(
                                $['property'],
                                ($) => Meta_Pointer(
                                    $,
                                ),
                            ),
                            'value': _p_change_context(
                                $['value'],
                                ($) => $,
                            ),
                        }),
                    ),
                ),
                'references': _p_change_context(
                    $['references'],
                    ($) => _p.list.map(
                        $,
                        ($) => ({
                            'reference': _p_change_context(
                                $['reference'],
                                ($) => Meta_Pointer(
                                    $,
                                ),
                            ),
                            'targets': _p_change_context(
                                $['targets'],
                                ($) => Targets(
                                    $,
                                ),
                            ),
                        }),
                    ),
                ),
                'containments': _p_change_context(
                    $['containments'],
                    ($) => _p.list.map(
                        $,
                        ($) => ({
                            'containment': _p_change_context(
                                $['containment'],
                                ($) => Meta_Pointer(
                                    $,
                                ),
                            ),
                            'children': _p_change_context(
                                $['children'],
                                ($) => _p.list.map(
                                    $,
                                    ($) => $,
                                ),
                            ),
                        }),
                    ),
                ),
                'annotations': _p_change_context(
                    $['annotations'],
                    ($) => _p.list.map(
                        $,
                        ($) => $,
                    ),
                ),
            }),
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

export const Meta_Pointer: t_signatures.Meta_Pointer = ($) => ({
    'language': _p_change_context(
        $['language'],
        ($) => $,
    ),
    'key': _p_change_context(
        $['key'],
        ($) => $,
    ),
    'version': _p_change_context(
        $['version'],
        ($) => $,
    ),
})
