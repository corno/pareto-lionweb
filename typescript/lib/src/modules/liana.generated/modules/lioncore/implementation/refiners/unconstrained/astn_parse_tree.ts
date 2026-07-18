
import * as p_ from 'pareto-core/implementation/refiner'
import * as p_di from 'pareto-core/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/implementation/refiner/specials/variables'

import * as t_signatures from "../../../declarations/refiners/unconstrained/astn_parse_tree.js"

import * as t_out from "../../../schemas/unconstrained.js"

import * as v_unmarshalled_from_parse_tree from "liana-core/modules/value_unmarshalling/implementation/refiners/unmarshalled_value/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/modules/deserialization/implementation/transformers/parse_tree/start_token_range"

import * as v_external_generic from "../../../../generic_types/implementation/refiners/unconstrained/astn_parse_tree.js"

export const M3: t_signatures.M3 = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "id": null,
                    "properties": null,
                    "references": null,
                    "containments": null,
                },
            ),
            
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'id': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'id',
                            
                        },
                    ),
                    ($) => v_external_generic.ID(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'properties': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'properties',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': p_.literal.dictionary(
                                    {
                                        "version": null,
                                    },
                                ),
                                
                            },
                        ),
                        ($) => p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                )
                                return {
                                    'version': p_change_context(
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
                'references': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'references',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': p_.literal.dictionary(
                                    {
                                        "dependencies": null,
                                    },
                                ),
                                
                            },
                        ),
                        ($) => p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                )
                                return {
                                    'dependencies': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'dependencies',
                                                
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
                'containments': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'containments',
                            
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.Verbose_Group(
                            $,
                            ($) => abort(
                                $,
                            ),
                            {
                                'expected properties': p_.literal.dictionary(
                                    {
                                        "entities": null,
                                    },
                                ),
                                
                            },
                        ),
                        ($) => p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                )
                                return {
                                    'entities': p_change_context(
                                        v_unmarshalled_from_parse_tree.Property(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'id': 'entities',
                                                
                                            },
                                        ),
                                        ($) => p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                            ($) => p_.from.dictionary($['entries'],
                                            ).map(
                                                ($, id) => p_change_context(
                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'expected properties': p_.literal.dictionary(
                                                                {
                                                                    "id": null,
                                                                    "classifier": null,
                                                                },
                                                            ),
                                                            
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                            )
                                                            return {
                                                                'id': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'id',
                                                                            
                                                                        },
                                                                    ),
                                                                    ($) => v_external_generic.ID(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                                'classifier': p_change_context(
                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                        {
                                                                            'id': 'classifier',
                                                                            
                                                                        },
                                                                    ),
                                                                    ($) => p_change_context(
                                                                        v_unmarshalled_from_parse_tree.State(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        ),
                                                                        ($) => p_decide_text(
                                                                            $['option']['token']['value'],
                                                                            ($t): t_out.M3.containments.entities.D.classifier => {
                                                                                switch ($t) {
                                                                                    case 'Classifier':
                                                                                        return p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ['Classifier', p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                    {
                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                            {
                                                                                                                "classifier": null,
                                                                                                                "containments": null,
                                                                                                            },
                                                                                                        ),
                                                                                                        
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                        )
                                                                                                        return {
                                                                                                            'classifier': p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'id': 'classifier',
                                                                                                                        
                                                                                                                    },
                                                                                                                ),
                                                                                                                ($) => p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    ($) => p_decide_text(
                                                                                                                        $['option']['token']['value'],
                                                                                                                        ($t): t_out.M3.containments.entities.D.classifier.Classifier.classifier => {
                                                                                                                            switch ($t) {
                                                                                                                                case 'Concept':
                                                                                                                                    return p_change_context(
                                                                                                                                        $['value'],
                                                                                                                                        ($) => ['Concept', p_change_context(
                                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                {
                                                                                                                                                    'expected properties': p_.literal.dictionary(
                                                                                                                                                        {
                                                                                                                                                            "properties": null,
                                                                                                                                                            "references": null,
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            ($) => p_variables(
                                                                                                                                                () => {
                                                                                                                                                    
                                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                        $['value'],
                                                                                                                                                    )
                                                                                                                                                    return {
                                                                                                                                                        'properties': p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                                {
                                                                                                                                                                    'id': 'properties',
                                                                                                                                                                    
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                            ($) => p_change_context(
                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                    $,
                                                                                                                                                                    ($) => abort(
                                                                                                                                                                        $,
                                                                                                                                                                    ),
                                                                                                                                                                    {
                                                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                                                            {
                                                                                                                                                                                "abstract": null,
                                                                                                                                                                                "partition": null,
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
                                                                                                                                                                        )
                                                                                                                                                                        return {
                                                                                                                                                                            'abstract': p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'id': 'abstract',
                                                                                                                                                                                        
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                            ),
                                                                                                                                                                            'partition': p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'id': 'partition',
                                                                                                                                                                                        
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
                                                                                                                                                        'references': p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                                {
                                                                                                                                                                    'id': 'references',
                                                                                                                                                                    
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                            ($) => p_change_context(
                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                    $,
                                                                                                                                                                    ($) => abort(
                                                                                                                                                                        $,
                                                                                                                                                                    ),
                                                                                                                                                                    {
                                                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                                                            {
                                                                                                                                                                                "extends": null,
                                                                                                                                                                                "implements": null,
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
                                                                                                                                                                        )
                                                                                                                                                                        return {
                                                                                                                                                                            'extends': p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'id': 'extends',
                                                                                                                                                                                        
                                                                                                                                                                                    },
                                                                                                                                                                                ),
                                                                                                                                                                                ($) => v_external_generic.Optional_Reference(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                ),
                                                                                                                                                                            ),
                                                                                                                                                                            'implements': p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'id': 'implements',
                                                                                                                                                                                        
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
                                                                                                                                    return p_change_context(
                                                                                                                                        $['value'],
                                                                                                                                        ($) => ['Interface', p_change_context(
                                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                $,
                                                                                                                                                ($) => abort(
                                                                                                                                                    $,
                                                                                                                                                ),
                                                                                                                                                {
                                                                                                                                                    'expected properties': p_.literal.dictionary(
                                                                                                                                                        {
                                                                                                                                                            "references": null,
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            ($) => p_variables(
                                                                                                                                                () => {
                                                                                                                                                    
                                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                        $['value'],
                                                                                                                                                    )
                                                                                                                                                    return {
                                                                                                                                                        'references': p_change_context(
                                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                $,
                                                                                                                                                                ($) => abort(
                                                                                                                                                                    $,
                                                                                                                                                                ),
                                                                                                                                                                {
                                                                                                                                                                    'id': 'references',
                                                                                                                                                                    
                                                                                                                                                                },
                                                                                                                                                            ),
                                                                                                                                                            ($) => p_change_context(
                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                    $,
                                                                                                                                                                    ($) => abort(
                                                                                                                                                                        $,
                                                                                                                                                                    ),
                                                                                                                                                                    {
                                                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                                                            {
                                                                                                                                                                                "extends": null,
                                                                                                                                                                            },
                                                                                                                                                                        ),
                                                                                                                                                                        
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
                                                                                                                                                                        )
                                                                                                                                                                        return {
                                                                                                                                                                            'extends': p_change_context(
                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                    $,
                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                        $,
                                                                                                                                                                                    ),
                                                                                                                                                                                    {
                                                                                                                                                                                        'id': 'extends',
                                                                                                                                                                                        
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
                                                                                                                                            ),
                                                                                                                                        }],
                                                                                                                                    )
                                                                                                                            }
                                                                                                                        },
                                                                                                                    ),
                                                                                                                ),
                                                                                                            ),
                                                                                                            'containments': p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                    {
                                                                                                                        'id': 'containments',
                                                                                                                        
                                                                                                                    },
                                                                                                                ),
                                                                                                                ($) => p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                {
                                                                                                                                    "features": null,
                                                                                                                                },
                                                                                                                            ),
                                                                                                                            
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                            )
                                                                                                                            return {
                                                                                                                                'features': p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'features',
                                                                                                                                            
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                        ),
                                                                                                                                        ($) => p_.from.dictionary($['entries'],
                                                                                                                                        ).map(
                                                                                                                                            ($, id) => p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                                            {
                                                                                                                                                                "id": null,
                                                                                                                                                                "classifier": null,
                                                                                                                                                                "properties": null,
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                        
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => p_variables(
                                                                                                                                                    () => {
                                                                                                                                                        
                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                            $['value'],
                                                                                                                                                        )
                                                                                                                                                        return {
                                                                                                                                                            'id': p_change_context(
                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                    $,
                                                                                                                                                                    ($) => abort(
                                                                                                                                                                        $,
                                                                                                                                                                    ),
                                                                                                                                                                    {
                                                                                                                                                                        'id': 'id',
                                                                                                                                                                        
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => v_external_generic.ID(
                                                                                                                                                                    $,
                                                                                                                                                                    ($) => abort(
                                                                                                                                                                        $,
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            'classifier': p_change_context(
                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                    $,
                                                                                                                                                                    ($) => abort(
                                                                                                                                                                        $,
                                                                                                                                                                    ),
                                                                                                                                                                    {
                                                                                                                                                                        'id': 'classifier',
                                                                                                                                                                        
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.State(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => p_decide_text(
                                                                                                                                                                        $['option']['token']['value'],
                                                                                                                                                                        ($t): t_out.M3.containments.entities.D.classifier.Classifier.containments.features.D.classifier => {
                                                                                                                                                                            switch ($t) {
                                                                                                                                                                                case 'Property':
                                                                                                                                                                                    return p_change_context(
                                                                                                                                                                                        $['value'],
                                                                                                                                                                                        ($) => ['Property', p_change_context(
                                                                                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                                $,
                                                                                                                                                                                                ($) => abort(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                ),
                                                                                                                                                                                                {
                                                                                                                                                                                                    'expected properties': p_.literal.dictionary(
                                                                                                                                                                                                        {
                                                                                                                                                                                                            "references": null,
                                                                                                                                                                                                        },
                                                                                                                                                                                                    ),
                                                                                                                                                                                                    
                                                                                                                                                                                                },
                                                                                                                                                                                            ),
                                                                                                                                                                                            ($) => p_variables(
                                                                                                                                                                                                () => {
                                                                                                                                                                                                    
                                                                                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                        $['value'],
                                                                                                                                                                                                    )
                                                                                                                                                                                                    return {
                                                                                                                                                                                                        'references': p_change_context(
                                                                                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                                $,
                                                                                                                                                                                                                ($) => abort(
                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    'id': 'references',
                                                                                                                                                                                                                    
                                                                                                                                                                                                                },
                                                                                                                                                                                                            ),
                                                                                                                                                                                                            ($) => p_change_context(
                                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                "type": null,
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                        
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                                            $['value'],
                                                                                                                                                                                                                        )
                                                                                                                                                                                                                        return {
                                                                                                                                                                                                                            'type': p_change_context(
                                                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                        'id': 'type',
                                                                                                                                                                                                                                        
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
                                                                                                                                                                                    return p_change_context(
                                                                                                                                                                                        $['value'],
                                                                                                                                                                                        ($) => ['Link', p_change_context(
                                                                                                                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                                $,
                                                                                                                                                                                                ($) => abort(
                                                                                                                                                                                                    $,
                                                                                                                                                                                                ),
                                                                                                                                                                                                {
                                                                                                                                                                                                    'expected properties': p_.literal.dictionary(
                                                                                                                                                                                                        {
                                                                                                                                                                                                            "classifier": null,
                                                                                                                                                                                                            "properties": null,
                                                                                                                                                                                                            "references": null,
                                                                                                                                                                                                        },
                                                                                                                                                                                                    ),
                                                                                                                                                                                                    
                                                                                                                                                                                                },
                                                                                                                                                                                            ),
                                                                                                                                                                                            ($) => p_variables(
                                                                                                                                                                                                () => {
                                                                                                                                                                                                    
                                                                                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                        $['value'],
                                                                                                                                                                                                    )
                                                                                                                                                                                                    return {
                                                                                                                                                                                                        'classifier': p_change_context(
                                                                                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                                $,
                                                                                                                                                                                                                ($) => abort(
                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    'id': 'classifier',
                                                                                                                                                                                                                    
                                                                                                                                                                                                                },
                                                                                                                                                                                                            ),
                                                                                                                                                                                                            ($) => p_change_context(
                                                                                                                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                ($) => p_decide_text(
                                                                                                                                                                                                                    $['option']['token']['value'],
                                                                                                                                                                                                                    ($t): t_out.M3.containments.entities.D.classifier.Classifier.containments.features.D.classifier.Link.classifier => {
                                                                                                                                                                                                                        switch ($t) {
                                                                                                                                                                                                                            case 'Containment':
                                                                                                                                                                                                                                return p_change_context(
                                                                                                                                                                                                                                    $['value'],
                                                                                                                                                                                                                                    ($) => ['Containment', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                                                                            $,
                                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                                    )],
                                                                                                                                                                                                                                )
                                                                                                                                                                                                                            case 'Reference':
                                                                                                                                                                                                                                return p_change_context(
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
                                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                                    }],
                                                                                                                                                                                                                                )
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                ),
                                                                                                                                                                                                            ),
                                                                                                                                                                                                        ),
                                                                                                                                                                                                        'properties': p_change_context(
                                                                                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                                $,
                                                                                                                                                                                                                ($) => abort(
                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    'id': 'properties',
                                                                                                                                                                                                                    
                                                                                                                                                                                                                },
                                                                                                                                                                                                            ),
                                                                                                                                                                                                            ($) => p_change_context(
                                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                "multiple": null,
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                        
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                                            $['value'],
                                                                                                                                                                                                                        )
                                                                                                                                                                                                                        return {
                                                                                                                                                                                                                            'multiple': p_change_context(
                                                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                        'id': 'multiple',
                                                                                                                                                                                                                                        
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
                                                                                                                                                                                                        'references': p_change_context(
                                                                                                                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                                $,
                                                                                                                                                                                                                ($) => abort(
                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    'id': 'references',
                                                                                                                                                                                                                    
                                                                                                                                                                                                                },
                                                                                                                                                                                                            ),
                                                                                                                                                                                                            ($) => p_change_context(
                                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                "type": null,
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                        
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                                            $['value'],
                                                                                                                                                                                                                        )
                                                                                                                                                                                                                        return {
                                                                                                                                                                                                                            'type': p_change_context(
                                                                                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                                                                    $,
                                                                                                                                                                                                                                    ($) => abort(
                                                                                                                                                                                                                                        $,
                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                        'id': 'type',
                                                                                                                                                                                                                                        
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
                                                                                                                                                                                            ),
                                                                                                                                                                                        }],
                                                                                                                                                                                    )
                                                                                                                                                                            }
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                ),
                                                                                                                                                            ),
                                                                                                                                                            'properties': p_change_context(
                                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                    $,
                                                                                                                                                                    ($) => abort(
                                                                                                                                                                        $,
                                                                                                                                                                    ),
                                                                                                                                                                    {
                                                                                                                                                                        'id': 'properties',
                                                                                                                                                                        
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => p_change_context(
                                                                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                                                        $,
                                                                                                                                                                        ($) => abort(
                                                                                                                                                                            $,
                                                                                                                                                                        ),
                                                                                                                                                                        {
                                                                                                                                                                            'expected properties': p_.literal.dictionary(
                                                                                                                                                                                {
                                                                                                                                                                                    "optional": null,
                                                                                                                                                                                },
                                                                                                                                                                            ),
                                                                                                                                                                            
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                            )
                                                                                                                                                                            return {
                                                                                                                                                                                'optional': p_change_context(
                                                                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                                                        $,
                                                                                                                                                                                        ($) => abort(
                                                                                                                                                                                            $,
                                                                                                                                                                                        ),
                                                                                                                                                                                        {
                                                                                                                                                                                            'id': 'optional',
                                                                                                                                                                                            
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
                                                                                        return p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ['Datatype', p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => p_decide_text(
                                                                                                    $['option']['token']['value'],
                                                                                                    ($t): t_out.M3.containments.entities.D.classifier.Datatype => {
                                                                                                        switch ($t) {
                                                                                                            case 'Enumeration':
                                                                                                                return p_change_context(
                                                                                                                    $['value'],
                                                                                                                    ($) => ['Enumeration', p_change_context(
                                                                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => p_.from.dictionary($['entries'],
                                                                                                                        ).map(
                                                                                                                            ($, id) => p_change_context(
                                                                                                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                    $,
                                                                                                                                    ($) => abort(
                                                                                                                                        $,
                                                                                                                                    ),
                                                                                                                                    {
                                                                                                                                        'expected properties': p_.literal.dictionary(
                                                                                                                                            {
                                                                                                                                                "id": null,
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                        )
                                                                                                                                        return {
                                                                                                                                            'id': p_change_context(
                                                                                                                                                v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        $,
                                                                                                                                                    ),
                                                                                                                                                    {
                                                                                                                                                        'id': 'id',
                                                                                                                                                        
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
