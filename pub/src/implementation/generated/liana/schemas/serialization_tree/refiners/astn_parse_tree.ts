
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_tree/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/serialization_tree/data"

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
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "serializationFormatVersion"],
                    ),
                },
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
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "languages"],
                    ),
                },
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
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "key"],
                                    ),
                                },
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
                                {
                                    no_such_entry: ($) => abort(
                                        ['no such entry', "version"],
                                    ),
                                },
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
        'root node id': _p_change_context(
            $.__get_entry_deprecated(
                'root node id',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "root node id"],
                    ),
                },
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
        'node tree': _p_change_context(
            $.__get_entry_deprecated(
                'node tree',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "node tree"],
                    ),
                },
            ),
            ($) => Node(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Node: t_signatures.Node = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'classifier': _p_change_context(
            $.__get_entry_deprecated(
                'classifier',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "classifier"],
                    ),
                },
            ),
            ($) => v_unmarshalled_from_parse_tree.Text(
                $,
                ($) => abort(
                    ['expected a text', null],
                ),
            ),
        ),
        'properties': _p_change_context(
            $.__get_entry_deprecated(
                'properties',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "properties"],
                    ),
                },
            ),
            ($) => _p.dictionary.from.dictionary(
                v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null],
                    ),
                ),
            ).map(
                ($, id) => v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null],
                    ),
                ),
            ),
        ),
        'containments': _p_change_context(
            $.__get_entry_deprecated(
                'containments',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "containments"],
                    ),
                },
            ),
            ($) => _p.dictionary.from.dictionary(
                v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null],
                    ),
                ),
            ).map(
                ($, id) => _p.dictionary.from.dictionary(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                ).map(
                    ($, id) => Node(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            ),
        ),
        'references': _p_change_context(
            $.__get_entry_deprecated(
                'references',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "references"],
                    ),
                },
            ),
            ($) => _p.dictionary.from.dictionary(
                v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null],
                    ),
                ),
            ).map(
                ($, id) => Targets(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            ),
        ),
        'annotations': _p_change_context(
            $.__get_entry_deprecated(
                'annotations',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "annotations"],
                    ),
                },
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
                    {
                        no_such_entry: ($) => abort(
                            ['no such entry', "resolveInfo"],
                        ),
                    },
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
                    {
                        no_such_entry: ($) => abort(
                            ['no such entry', "reference"],
                        ),
                    },
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
