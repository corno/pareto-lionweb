
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/generic/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/generic/data"

import * as v_location from "../../location/transformers/boilerplate_for_migrate"

export const ID: t_signatures.ID = ($) => ({
    'key': _p_change_context(
        $['key'],
        ($) => $,
    ),
    'id': _p_change_context(
        $['id'],
        ($) => $,
    ),
    'source': _p_change_context(
        $['source'],
        ($) => _p.optional.from.optional(
            $,
        ).map(
            ($) => v_location.Range(
                $,
            ),
        ),
    ),
})

export const Raw_Reference: t_signatures.Raw_Reference = ($) => ({
    'resolveInfo': _p_change_context(
        $['resolveInfo'],
        ($) => $,
    ),
    'reference': _p_change_context(
        $['reference'],
        ($) => _p.optional.from.optional(
            $,
        ).map(
            ($) => $,
        ),
    ),
})

export const Singular_Reference: t_signatures.Singular_Reference = ($) => Raw_Reference(
    $,
)

export const References: t_signatures.References = ($) => _p.list.from.list(
    $,
).map(
    ($) => Raw_Reference(
        $,
    ),
)

export const Optional_Reference: t_signatures.Optional_Reference = ($) => _p.optional.from.optional(
    $,
).map(
    ($) => Raw_Reference(
        $,
    ),
)
