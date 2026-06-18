
import * as p_ from 'pareto-core/dist/implementation/transformer'

import p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/generic/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/generic/data"

import * as v_location from "../../location/transformers/boilerplate_for_migrate"

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
        ($) => p_.from.optional(
            $,
        ).map(
            ($) => v_location.Range(
                $,
            ),
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
        ($) => p_.from.optional(
            $,
        ).map(
            ($) => $,
        ),
    ),
})

export const Singular_Reference: t_signatures.Singular_Reference = ($) => Raw_Reference(
    $,
)

export const References: t_signatures.References = ($) => p_.from.list(
    $,
).map(
    ($) => Raw_Reference(
        $,
    ),
)

export const Optional_Reference: t_signatures.Optional_Reference = ($) => p_.from.optional(
    $,
).map(
    ($) => Raw_Reference(
        $,
    ),
)
