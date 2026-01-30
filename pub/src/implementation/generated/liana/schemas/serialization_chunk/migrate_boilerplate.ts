
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/serialization_chunk/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/serialization_chunk/data"

export const Meta_Pointer: t_signatures.Meta_Pointer = ($) => ({
    'language': _p_cc(
        $['language'],
        ($) => $
    ),
    'key': _p_cc(
        $['key'],
        ($) => $
    ),
    'version': _p_cc(
        $['version'],
        ($) => $
    ),
})

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
    'nodes': _p_cc(
        $['nodes'],
        ($) => _p.list.map(
            $,
            ($) => ({
                'id': _p_cc(
                    $['id'],
                    ($) => $
                ),
                'parent': _p_cc(
                    $['parent'],
                    ($) => _p.optional.map(
                        $,
                        ($) => $
                    )
                ),
                'classifier': _p_cc(
                    $['classifier'],
                    ($) => Meta_Pointer(
                        $
                    )
                ),
                'properties': _p_cc(
                    $['properties'],
                    ($) => _p.list.map(
                        $,
                        ($) => ({
                            'property': _p_cc(
                                $['property'],
                                ($) => Meta_Pointer(
                                    $
                                )
                            ),
                            'value': _p_cc(
                                $['value'],
                                ($) => $
                            ),
                        })
                    )
                ),
                'references': _p_cc(
                    $['references'],
                    ($) => _p.list.map(
                        $,
                        ($) => ({
                            'reference': _p_cc(
                                $['reference'],
                                ($) => Meta_Pointer(
                                    $
                                )
                            ),
                            'targets': _p_cc(
                                $['targets'],
                                ($) => Targets(
                                    $
                                )
                            ),
                        })
                    )
                ),
                'containments': _p_cc(
                    $['containments'],
                    ($) => _p.list.map(
                        $,
                        ($) => ({
                            'containment': _p_cc(
                                $['containment'],
                                ($) => Meta_Pointer(
                                    $
                                )
                            ),
                            'children': _p_cc(
                                $['children'],
                                ($) => _p.list.map(
                                    $,
                                    ($) => $
                                )
                            ),
                        })
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
        )
    ),
})
