import * as p_ from 'pareto-core/implementation/refiner'
import * as p_i from 'pareto-core/interface/refiner'
import * as p_temp from 'pareto-core/implementation/transformer'

import * as d_in from "../../../../../../interface/generated/liana/schemas/serialization_tree/data.js"
import * as d_out from "../../../../interface/data/unmarshalled_serialization_tree.js"
import * as d_function from "../../../../interface/data/lion_core_from_serialization_tree.js"


export type Property = p_i.Refiner_With_Parameter<
    d_out.Property,
    d_function.Error,
    d_in.Node,
    {
        'id': string
    }
>
export type Optional_Property = p_i.Refiner_With_Parameter<
    d_out.Optional_Property,
    d_function.Error,
    d_in.Node,
    {
        'id': string
    }
>
export type Singular_Containment = p_i.Refiner_With_Parameter<
    d_out.Singular_Containment,
    d_function.Error,
    d_in.Node,
    {
        'id': string
    }
>
export type Optional_Containment = p_i.Refiner_With_Parameter<
    d_out.Optional_Containment,
    d_function.Error,
    d_in.Node,
    {
        'id': string
    }
>
export type Multiple_Containments = p_i.Refiner_With_Parameter<
    d_out.Multiple_Containments,
    d_function.Error,
    d_in.Node,
    {
        'id': string
    }
>

export type Optional_Reference = p_i.Refiner_With_Parameter<
    d_out.Optional_Reference,
    d_function.Error,
    d_in.Node,
    {
        'id': string
    }
>

export type Singular_Reference = p_i.Refiner_With_Parameter<
    d_out.Singular_Reference,
    d_function.Error,
    d_in.Node,
    {
        'id': string
    }
>

export type Multiple_References = p_i.Refiner_With_Parameter<
    d_out.Multiple_References,
    d_function.Error,
    d_in.Node,
    {
        'id': string
    }
>

//implementations

export const Multiple_Containments: Multiple_Containments = ($, abort, $p) => {
    return p_.from.dictionary($.containments).get_entry(
        $p.id,
        {
            no_such_entry: () => abort({
                'node': $,
                'type': ['missing content', {
                    'type': ['containment', null],
                    'id': $p.id
                }]
            })
        }
    )
}

export const Property: Property = ($, abort, $p) => {
    return p_.from.dictionary($.properties).get_entry(
        $p.id,
        {
            no_such_entry: () => abort({
                'node': $,
                'type': ['missing content', {
                    'type': ['property', null],
                    'id': $p.id
                }]
            })
        }
    )
}

export const Optional_Property: Optional_Property = ($, abort, $p) => {
    return p_.from.dictionary($.properties).get_possible_entry( //implement in pareto-core
        $p.id,
    )
}

export const Optional_Reference: Optional_Reference = ($, abort, $p) => {
    const result = p_.from.dictionary($.references).get_entry(
        $p.id,
        {
            no_such_entry: () => abort({
                'node': $,
                'type': ['missing content', {
                    'type': ['reference', null],
                    'id': $p.id
                }]
            })
        }
    )
    return p_temp.from.list(result).amount_of_items() > 1
        ? abort({
            'node': $,
            'type': ['too many feature elements', null]
        })
        : result.__deprecated_get_possible_item_at(
            0,
        )

}

export const Singular_Reference: Singular_Reference = ($, abort, $p) => {
    const result = p_.from.dictionary($.references).get_entry(
        $p.id,
        {
            no_such_entry: () => abort({
                'node': $,
                'type': ['missing content', {
                    'type': ['reference', null],
                    'id': $p.id
                }]
            })
        }
    )
    return p_temp.from.list(result).on_has_single_item(
        ($) => $,
        () => abort({
            'node': $,
            'type': ['too many feature elements', null]
        }),
        () => abort({
            'node': $,
            'type': ['missing feature element', null]
        })
    )

}

export const Multiple_References: Multiple_References = ($, abort, $p) => {
    return p_.from.dictionary($.references).get_entry(
        $p.id,
        {
            no_such_entry: () => abort({
                'node': $,
                'type': ['missing content', {
                    'type': ['reference', null],
                    'id': $p.id
                }]
            })
        }
    )
}