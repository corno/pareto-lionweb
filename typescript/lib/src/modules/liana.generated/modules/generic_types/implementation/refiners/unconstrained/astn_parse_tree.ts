
import * as p_ from 'pareto-core/implementation/refiner'
import p_implement_me from 'pareto-core-dev/implement_me'

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import p_variables from 'pareto-core/implementation/refiner/specials/variables'

import * as t_signatures from "../../../declarations/refiners/unconstrained/astn_parse_tree.js"

import * as v_unmarshalled_from_parse_tree from "liana-core/modules/value_unmarshalling/implementation/refiners/unmarshalled_value/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/modules/deserialization/implementation/transformers/parse_tree/start_token_range"

// import * as v_external_location from "../../location/refiners/astn_parse_tree.js"

export const ID: t_signatures.ID = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "key": null,
                    "id": null,
                    "source": null,
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
                'key': p_change_context(
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
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'source': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'source',
                            
                        },
                    ),
                    ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )['optional'],
                    ).map(
                        ($) => p_implement_me("FFDSFSFDKJ")
                        // ($) => v_external_location.Range(
                        //     $,
                        //     ($) => abort(
                        //         $,
                        //     ),
                        // ),
                    ),
                ),
            }
        },
    ),
)

export const Raw_Reference: t_signatures.Raw_Reference = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "resolveInfo": null,
                    "reference": null,
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
                'resolveInfo': p_change_context(
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
                'reference': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'reference',
                            
                        },
                    ),
                    ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
)

export const Singular_Reference: t_signatures.Singular_Reference = ($, abort) => Raw_Reference(
    $,
    ($) => abort(
        $,
    ),
)

export const References: t_signatures.References = ($, abort) => p_.from.list(v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
    )['items'],
).map(
    ($) => p_change_context(
        $['value'],
        ($) => Raw_Reference(
            $,
            ($) => abort(
                $,
            ),
        ),
    ),
)

export const Optional_Reference: t_signatures.Optional_Reference = ($, abort) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
        $,
        ($) => abort(
            $,
        ),
    )['optional'],
).map(
    ($) => Raw_Reference(
        $,
        ($) => abort(
            $,
        ),
    ),
)
