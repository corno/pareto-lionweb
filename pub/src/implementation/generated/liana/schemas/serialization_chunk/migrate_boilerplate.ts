
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

export const Targets: t_signatures.Targets = ($) => $.__l_map(
    ($) => ({
        'resolveInfo': _p_cc(
            $['resolveInfo'],
            ($) => $
        ),
        'reference': _p_cc(
            $['reference'],
            ($) => $.__o_map(
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
        ($) => $.__l_map(
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
        ($) => $.__l_map(
            ($) => ({
                'id': _p_cc(
                    $['id'],
                    ($) => $
                ),
                'parent': _p_cc(
                    $['parent'],
                    ($) => $.__o_map(
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
                    ($) => $.__l_map(
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
                    ($) => $.__l_map(
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
                    ($) => $.__l_map(
                        ($) => ({
                            'containment': _p_cc(
                                $['containment'],
                                ($) => Meta_Pointer(
                                    $
                                )
                            ),
                            'children': _p_cc(
                                $['children'],
                                ($) => $.__l_map(
                                    ($) => $
                                )
                            ),
                        })
                    )
                ),
                'annotations': _p_cc(
                    $['annotations'],
                    ($) => $.__l_map(
                        ($) => $
                    )
                ),
            })
        )
    ),
})
