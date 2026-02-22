
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_tree/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/serialization_tree/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

import * as v_external_location from "../../location/refiners/astn_parse_tree"

export const Serialization_Tree: t_signatures.Serialization_Tree = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "serializationFormatVersion": null,
                    "languages": null,
                    "root node id": null,
                    "node tree": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'serializationFormatVersion': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'serializationFormatVersion',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'languages': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'languages',
                        },
                    ),
                    ($) => _p.list.from.list(
                        v_unmarshalled_from_parse_tree.List(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )['items'],
                    ).map(
                        ($) => _p_change_context(
                            $['value'],
                            ($) => _p_change_context(
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "key": null,
                                                "version": null,
                                            },
                                        ),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'key': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'key',
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'version': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'version',
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        }
                                    },
                                ),
                            ),
                        ),
                    ),
                ),
                'root node id': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'root node id',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'node tree': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'node tree',
                        },
                    ),
                    ($) => Node(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Node: t_signatures.Node = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "range": null,
                    "classifier": null,
                    "properties": null,
                    "containments": null,
                    "references": null,
                    "annotations": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'range': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'range',
                        },
                    ),
                    ($) => v_external_location.Range(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'classifier': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'classifier',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'properties': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'properties',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_dictionary_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                )
                                return _p.dictionary.from.dictionary(
                                    $['entries'],
                                ).map(
                                    ($, id) => v_unmarshalled_from_parse_tree.Text(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                )
                            },
                        ),
                    ),
                ),
                'containments': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'containments',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_dictionary_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                )
                                return _p.dictionary.from.dictionary(
                                    $['entries'],
                                ).map(
                                    ($, id) => _p_change_context(
                                        v_unmarshalled_from_parse_tree.Dictionary(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                        ($) => _p_variables(
                                            () => {
                                                
                                                const var_dictionary_range = v_parse_tree_to_location.Value(
                                                    $['value'],
                                                )
                                                return _p.dictionary.from.dictionary(
                                                    $['entries'],
                                                ).map(
                                                    ($, id) => Node(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                )
                                            },
                                        ),
                                    ),
                                )
                            },
                        ),
                    ),
                ),
                'references': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'references',
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Dictionary(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_dictionary_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                )
                                return _p.dictionary.from.dictionary(
                                    $['entries'],
                                ).map(
                                    ($, id) => Targets(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                    ),
                                )
                            },
                        ),
                    ),
                ),
                'annotations': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'annotations',
                        },
                    ),
                    ($) => _p.list.from.list(
                        v_unmarshalled_from_parse_tree.List(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )['items'],
                    ).map(
                        ($) => _p_change_context(
                            $['value'],
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Targets: t_signatures.Targets = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
    )['items'],
).map(
    ($) => _p_change_context(
        $['value'],
        ($) => _p_change_context(
            v_unmarshalled_from_parse_tree.Verbose_Group(
                $,
                ($) => abort(
                    $,
                ),
                {
                    'expected properties': _p.dictionary.literal(
                        {
                            "resolveInfo": null,
                            "reference": null,
                        },
                    ),
                },
            ),
            ($) => _p_variables(
                () => {
                    
                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                        $['value'],
                    )
                    return {
                        'resolveInfo': _p_change_context(
                            v_unmarshalled_from_parse_tree.Property(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'id': 'resolveInfo',
                                },
                            ),
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                        'reference': _p_change_context(
                            v_unmarshalled_from_parse_tree.Property(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'id': 'reference',
                                },
                            ),
                            ($) => _p.optional.from.optional(
                                v_unmarshalled_from_parse_tree.Optional(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )['optional'],
                            ).map(
                                ($) => v_unmarshalled_from_parse_tree.Text(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            ),
                        ),
                    }
                },
            ),
        ),
    ),
)
