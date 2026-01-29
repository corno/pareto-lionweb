
import * as _p from "pareto-core/dist/transformer"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/serialization_tree/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/serialization_tree/data"
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
export const Node: t_signatures.Node = ($) => ({
    'classifier': _p_cc(
        $['classifier'], 
        ($) => $
    ),
    'properties': _p_cc(
        $['properties'], 
        ($) => $.__d_map(
            ($,id) => $
        )
    ),
    'containments': _p_cc(
        $['containments'], 
        ($) => $.__d_map(
            ($,id) => $.__d_map(
                ($,id) => Node(
                    $
                )
            )
        )
    ),
    'references': _p_cc(
        $['references'], 
        ($) => $.__d_map(
            ($,id) => Targets(
                $
            )
        )
    ),
    'annotations': _p_cc(
        $['annotations'], 
        ($) => $.__l_map(
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
