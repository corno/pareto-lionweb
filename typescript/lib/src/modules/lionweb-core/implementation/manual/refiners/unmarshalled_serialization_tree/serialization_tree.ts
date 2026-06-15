import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_i from 'pareto-core/dist/interface/refiner'
import * as p_temp from 'pareto-core/dist/implementation/transformer'

import * as d_in from "../../../../../../interface/generated/liana/schemas/serialization_tree/data"
import * as d_out from "../../../../interface/data/unmarshalled_serialization_tree"
import * as d_function from "../../../../interface/data/lion_core_from_serialization_tree"


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
    const node = $
    return p_.select.entry(
        $.containments,
        $p.id,
        {
            no_such_entry: ($) => abort({
                'node': node,
                'type': ['missing content', {
                    'type': ['containment', null],
                    'id': $p.id
                }]
            })
        }
    )
}

export const Property: Property = ($, abort, $p) => {
    const node = $
    return p_.select.entry(
        $.properties,
        $p.id,
        {
            no_such_entry: ($) => abort({
                'node': node,
                'type': ['missing content', {
                    'type': ['property', null],
                    'id': $p.id
                }]
            })
        }
    )
}

export const Optional_Property: Optional_Property = ($, abort, $p) => {
    const node = $
    return p_temp.select.possible_entry( //implement in pareto-core
        $.properties,
        $p.id,
    )
}

export const Optional_Reference: Optional_Reference = ($, abort, $p) => {
    const node = $
    const result = p_.select.entry(
        $.references,
        $p.id,
        {
            no_such_entry: ($) => abort({
                'node': node,
                'type': ['missing content', {
                    'type': ['reference', null],
                    'id': $p.id
                }]
            })
        }
    )
    return result.__get_number_of_items() > 1
        ? abort({
            'node': node,
            'type': ['too many feature elements', null]
        })
        : result.__deprecated_get_possible_item_at(
            0,
        )

}

export const Singular_Reference: Singular_Reference = ($, abort, $p) => {
    const node = $
    const result = p_.select.entry(
        $.references,
        $p.id,
        {
            no_such_entry: ($) => abort({
                'node': node,
                'type': ['missing content', {
                    'type': ['reference', null],
                    'id': $p.id
                }]
            })
        }
    )
    return result.__get_number_of_items() > 1
        ? abort({
            'node': node,
            'type': ['too many feature elements', null]
        })
        : result.__deprecated_get_item_at(
            0,
            {
                out_of_bounds: ($) => abort({
                    'node': node,
                    'type': ['missing feature element', null]
                })
            }
        )

}

export const Multiple_References: Multiple_References = ($, abort, $p) => {
    const node = $
    return p_.select.entry(
        $.references,
        $p.id,
        {
            no_such_entry: ($) => abort({
                'node': node,
                'type': ['missing content', {
                    'type': ['reference', null],
                    'id': $p.id
                }]
            })
        }
    )
}