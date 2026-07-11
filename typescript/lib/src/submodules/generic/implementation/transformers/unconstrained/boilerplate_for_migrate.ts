
import * as p_ from 'pareto-core/implementation/transformer'
import p_implement_me from 'pareto-core-dev/implement_me'
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../declarations/transformers/unconstrained/boilerplate_for_migrate.js"

import * as t_out from "../../../interface/data/unconstrained.js"

// import * as v_location from "../../location/transformers/boilerplate_for_migrate.js"

export const ID: t_signatures.ID = ($) => ({
    'key': p_change_context(
        $['key'],
        ($) => $,
    ),
    'id': p_change_context(
        $['id'],
        ($) => $,
    ),
    'source': p_change_context(
        $['source'],
        ($) => p_.from.optional($,
        ).map(
            // ($) => v_location.Range(
            //     $,
            // ),
            ($) => p_implement_me("FFDSFSFDKJ"),
        ),
    ),
})

export const Raw_Reference: t_signatures.Raw_Reference = ($) => ({
    'resolveInfo': p_change_context(
        $['resolveInfo'],
        ($) => $,
    ),
    'reference': p_change_context(
        $['reference'],
        ($) => p_.from.optional($,
        ).map(
            ($) => $,
        ),
    ),
})

export const Singular_Reference: t_signatures.Singular_Reference = ($) => Raw_Reference(
    $,
)

export const References: t_signatures.References = ($) => p_.from.list($,
).map(
    ($) => Raw_Reference(
        $,
    ),
)

export const Optional_Reference: t_signatures.Optional_Reference = ($) => p_.from.optional($,
).map(
    ($) => Raw_Reference(
        $,
    ),
)
