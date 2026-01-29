
import * as _p from "pareto-core/dist/refiner"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/serialization_tree/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_generic from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"
export const Targets: t_signatures.Targets = ($,abort) => v_generic.expect_list(
    $, 
    ($) => abort(
        ['expected a list', null]
    )
).__l_map(
    ($) => _p_cc(
        v_generic.expect_group(
            $, 
            ($) => abort(
                ['expected a group', null]
            )
        ), 
        ($) => ({
            'resolveInfo': _p_cc(
                $.__get_entry(
                    'resolveInfo', 
                    ($) => abort(
                        ['no such entry', "resolveInfo"]
                    )
                ), 
                ($) => v_generic.expect_text(
                    $, 
                    ($) => abort(
                        ['expected a text', null]
                    )
                )
            ),
            'reference': _p_cc(
                $.__get_entry(
                    'reference', 
                    ($) => abort(
                        ['no such entry', "reference"]
                    )
                ), 
                ($) => v_generic.expect_optional(
                    $, 
                    ($) => abort(
                        ['expected an optional', null]
                    )
                ).__o_map(
                    ($) => v_generic.expect_text(
                        $, 
                        ($) => abort(
                            ['expected a text', null]
                        )
                    )
                )
            ),
        })
    )
)
export const Node: t_signatures.Node = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'classifier': _p_cc(
            $.__get_entry(
                'classifier', 
                ($) => abort(
                    ['no such entry', "classifier"]
                )
            ), 
            ($) => v_generic.expect_text(
                $, 
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
        'properties': _p_cc(
            $.__get_entry(
                'properties', 
                ($) => abort(
                    ['no such entry', "properties"]
                )
            ), 
            ($) => v_generic.expect_dictionary(
                $, 
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($,id) => v_generic.expect_text(
                    $, 
                    ($) => abort(
                        ['expected a text', null]
                    )
                )
            )
        ),
        'containments': _p_cc(
            $.__get_entry(
                'containments', 
                ($) => abort(
                    ['no such entry', "containments"]
                )
            ), 
            ($) => v_generic.expect_dictionary(
                $, 
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($,id) => v_generic.expect_dictionary(
                    $, 
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($,id) => Node(
                        $, 
                        ($) => abort(
                            $
                        )
                    )
                )
            )
        ),
        'references': _p_cc(
            $.__get_entry(
                'references', 
                ($) => abort(
                    ['no such entry', "references"]
                )
            ), 
            ($) => v_generic.expect_dictionary(
                $, 
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($,id) => Targets(
                    $, 
                    ($) => abort(
                        $
                    )
                )
            )
        ),
        'annotations': _p_cc(
            $.__get_entry(
                'annotations', 
                ($) => abort(
                    ['no such entry', "annotations"]
                )
            ), 
            ($) => v_generic.expect_list(
                $, 
                ($) => abort(
                    ['expected a list', null]
                )
            ).__l_map(
                ($) => v_generic.expect_text(
                    $, 
                    ($) => abort(
                        ['expected a text', null]
                    )
                )
            )
        ),
    })
)
export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'serializationFormatVersion': _p_cc(
            $.__get_entry(
                'serializationFormatVersion', 
                ($) => abort(
                    ['no such entry', "serializationFormatVersion"]
                )
            ), 
            ($) => v_generic.expect_text(
                $, 
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
        'languages': _p_cc(
            $.__get_entry(
                'languages', 
                ($) => abort(
                    ['no such entry', "languages"]
                )
            ), 
            ($) => v_generic.expect_list(
                $, 
                ($) => abort(
                    ['expected a list', null]
                )
            ).__l_map(
                ($) => _p_cc(
                    v_generic.expect_group(
                        $, 
                        ($) => abort(
                            ['expected a group', null]
                        )
                    ), 
                    ($) => ({
                        'key': _p_cc(
                            $.__get_entry(
                                'key', 
                                ($) => abort(
                                    ['no such entry', "key"]
                                )
                            ), 
                            ($) => v_generic.expect_text(
                                $, 
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )
                        ),
                        'version': _p_cc(
                            $.__get_entry(
                                'version', 
                                ($) => abort(
                                    ['no such entry', "version"]
                                )
                            ), 
                            ($) => v_generic.expect_text(
                                $, 
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )
                        ),
                    })
                )
            )
        ),
        'root node id': _p_cc(
            $.__get_entry(
                'root node id', 
                ($) => abort(
                    ['no such entry', "root node id"]
                )
            ), 
            ($) => v_generic.expect_text(
                $, 
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
        'node tree': _p_cc(
            $.__get_entry(
                'node tree', 
                ($) => abort(
                    ['no such entry', "node tree"]
                )
            ), 
            ($) => Node(
                $, 
                ($) => abort(
                    $
                )
            )
        ),
    })
)
