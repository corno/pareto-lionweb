
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_chunk/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/serialization_chunk/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'serializationFormatVersion': _p_change_context(
            $.__get_entry_deprecated(
                'serializationFormatVersion',
                ($) => abort(
                    ['no such entry', "serializationFormatVersion"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
        'languages': _p_change_context(
            $.__get_entry_deprecated(
                'languages',
                ($) => abort(
                    ['no such entry', "languages"],
                ),
            ),
            ($) => _p.list.from.list(
                v_unmarshalled_from_parse_tree.List(
                    $,
                    ($) => abort(
                        ['expected a list', null],
                    ),
                ),
            ).map(
                ($) => _p_change_context(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null],
                        ),
                    ),
                    ($) => ({
                        'key': _p_change_context(
                            $.__get_entry_deprecated(
                                'key',
                                ($) => abort(
                                    ['no such entry', "key"],
                                ),
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        ),
                        'version': _p_change_context(
                            $.__get_entry_deprecated(
                                'version',
                                ($) => abort(
                                    ['no such entry', "version"],
                                ),
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        ),
                    }),
                ),
            ),
        ),
        'nodes': _p_change_context(
            $.__get_entry_deprecated(
                'nodes',
                ($) => abort(
                    ['no such entry', "nodes"],
                ),
            ),
            ($) => _p.list.from.list(
                v_unmarshalled_from_parse_tree.List(
                    $,
                    ($) => abort(
                        ['expected a list', null],
                    ),
                ),
            ).map(
                ($) => _p_change_context(
                    v_unmarshalled_from_parse_tree.Group(
                        $,
                        ($) => abort(
                            ['expected a group', null],
                        ),
                    ),
                    ($) => ({
                        'id': _p_change_context(
                            $.__get_entry_deprecated(
                                'id',
                                ($) => abort(
                                    ['no such entry', "id"],
                                ),
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        ),
                        'parent': _p_change_context(
                            $.__get_entry_deprecated(
                                'parent',
                                ($) => abort(
                                    ['no such entry', "parent"],
                                ),
                            ),
                            ($) => _p.optional.from.optional(
                                v_unmarshalled_from_parse_tree.Optional(
                                    $,
                                    ($) => abort(
                                        ['expected an optional', null],
                                    ),
                                ),
                            ).map(
                                ($) => v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                            ),
                        ),
                        'classifier': _p_change_context(
                            $.__get_entry_deprecated(
                                'classifier',
                                ($) => abort(
                                    ['no such entry', "classifier"],
                                ),
                            ),
                            ($) => Meta_Pointer(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                        'properties': _p_change_context(
                            $.__get_entry_deprecated(
                                'properties',
                                ($) => abort(
                                    ['no such entry', "properties"],
                                ),
                            ),
                            ($) => _p.list.from.list(
                                v_unmarshalled_from_parse_tree.List(
                                    $,
                                    ($) => abort(
                                        ['expected a list', null],
                                    ),
                                ),
                            ).map(
                                ($) => _p_change_context(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null],
                                        ),
                                    ),
                                    ($) => ({
                                        'property': _p_change_context(
                                            $.__get_entry_deprecated(
                                                'property',
                                                ($) => abort(
                                                    ['no such entry', "property"],
                                                ),
                                            ),
                                            ($) => Meta_Pointer(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'value': _p_change_context(
                                            $.__get_entry_deprecated(
                                                'value',
                                                ($) => abort(
                                                    ['no such entry', "value"],
                                                ),
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    ['expected a text', null],
                                                ),
                                            ),
                                        ),
                                    }),
                                ),
                            ),
                        ),
                        'references': _p_change_context(
                            $.__get_entry_deprecated(
                                'references',
                                ($) => abort(
                                    ['no such entry', "references"],
                                ),
                            ),
                            ($) => _p.list.from.list(
                                v_unmarshalled_from_parse_tree.List(
                                    $,
                                    ($) => abort(
                                        ['expected a list', null],
                                    ),
                                ),
                            ).map(
                                ($) => _p_change_context(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null],
                                        ),
                                    ),
                                    ($) => ({
                                        'reference': _p_change_context(
                                            $.__get_entry_deprecated(
                                                'reference',
                                                ($) => abort(
                                                    ['no such entry', "reference"],
                                                ),
                                            ),
                                            ($) => Meta_Pointer(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'targets': _p_change_context(
                                            $.__get_entry_deprecated(
                                                'targets',
                                                ($) => abort(
                                                    ['no such entry', "targets"],
                                                ),
                                            ),
                                            ($) => Targets(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }),
                                ),
                            ),
                        ),
                        'containments': _p_change_context(
                            $.__get_entry_deprecated(
                                'containments',
                                ($) => abort(
                                    ['no such entry', "containments"],
                                ),
                            ),
                            ($) => _p.list.from.list(
                                v_unmarshalled_from_parse_tree.List(
                                    $,
                                    ($) => abort(
                                        ['expected a list', null],
                                    ),
                                ),
                            ).map(
                                ($) => _p_change_context(
                                    v_unmarshalled_from_parse_tree.Group(
                                        $,
                                        ($) => abort(
                                            ['expected a group', null],
                                        ),
                                    ),
                                    ($) => ({
                                        'containment': _p_change_context(
                                            $.__get_entry_deprecated(
                                                'containment',
                                                ($) => abort(
                                                    ['no such entry', "containment"],
                                                ),
                                            ),
                                            ($) => Meta_Pointer(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'children': _p_change_context(
                                            $.__get_entry_deprecated(
                                                'children',
                                                ($) => abort(
                                                    ['no such entry', "children"],
                                                ),
                                            ),
                                            ($) => _p.list.from.list(
                                                v_unmarshalled_from_parse_tree.List(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a list', null],
                                                    ),
                                                ),
                                            ).map(
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                ),
                                            ),
                                        ),
                                    }),
                                ),
                            ),
                        ),
                        'annotations': _p_change_context(
                            $.__get_entry_deprecated(
                                'annotations',
                                ($) => abort(
                                    ['no such entry', "annotations"],
                                ),
                            ),
                            ($) => _p.list.from.list(
                                v_unmarshalled_from_parse_tree.List(
                                    $,
                                    ($) => abort(
                                        ['expected a list', null],
                                    ),
                                ),
                            ).map(
                                ($) => v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        ['expected a text', null],
                                    ),
                                ),
                            ),
                        ),
                    }),
                ),
            ),
        ),
    }),
)

export const Targets: t_signatures.Targets = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
).map(
    ($) => _p_change_context(
        v_unmarshalled_from_parse_tree.Group(
            $,
            ($) => abort(
                ['expected a group', null],
            ),
        ),
        ($) => ({
            'resolveInfo': _p_change_context(
                $.__get_entry_deprecated(
                    'resolveInfo',
                    ($) => abort(
                        ['no such entry', "resolveInfo"],
                    ),
                ),
                ($) => v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null],
                    ),
                ),
            ),
            'reference': _p_change_context(
                $.__get_entry_deprecated(
                    'reference',
                    ($) => abort(
                        ['no such entry', "reference"],
                    ),
                ),
                ($) => _p.optional.from.optional(
                    v_unmarshalled_from_parse_tree.Optional(
                        $,
                        ($) => abort(
                            ['expected an optional', null],
                        ),
                    ),
                ).map(
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                ),
            ),
        }),
    ),
)

export const Meta_Pointer: t_signatures.Meta_Pointer = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'language': _p_change_context(
            $.__get_entry_deprecated(
                'language',
                ($) => abort(
                    ['no such entry', "language"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
        'key': _p_change_context(
            $.__get_entry_deprecated(
                'key',
                ($) => abort(
                    ['no such entry', "key"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
        'version': _p_change_context(
            $.__get_entry_deprecated(
                'version',
                ($) => abort(
                    ['no such entry', "version"],
                ),
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
    }),
)
