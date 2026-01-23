
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/serialization_tree/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/serialization_tree/data"
export const Targets: t_signatures.Targets = ($) => $.__l_map(($) => ({
    'resolveInfo': _p.deprecated_cc($['resolveInfo'], ($) => $),
    'reference': _p.deprecated_cc($['reference'], ($) => $.__o_map(($) => $)),
}))
export const Node: t_signatures.Node = ($) => ({
    'classifier': _p.deprecated_cc($['classifier'], ($) => $),
    'properties': _p.deprecated_cc($['properties'], ($) => $.__d_map(($) => $)),
    'containments': _p.deprecated_cc($['containments'], ($) => $.__d_map(($) => $.__d_map(($) => Node(
        $
    )))),
    'references': _p.deprecated_cc($['references'], ($) => $.__d_map(($) => Targets(
        $
    ))),
    'annotations': _p.deprecated_cc($['annotations'], ($) => $.__l_map(($) => $)),
})
export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($) => ({
    'serializationFormatVersion': _p.deprecated_cc($['serializationFormatVersion'], ($) => $),
    'languages': _p.deprecated_cc($['languages'], ($) => $.__l_map(($) => ({
        'key': _p.deprecated_cc($['key'], ($) => $),
        'version': _p.deprecated_cc($['version'], ($) => $),
    }))),
    'root node id': _p.deprecated_cc($['root node id'], ($) => $),
    'node tree': _p.deprecated_cc($['node tree'], ($) => Node(
        $
    )),
})
