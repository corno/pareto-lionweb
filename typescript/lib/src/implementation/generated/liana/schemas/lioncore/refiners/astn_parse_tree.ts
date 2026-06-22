
import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/dist/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/dist/implementation/refiner/specials/variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lioncore/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/lioncore/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_generic from "../../generic/refiners/astn_parse_tree"

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
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': p_.literal.not_set(),
                },
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
                            'subdocument context': p_.literal.not_set(),
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
                            'subdocument context': p_.literal.not_set(),
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
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'subdocument context': p_.literal.not_set(),
                                    },
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
                                                'subdocument context': p_.literal.not_set(),
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
                            'subdocument context': p_.literal.not_set(),
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
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'subdocument context': p_.literal.not_set(),
                                    },
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
                                                'subdocument context': p_.literal.not_set(),
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
                            'subdocument context': p_.literal.not_set(),
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
                                'subdocument context': p_.literal.not_set(),
                            },
                        ),
                        ($) => p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'subdocument context': p_.literal.not_set(),
                                    },
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
                                                'subdocument context': p_.literal.not_set(),
                                            },
                                        ),
                                        ($) => p_change_context(
                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.dictionary(
                                                $['entries'],
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
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => p_variables(
                                                        () => {
                                                            
                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                $['value'],
                                                                {
                                                                    'subdocument context': p_.literal.not_set(),
                                                                },
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
                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                    },
                                                                                                ),
                                                                                                ($) => p_variables(
                                                                                                    () => {
                                                                                                        
                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                            $['value'],
                                                                                                            {
                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                            },
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
                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            ($) => p_variables(
                                                                                                                                                () => {
                                                                                                                                                    
                                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                        $['value'],
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
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
                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            {
                                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                                            },
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
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            {
                                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                                            },
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
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
                                                                                                                                            ),
                                                                                                                                            ($) => p_variables(
                                                                                                                                                () => {
                                                                                                                                                    
                                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                        $['value'],
                                                                                                                                                        {
                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                        },
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
                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                    },
                                                                                                                                                                ),
                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                    () => {
                                                                                                                                                                        
                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                            $['value'],
                                                                                                                                                                            {
                                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                                            },
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
                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                },
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
                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                },
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
                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                            {
                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                            },
                                                                                                                                        ),
                                                                                                                                        ($) => p_.from.dictionary(
                                                                                                                                            $['entries'],
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
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                    },
                                                                                                                                                ),
                                                                                                                                                ($) => p_variables(
                                                                                                                                                    () => {
                                                                                                                                                        
                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                            $['value'],
                                                                                                                                                            {
                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                            },
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
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                },
                                                                                                                                                                                            ),
                                                                                                                                                                                            ($) => p_variables(
                                                                                                                                                                                                () => {
                                                                                                                                                                                                    
                                                                                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                        $['value'],
                                                                                                                                                                                                        {
                                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                        },
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
                                                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                                            $['value'],
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                                            },
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
                                                                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                },
                                                                                                                                                                                            ),
                                                                                                                                                                                            ($) => p_variables(
                                                                                                                                                                                                () => {
                                                                                                                                                                                                    
                                                                                                                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                        $['value'],
                                                                                                                                                                                                        {
                                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                        },
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
                                                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                                                            },
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
                                                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                                            $['value'],
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                                            },
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
                                                                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                ),
                                                                                                                                                                                                                ($) => p_variables(
                                                                                                                                                                                                                    () => {
                                                                                                                                                                                                                        
                                                                                                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                                                            $['value'],
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                                            },
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
                                                                                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                                },
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
                                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
                                                                                                                                                                        },
                                                                                                                                                                    ),
                                                                                                                                                                    ($) => p_variables(
                                                                                                                                                                        () => {
                                                                                                                                                                            
                                                                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                                                                $['value'],
                                                                                                                                                                                {
                                                                                                                                                                                    'subdocument context': p_.literal.not_set(),
                                                                                                                                                                                },
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
                                                                                                                                                                                            'subdocument context': p_.literal.not_set(),
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
                                                                                                                            {
                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                            },
                                                                                                                        ),
                                                                                                                        ($) => p_.from.dictionary(
                                                                                                                            $['entries'],
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
                                                                                                                                        'subdocument context': p_.literal.not_set(),
                                                                                                                                    },
                                                                                                                                ),
                                                                                                                                ($) => p_variables(
                                                                                                                                    () => {
                                                                                                                                        
                                                                                                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
                                                                                                                                            {
                                                                                                                                                'subdocument context': p_.literal.not_set(),
                                                                                                                                            },
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
                                                                                                                                                        'subdocument context': p_.literal.not_set(),
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
                                                                                                                                'subdocument context': p_.literal.not_set(),
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
                                                                                                        'subdocument context': p_.literal.not_set(),
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
