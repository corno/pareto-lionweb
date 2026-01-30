
import * as _p from "pareto-core/dist/refiner"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/serialization_chunk/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/serialization_chunk/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Meta_Pointer: t_signatures.Meta_Pointer = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'language': _p_cc(
            $.__get_entry(
                'language',
                ($) => abort(
                    ['no such entry', "language"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
        'key': _p_cc(
            $.__get_entry(
                'key',
                ($) => abort(
                    ['no such entry', "key"]
                )
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
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
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null]
                )
            )
        ),
    })
)

export const Targets: t_signatures.Targets = ($, abort) => _p.list.map(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null]
        )
    ),
    ($) => _p_cc(
        v_unmarshalled_from_parse_tree.Group(
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
                ($) => v_unmarshalled_from_parse_tree.Text(
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
                ($) => _p.optional.map(
                    v_unmarshalled_from_parse_tree.Optional(
                        $,
                        ($) => abort(
                            ['expected an optional', null]
                        )
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
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

export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
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
            ($) => v_unmarshalled_from_parse_tree.Text(
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
            ($) => _p.list.map(
                v_unmarshalled_from_parse_tree.List(
                    $,
                    ($) => abort(
                        ['expected a list', null]
                    )
                ),
                ($) => _p_cc(
                    v_unmarshalled_from_parse_tree.Group(
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
                            ($) => v_unmarshalled_from_parse_tree.Text(
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
                            ($) => v_unmarshalled_from_parse_tree.Text(
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
        'nodes': _p_cc(
            $.__get_entry(
                'nodes',
                ($) => abort(
                    ['no such entry', "nodes"]
                )
            ),
            ($) => _p.list.map(
                v_unmarshalled_from_parse_tree.List(
                    $,
                    ($) => abort(
                        ['expected a list', null]
                    )
                ),
                ($) => _p_cc(
                    v_unmarshalled_from_parse_tree.Group(
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
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )
                        ),
                        'parent': _p_cc(
                            $.__get_entry(
                                'parent',
                                ($) => abort(
                                    ['no such entry', "parent"]
                                )
                            ),
                            ($) => _p.optional.map(
                                v_unmarshalled_from_parse_tree.Optional(
                                    $,
                                    ($) => abort(
                                        ['expected an optional', null]
                                    )
                                ),
                                ($) => v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null]
                                    )
                                )
                            )
                        ),
                        'classifier': _p_cc(
                            $.__get_entry(
                                'classifier',
                                ($) => abort(
                                    ['no such entry', "classifier"]
                                )
                            ),
                            ($) => Meta_Pointer(
                                $,
                                ($) => abort(
                                    $
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
                            ($) => _p.list.map(
                                v_unmarshalled_from_parse_tree.List(
                                    $,
                                    ($) => abort(
                                        ['expected a list', null]
                                    )
                                ),
                                ($) => _p_cc(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null]
                                        )
                                    ),
                                    ($) => ({
                                        'property': _p_cc(
                                            $.__get_entry(
                                                'property',
                                                ($) => abort(
                                                    ['no such entry', "property"]
                                                )
                                            ),
                                            ($) => Meta_Pointer(
                                                $,
                                                ($) => abort(
                                                    $
                                                )
                                            )
                                        ),
                                        'value': _p_cc(
                                            $.__get_entry(
                                                'value',
                                                ($) => abort(
                                                    ['no such entry', "value"]
                                                )
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
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
                        'references': _p_cc(
                            $.__get_entry(
                                'references',
                                ($) => abort(
                                    ['no such entry', "references"]
                                )
                            ),
                            ($) => _p.list.map(
                                v_unmarshalled_from_parse_tree.List(
                                    $,
                                    ($) => abort(
                                        ['expected a list', null]
                                    )
                                ),
                                ($) => _p_cc(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null]
                                        )
                                    ),
                                    ($) => ({
                                        'reference': _p_cc(
                                            $.__get_entry(
                                                'reference',
                                                ($) => abort(
                                                    ['no such entry', "reference"]
                                                )
                                            ),
                                            ($) => Meta_Pointer(
                                                $,
                                                ($) => abort(
                                                    $
                                                )
                                            )
                                        ),
                                        'targets': _p_cc(
                                            $.__get_entry(
                                                'targets',
                                                ($) => abort(
                                                    ['no such entry', "targets"]
                                                )
                                            ),
                                            ($) => Targets(
                                                $,
                                                ($) => abort(
                                                    $
                                                )
                                            )
                                        ),
                                    })
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
                            ($) => _p.list.map(
                                v_unmarshalled_from_parse_tree.List(
                                    $,
                                    ($) => abort(
                                        ['expected a list', null]
                                    )
                                ),
                                ($) => _p_cc(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null]
                                        )
                                    ),
                                    ($) => ({
                                        'containment': _p_cc(
                                            $.__get_entry(
                                                'containment',
                                                ($) => abort(
                                                    ['no such entry', "containment"]
                                                )
                                            ),
                                            ($) => Meta_Pointer(
                                                $,
                                                ($) => abort(
                                                    $
                                                )
                                            )
                                        ),
                                        'children': _p_cc(
                                            $.__get_entry(
                                                'children',
                                                ($) => abort(
                                                    ['no such entry', "children"]
                                                )
                                            ),
                                            ($) => _p.list.map(
                                                v_unmarshalled_from_parse_tree.List(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a list', null]
                                                    )
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
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
                        ),
                        'annotations': _p_cc(
                            $.__get_entry(
                                'annotations',
                                ($) => abort(
                                    ['no such entry', "annotations"]
                                )
                            ),
                            ($) => _p.list.map(
                                v_unmarshalled_from_parse_tree.List(
                                    $,
                                    ($) => abort(
                                        ['expected a list', null]
                                    )
                                ),
                                ($) => v_unmarshalled_from_parse_tree.Text(
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
        ),
    })
)
