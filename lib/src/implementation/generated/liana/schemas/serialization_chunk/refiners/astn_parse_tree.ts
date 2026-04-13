
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_chunk/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/serialization_chunk/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_location from "../../location/refiners/astn_parse_tree"

export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($, abort) => _p_change_context(
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
                    "nodes": null,
                },
            ),
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'range': var_verbose_group_range,
                'serializationFormatVersion': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'serializationFormatVersion',
                            'subdocument context': _p.optional.literal.not_set(),
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
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => _p.list.from.list(
                        v_unmarshalled_from_parse_tree.List(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.optional.literal.not_set(),
                            },
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
                                        'subdocument context': _p.optional.literal.not_set(),
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
                                                        'subdocument context': _p.optional.literal.not_set(),
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
                                                        'subdocument context': _p.optional.literal.not_set(),
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
                'nodes': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'nodes',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => _p.list.from.list(
                        v_unmarshalled_from_parse_tree.List(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'subdocument context': _p.optional.literal.not_set(),
                            },
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
                                                "id": null,
                                                "range": null,
                                                "parent": null,
                                                "classifier": null,
                                                "properties": null,
                                                "references": null,
                                                "containments": null,
                                                "annotations": null,
                                            },
                                        ),
                                        'subdocument context': _p.optional.literal.not_set(),
                                    },
                                ),
                                ($) => _p_variables(
                                    () => {
                                        
                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                            $['value'],
                                        )
                                        return {
                                            'id': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'id',
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'range': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'range',
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => v_external_location.Range(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                            'parent': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'parent',
                                                        'subdocument context': _p.optional.literal.not_set(),
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
                                            'classifier': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'classifier',
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => Meta_Pointer(
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
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => _p.list.from.list(
                                                    v_unmarshalled_from_parse_tree.List(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
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
                                                                            "property": null,
                                                                            "value": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                    )
                                                                    return {
                                                                        'property': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'property',
                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => Meta_Pointer(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'value': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'value',
                                                                                    'subdocument context': _p.optional.literal.not_set(),
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
                                            'references': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'references',
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => _p.list.from.list(
                                                    v_unmarshalled_from_parse_tree.List(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
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
                                                                            "reference": null,
                                                                            "targets": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                    )
                                                                    return {
                                                                        'reference': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'reference',
                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => Meta_Pointer(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'targets': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'targets',
                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => Targets(
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
                                            'containments': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'containments',
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => _p.list.from.list(
                                                    v_unmarshalled_from_parse_tree.List(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
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
                                                                            "containment": null,
                                                                            "children": null,
                                                                        },
                                                                    ),
                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                },
                                                            ),
                                                            ($) => _p_variables(
                                                                () => {
                                                                    
                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                        $['value'],
                                                                    )
                                                                    return {
                                                                        'containment': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'containment',
                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => Meta_Pointer(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        ),
                                                                        'children': _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                                {
                                                                                    'id': 'children',
                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                },
                                                                            ),
                                                                            ($) => _p.list.from.list(
                                                                                v_unmarshalled_from_parse_tree.List(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                    {
                                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                                    },
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
                                                        ),
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
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => _p.list.from.list(
                                                    v_unmarshalled_from_parse_tree.List(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
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
        {
            'subdocument context': _p.optional.literal.not_set(),
        },
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
                    'subdocument context': _p.optional.literal.not_set(),
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
                                    'subdocument context': _p.optional.literal.not_set(),
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
                                    'subdocument context': _p.optional.literal.not_set(),
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

export const Meta_Pointer: t_signatures.Meta_Pointer = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "language": null,
                    "key": null,
                    "version": null,
                },
            ),
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'language': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'language',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'key': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'key',
                            'subdocument context': _p.optional.literal.not_set(),
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
                            'subdocument context': _p.optional.literal.not_set(),
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
)
