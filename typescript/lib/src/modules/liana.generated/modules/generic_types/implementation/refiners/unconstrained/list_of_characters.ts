
import * as p_ from 'pareto-core/implementation/refiner'

import * as t_signatures from "../../../declarations/refiners/unconstrained/list_of_characters.js"

import * as v_deserialize from "astn-core/modules/deserialization/implementation/refiners/parse_tree/list_of_characters"

import * as v_unmarshall from "./astn_parse_tree.js"

export const ID: t_signatures.ID = ($, abort, $p) => v_unmarshall.ID(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)

export const Raw_Reference: t_signatures.Raw_Reference = ($, abort, $p) => v_unmarshall.Raw_Reference(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)

export const Singular_Reference: t_signatures.Singular_Reference = ($, abort, $p) => v_unmarshall.Singular_Reference(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)

export const References: t_signatures.References = ($, abort, $p) => v_unmarshall.References(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)

export const Optional_Reference: t_signatures.Optional_Reference = ($, abort, $p) => v_unmarshall.Optional_Reference(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)
