
import * as _p from "pareto-core/dist/refiner"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/lioncore/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_generic from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"
export const ID: t_signatures.ID = ($,abort) => v_generic.expect_optional(
    $, 
    ($) => abort(
        ['expected an optional', null]
    )
).__o_map(
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
            'id': _p_cc(
                $.__get_entry(
                    'id', 
                    ($) => abort(
                        ['no such entry', "id"]
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
export const Raw_Reference: t_signatures.Raw_Reference = ($,abort) => _p_cc(
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
export const M3: t_signatures.M3 = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'id': _p_cc(
            $.__get_entry(
                'id', 
                ($) => abort(
                    ['no such entry', "id"]
                )
            ), 
            ($) => ID(
                $, 
                ($) => abort(
                    $
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
        'dependencies': _p_cc(
            $.__get_entry(
                'dependencies', 
                ($) => abort(
                    ['no such entry', "dependencies"]
                )
            ), 
            ($) => v_generic.expect_list(
                $, 
                ($) => abort(
                    ['expected a list', null]
                )
            ).__l_map(
                ($) => Raw_Reference(
                    $, 
                    ($) => abort(
                        $
                    )
                )
            )
        ),
        'entities': _p_cc(
            $.__get_entry(
                'entities', 
                ($) => abort(
                    ['no such entry', "entities"]
                )
            ), 
            ($) => v_generic.expect_dictionary(
                $, 
                ($) => abort(
                    ['expected a dictionary', null]
                )
            ).__d_map(
                ($,id) => _p_cc(
                    v_generic.expect_group(
                        $, 
                        ($) => abort(
                            ['expected a group', null]
                        )
                    ), 
                    ($) => ({
                        'id': _p_cc(
                            $.__get_entry(
                                'id', 
                                ($) => abort(
                                    ['no such entry', "id"]
                                )
                            ), 
                            ($) => ID(
                                $, 
                                ($) => abort(
                                    $
                                )
                            )
                        ),
                        'type': _p_cc(
                            $.__get_entry(
                                'type', 
                                ($) => abort(
                                    ['no such entry', "type"]
                                )
                            ), 
                            ($) => _p_unreachable_code_path(
                            )
                        ),
                    })
                )
            )
        ),
    })
)
