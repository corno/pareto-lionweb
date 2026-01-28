
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/serialization_chunk/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/serialization_chunk/data"
export const Meta_Pointer: t_signatures.Meta_Pointer = ($) => ({
    'language': _p.deprecated_cc(
        $['language'], 
        ($) => $
    ),
    'key': _p.deprecated_cc(
        $['key'], 
        ($) => $
    ),
    'version': _p.deprecated_cc(
        $['version'], 
        ($) => $
    ),
})
export const Targets: t_signatures.Targets = ($) => $.__l_map(
    ($) => ({
        'resolveInfo': _p.deprecated_cc(
            $['resolveInfo'], 
            ($) => $
        ),
        'reference': _p.deprecated_cc(
            $['reference'], 
            ($) => $.__o_map(
                ($) => $
            )
        ),
    })
)
export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($) => ({
    'serializationFormatVersion': _p.deprecated_cc(
        $['serializationFormatVersion'], 
        ($) => $
    ),
    'languages': _p.deprecated_cc(
        $['languages'], 
        ($) => $.__l_map(
            ($) => ({
                'key': _p.deprecated_cc(
                    $['key'], 
                    ($) => $
                ),
                'version': _p.deprecated_cc(
                    $['version'], 
                    ($) => $
                ),
            })
        )
    ),
    'nodes': _p.deprecated_cc(
        $['nodes'], 
        ($) => $.__l_map(
            ($) => ({
                'id': _p.deprecated_cc(
                    $['id'], 
                    ($) => $
                ),
                'parent': _p.deprecated_cc(
                    $['parent'], 
                    ($) => $.__o_map(
                        ($) => $
                    )
                ),
                'classifier': _p.deprecated_cc(
                    $['classifier'], 
                    ($) => Meta_Pointer(
                        $
                    )
                ),
                'properties': _p.deprecated_cc(
                    $['properties'], 
                    ($) => $.__l_map(
                        ($) => ({
                            'property': _p.deprecated_cc(
                                $['property'], 
                                ($) => Meta_Pointer(
                                    $
                                )
                            ),
                            'value': _p.deprecated_cc(
                                $['value'], 
                                ($) => $
                            ),
                        })
                    )
                ),
                'references': _p.deprecated_cc(
                    $['references'], 
                    ($) => $.__l_map(
                        ($) => ({
                            'reference': _p.deprecated_cc(
                                $['reference'], 
                                ($) => Meta_Pointer(
                                    $
                                )
                            ),
                            'targets': _p.deprecated_cc(
                                $['targets'], 
                                ($) => Targets(
                                    $
                                )
                            ),
                        })
                    )
                ),
                'containments': _p.deprecated_cc(
                    $['containments'], 
                    ($) => $.__l_map(
                        ($) => ({
                            'containment': _p.deprecated_cc(
                                $['containment'], 
                                ($) => Meta_Pointer(
                                    $
                                )
                            ),
                            'children': _p.deprecated_cc(
                                $['children'], 
                                ($) => $.__l_map(
                                    ($) => $
                                )
                            ),
                        })
                    )
                ),
                'annotations': _p.deprecated_cc(
                    $['annotations'], 
                    ($) => $.__l_map(
                        ($) => $
                    )
                ),
            })
        )
    ),
})
