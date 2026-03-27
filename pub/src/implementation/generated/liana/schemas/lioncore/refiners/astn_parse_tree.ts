
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lioncore/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/lioncore/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_generic from "../../generic/refiners/astn_parse_tree"

export const M3: t_signatures.M3 = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "id": null,
                    "properties": null,
                    "references": null,
                    "containments": null,
                },
            ),
            'document resource identifier': "dummy dri",
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'document resource identifier': "dummy dri",
                },
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
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => v_external_generic.ID(
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
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': _p.dictionary.literal(
                                    {
                                        "version": null,
                                    },
                                ),
                                'document resource identifier': "dummy dri",
                            },
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'document resource identifier': "dummy dri",
                                    },
                                )
                                return {
                                    'version': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'version',
                                                'document resource identifier': "dummy dri",
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
                'references': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'references',
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': _p.dictionary.literal(
                                    {
                                        "dependencies": null,
                                    },
                                ),
                                'document resource identifier': "dummy dri",
                            },
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'document resource identifier': "dummy dri",
                                    },
                                )
                                return {
                                    'dependencies': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'dependencies',
                                                'document resource identifier': "dummy dri",
                                            },
                                        ),
                                        ($) => v_external_generic.References(
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
                'containments': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'containments',
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': _p.dictionary.literal(
                                    {
                                        "entities": null,
                                    },
                                ),
                                'document resource identifier': "dummy dri",
                            },
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'document resource identifier': "dummy dri",
                                    },
                                )
                                return {
                                    'entities': _p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'entities',
                                                'document resource identifier': "dummy dri",
                                            },
                                        ),
                                        ($) => _p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'document resource identifier': "dummy dri",
                                                },
                                            ),
                                            ($) => _p.dictionary.from.dictionary(
                                                $['entries'],
                                            ).map(
                                                ($, id) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': _p.dictionary.literal(
                                                                {
                                                                    "id": null,
                                                                    "classifier": null,
                                                                },
                                                            ),
                                                            'document resource identifier': "dummy dri",
                                                        },
                                                    ),
                                                    ($) => _p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'document resource identifier': "dummy dri",
                                                                },
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
                                                                            'document resource identifier': "dummy dri",
                                                                        },
                                                                    ),
                                                                    ($) => v_external_generic.ID(
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
                                                                            'document resource identifier': "dummy dri",
                                                                        },
                                                                    ),
                                                                    ($) => _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.State(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        ($) => _p.decide.text(
                                                                            $['option']['token']['value'],
                                                                            ($t): t_out.M3.containments.entities.D.classifier => {
                                                                                switch ($t) {
                                                                                    case 'Classifier':
                                                                                        return _p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ['Classifier', _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                            {
                                                                                                                "classifier": null,
                                                                                                                "containments": null,
                                                                                                            },
                                                                                                        ),
                                                                                                        'document resource identifier': "dummy dri",
                                                                                                    },
                                                                                                ),
                                                                                                ($) => _p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'document resource identifier': "dummy dri",
                                                                                                            },
                                                                                                        )
                                                                                                        return {
                                                                                                            'classifier': _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'id': 'classifier',
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                ),
                                                                                                                ($) => _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    ($) => _p.decide.text(
                                                                                                                        $['option']['token']['value'],
                                                                                                                        ($t): t_out.M3.containments.entities.D.classifier.Classifier.classifier => {
                                                                                                                            switch ($t) {
                                                                                                                                case 'Concept':
                                                                                                                                    return _p_change_context(
                                                                                                                                        $['value'],
                                                                                                                                        ($) => ['Concept', _p_change_context(
                                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                {
                                                                                                                                                    'expected properties': _p.dictionary.literal(
                                                                                                                                                        {
                                                                                                                                                            "properties": null,
                                                                                                                                                            "references": null,
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            ($) => _p_variables(
                                                                                                                                                () => {
                                                                                                                                                    
                                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                        $['value'],
                                                                                                                                                        {
                                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                                        },
                                                                                                                                                    )
                                                                                                                                                    return {
                                                                                                                                                        'properties': _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                                {
                                                                                                                                                                    'id': 'properties',
                                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                            ($) => _p_change_context(
                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                    $,
                                                                                                                                                                    ($) => abort(
                                                                                                                                                                        $,
                                                                                                                                                                    ),
                                                                                                                                                                    {
                                                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                                                            {
                                                                                                                                                                                "abstract": null,
                                                                                                                                                                                "partition": null,
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => _p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            {
                                                                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                                                                            },
                                                                                                                                                                        )
                                                                                                                                                                        return {
                                                                                                                                                                            'abstract': _p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'id': 'abstract',
                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                            ),
                                                                                                                                                                            'partition': _p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'id': 'partition',
                                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                                        'references': _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                                {
                                                                                                                                                                    'id': 'references',
                                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                            ($) => _p_change_context(
                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                    $,
                                                                                                                                                                    ($) => abort(
                                                                                                                                                                        $,
                                                                                                                                                                    ),
                                                                                                                                                                    {
                                                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                                                            {
                                                                                                                                                                                "extends": null,
                                                                                                                                                                                "implements": null,
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => _p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            {
                                                                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                                                                            },
                                                                                                                                                                        )
                                                                                                                                                                        return {
                                                                                                                                                                            'extends': _p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'id': 'extends',
                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => v_external_generic.Optional_Reference(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                            ),
                                                                                                                                                                            'implements': _p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'id': 'implements',
                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => v_external_generic.References(
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
                                                                                                                                                    }
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                        )],
                                                                                                                                    )
                                                                                                                                case 'Interface':
                                                                                                                                    return _p_change_context(
                                                                                                                                        $['value'],
                                                                                                                                        ($) => ['Interface', _p_change_context(
                                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                {
                                                                                                                                                    'expected properties': _p.dictionary.literal(
                                                                                                                                                        {
                                                                                                                                                            "references": null,
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            ($) => _p_variables(
                                                                                                                                                () => {
                                                                                                                                                    
                                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                        $['value'],
                                                                                                                                                        {
                                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                                        },
                                                                                                                                                    )
                                                                                                                                                    return {
                                                                                                                                                        'references': _p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                                {
                                                                                                                                                                    'id': 'references',
                                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                            ($) => _p_change_context(
                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                    $,
                                                                                                                                                                    ($) => abort(
                                                                                                                                                                        $,
                                                                                                                                                                    ),
                                                                                                                                                                    {
                                                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                                                            {
                                                                                                                                                                                "extends": null,
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => _p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            {
                                                                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                                                                            },
                                                                                                                                                                        )
                                                                                                                                                                        return {
                                                                                                                                                                            'extends': _p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'id': 'extends',
                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => v_external_generic.References(
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
                                                                                                                                                    }
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                        )],
                                                                                                                                    )
                                                                                                                                default:
                                                                                                                                    return abort(
                                                                                                                                        ['liana', {
                                                                                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                            'range': v_parse_tree_to_location.Value(
                                                                                                                                                $['value'],
                                                                                                                                                {
                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                        }],
                                                                                                                                    )
                                                                                                                            }
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
                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                    },
                                                                                                                ),
                                                                                                                ($) => _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {
                                                                                                                                    "features": null,
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                },
                                                                                                                            )
                                                                                                                            return {
                                                                                                                                'features': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'features',
                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => _p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                            {
                                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        ($) => _p.dictionary.from.dictionary(
                                                                                                                                            $['entries'],
                                                                                                                                        ).map(
                                                                                                                                            ($, id) => _p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                                            {
                                                                                                                                                                "id": null,
                                                                                                                                                                "classifier": null,
                                                                                                                                                                "properties": null,
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => _p_variables(
                                                                                                                                                    () => {
                                                                                                                                                        
                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                            $['value'],
                                                                                                                                                            {
                                                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                                                            },
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
                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => v_external_generic.ID(
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
                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => _p.decide.text(
                                                                                                                                                                        $['option']['token']['value'],
                                                                                                                                                                        ($t): t_out.M3.containments.entities.D.classifier.Classifier.containments.features.D.classifier => {
                                                                                                                                                                            switch ($t) {
                                                                                                                                                                                case 'Property':
                                                                                                                                                                                    return _p_change_context(
                                                                                                                                                                                        $['value'],
                                                                                                                                                                                        ($) => ['Property', _p_change_context(
                                                                                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                                $,
                                                                                                                                                                                                ($) => abort(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                ),
                                                                                                                                                                                                {
                                                                                                                                                                                                    'expected properties': _p.dictionary.literal(
                                                                                                                                                                                                        {
                                                                                                                                                                                                            "references": null,
                                                                                                                                                                                                        },
                                                                                                                                                                                                    ),
                                                                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                                                                },
                                                                                                                                                                                            ),
                                                                                                                                                                                            ($) => _p_variables(
                                                                                                                                                                                                () => {
                                                                                                                                                                                                    
                                                                                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                        $['value'],
                                                                                                                                                                                                        {
                                                                                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                                                                                        },
                                                                                                                                                                                                    )
                                                                                                                                                                                                    return {
                                                                                                                                                                                                        'references': _p_change_context(
                                                                                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                                $,
                                                                                                                                                                                                                ($) => abort(
                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    'id': 'references',
                                                                                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                                                                                },
                                                                                                                                                                                                            ),
                                                                                                                                                                                                            ($) => _p_change_context(
                                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                "type": null,
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                ($) => _p_variables(
                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                                            $['value'],
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                        )
                                                                                                                                                                                                                        return {
                                                                                                                                                                                                                            'type': _p_change_context(
                                                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                        'id': 'type',
                                                                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                ),
                                                                                                                                                                                                                                ($) => v_external_generic.Singular_Reference(
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
                                                                                                                                                                                                    }
                                                                                                                                                                                                },
                                                                                                                                                                                            ),
                                                                                                                                                                                        )],
                                                                                                                                                                                    )
                                                                                                                                                                                case 'Link':
                                                                                                                                                                                    return _p_change_context(
                                                                                                                                                                                        $['value'],
                                                                                                                                                                                        ($) => ['Link', _p_change_context(
                                                                                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                                $,
                                                                                                                                                                                                ($) => abort(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                ),
                                                                                                                                                                                                {
                                                                                                                                                                                                    'expected properties': _p.dictionary.literal(
                                                                                                                                                                                                        {
                                                                                                                                                                                                            "classifier": null,
                                                                                                                                                                                                            "properties": null,
                                                                                                                                                                                                            "references": null,
                                                                                                                                                                                                        },
                                                                                                                                                                                                    ),
                                                                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                                                                },
                                                                                                                                                                                            ),
                                                                                                                                                                                            ($) => _p_variables(
                                                                                                                                                                                                () => {
                                                                                                                                                                                                    
                                                                                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                        $['value'],
                                                                                                                                                                                                        {
                                                                                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                                                                                        },
                                                                                                                                                                                                    )
                                                                                                                                                                                                    return {
                                                                                                                                                                                                        'classifier': _p_change_context(
                                                                                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                                $,
                                                                                                                                                                                                                ($) => abort(
                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    'id': 'classifier',
                                                                                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                                                                                },
                                                                                                                                                                                                            ),
                                                                                                                                                                                                            ($) => _p_change_context(
                                                                                                                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                ($) => _p.decide.text(
                                                                                                                                                                                                                    $['option']['token']['value'],
                                                                                                                                                                                                                    ($t): t_out.M3.containments.entities.D.classifier.Classifier.containments.features.D.classifier.Link.classifier => {
                                                                                                                                                                                                                        switch ($t) {
                                                                                                                                                                                                                            case 'Containment':
                                                                                                                                                                                                                                return _p_change_context(
                                                                                                                                                                                                                                    $['value'],
                                                                                                                                                                                                                                    ($) => ['Containment', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                                                                            $,
                                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                                    )],
                                                                                                                                                                                                                                )
                                                                                                                                                                                                                            case 'Reference':
                                                                                                                                                                                                                                return _p_change_context(
                                                                                                                                                                                                                                    $['value'],
                                                                                                                                                                                                                                    ($) => ['Reference', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                                                                            $,
                                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                                    )],
                                                                                                                                                                                                                                )
                                                                                                                                                                                                                            default:
                                                                                                                                                                                                                                return abort(
                                                                                                                                                                                                                                    ['liana', {
                                                                                                                                                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                                                                                                                                                            $['value'],
                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                                    }],
                                                                                                                                                                                                                                )
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    },
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
                                                                                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                                                                                },
                                                                                                                                                                                                            ),
                                                                                                                                                                                                            ($) => _p_change_context(
                                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                "multiple": null,
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                ($) => _p_variables(
                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                                            $['value'],
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                        )
                                                                                                                                                                                                                        return {
                                                                                                                                                                                                                            'multiple': _p_change_context(
                                                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                        'id': 'multiple',
                                                                                                                                                                                                                                        'document resource identifier': "dummy dri",
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
                                                                                                                                                                                                        'references': _p_change_context(
                                                                                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                                $,
                                                                                                                                                                                                                ($) => abort(
                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    'id': 'references',
                                                                                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                                                                                },
                                                                                                                                                                                                            ),
                                                                                                                                                                                                            ($) => _p_change_context(
                                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                "type": null,
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                ($) => _p_variables(
                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                                            $['value'],
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                        )
                                                                                                                                                                                                                        return {
                                                                                                                                                                                                                            'type': _p_change_context(
                                                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                        'id': 'type',
                                                                                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                ),
                                                                                                                                                                                                                                ($) => v_external_generic.Singular_Reference(
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
                                                                                                                                                                                                    }
                                                                                                                                                                                                },
                                                                                                                                                                                            ),
                                                                                                                                                                                        )],
                                                                                                                                                                                    )
                                                                                                                                                                                default:
                                                                                                                                                                                    return abort(
                                                                                                                                                                                        ['liana', {
                                                                                                                                                                                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                                                                                            'range': v_parse_tree_to_location.Value(
                                                                                                                                                                                                $['value'],
                                                                                                                                                                                                {
                                                                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                                                                },
                                                                                                                                                                                            ),
                                                                                                                                                                                        }],
                                                                                                                                                                                    )
                                                                                                                                                                            }
                                                                                                                                                                        },
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
                                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => _p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                                                                {
                                                                                                                                                                                    "optional": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => _p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                                {
                                                                                                                                                                                    'document resource identifier': "dummy dri",
                                                                                                                                                                                },
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'optional': _p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'optional',
                                                                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                ),
                                                                                                            ),
                                                                                                        }
                                                                                                    },
                                                                                                ),
                                                                                            )],
                                                                                        )
                                                                                    case 'Datatype':
                                                                                        return _p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ['Datatype', _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => _p.decide.text(
                                                                                                    $['option']['token']['value'],
                                                                                                    ($t): t_out.M3.containments.entities.D.classifier.Datatype => {
                                                                                                        switch ($t) {
                                                                                                            case 'Enumeration':
                                                                                                                return _p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ['Enumeration', _p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                            {
                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => _p.dictionary.from.dictionary(
                                                                                                                            $['entries'],
                                                                                                                        ).map(
                                                                                                                            ($, id) => _p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': _p.dictionary.literal(
                                                                                                                                            {
                                                                                                                                                "id": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => _p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                            {
                                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                                            },
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
                                                                                                                                                        'document resource identifier': "dummy dri",
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => v_external_generic.ID(
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
                                                                                                                    )],
                                                                                                                )
                                                                                                            default:
                                                                                                                return abort(
                                                                                                                    ['liana', {
                                                                                                                        'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                                            $['value'],
                                                                                                                            {
                                                                                                                                'document resource identifier': "dummy dri",
                                                                                                                            },
                                                                                                                        ),
                                                                                                                    }],
                                                                                                                )
                                                                                                        }
                                                                                                    },
                                                                                                ),
                                                                                            )],
                                                                                        )
                                                                                    default:
                                                                                        return abort(
                                                                                            ['liana', {
                                                                                                'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                'range': v_parse_tree_to_location.Value(
                                                                                                    $['value'],
                                                                                                    {
                                                                                                        'document resource identifier': "dummy dri",
                                                                                                    },
                                                                                                ),
                                                                                            }],
                                                                                        )
                                                                                }
                                                                            },
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
                    ),
                ),
            }
        },
    ),
)
