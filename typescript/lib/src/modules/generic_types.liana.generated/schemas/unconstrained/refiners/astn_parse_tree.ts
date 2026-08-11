
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/modules/value_unmarshalling/schemas/unmarshalling/schema"

import * as i_out from "../schema.js"

import * as i_in from "astn-core/modules/deserialization/schemas/parse_tree/schema"

namespace declarations {
    export namespace ID_ {

        export type I = i_in.Value

        export type O = i_out.ID

        export type E = i_generic.Error

        export namespace P {

        }

    }

    export type ID_ = (
        context: ID_.I,
        abort: p_i.Abort<ID_.E>,
    ) => ID_.O

    export namespace Raw_Reference_ {

        export type I = i_in.Value

        export type O = i_out.Raw_Reference

        export type E = i_generic.Error

        export namespace P {

        }

    }

    export type Raw_Reference_ = (
        context: Raw_Reference_.I,
        abort: p_i.Abort<Raw_Reference_.E>,
    ) => Raw_Reference_.O

    export namespace Singular_Reference_ {

        export type I = i_in.Value

        export type O = i_out.Singular_Reference

        export type E = i_generic.Error

        export namespace P {

        }

    }

    export type Singular_Reference_ = (
        context: Singular_Reference_.I,
        abort: p_i.Abort<Singular_Reference_.E>,
    ) => Singular_Reference_.O

    export namespace References_ {

        export type I = i_in.Value

        export type O = i_out.References

        export type E = i_generic.Error

        export namespace P {

        }

    }

    export type References_ = (
        context: References_.I,
        abort: p_i.Abort<References_.E>,
    ) => References_.O

    export namespace Optional_Reference_ {

        export type I = i_in.Value

        export type O = i_out.Optional_Reference

        export type E = i_generic.Error

        export namespace P {

        }

    }

    export type Optional_Reference_ = (
        context: Optional_Reference_.I,
        abort: p_i.Abort<Optional_Reference_.E>,
    ) => Optional_Reference_.O
}

import * as p_ from 'pareto-core/implementation/refiner'
import p_implement_me from 'pareto-core-dev/implement_me'

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import p_variables from 'pareto-core/implementation/refiner/specials/variables'

import * as v_unmarshalled_from_parse_tree from "liana-core/modules/value_unmarshalling/schemas/unmarshalled_value/refiners/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/modules/deserialization/schemas/parse_tree/transformers/start_token_range"

// import * as v_external_location from "../../location/refiners/astn_parse_tree.js"

export const ID: declarations.ID_ = ($, abort) => p_change_context(
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

export const Raw_Reference: declarations.Raw_Reference_ = ($, abort) => p_change_context(
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

export const Singular_Reference: declarations.Singular_Reference_ = ($, abort) => Raw_Reference(
    $,
    ($) => abort(
        $,
    ),
)

export const References: declarations.References_ = ($, abort) => p_.from.list(v_unmarshalled_from_parse_tree.List(
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

export const Optional_Reference: declarations.Optional_Reference_ = ($, abort) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
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
