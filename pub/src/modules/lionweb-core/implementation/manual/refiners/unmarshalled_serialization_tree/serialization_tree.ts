import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

import * as d_in from "../../../../../../interface/generated/liana/schemas/serialization_tree/data"
import * as d_out from "../../../../interface/to_be_generated/unmarshalled_serialization_tree"
import * as d_function from "../../../../interface/to_be_generated/unmarshall_serialization_tree"


export type Property = _pi.Refiner_With_Parameter<
    d_out.Property,
    d_function.Error,
    d_in.Node,
    {
        'id': string
    }
>
export type Optional_Property = _pi.Refiner_With_Parameter<
    d_out.Optional_Property,
    d_function.Error,
    d_in.Node,
    {
        'id': string
    }
>
export type Singular_Containment = _pi.Refiner_With_Parameter<
    d_out.Singular_Containment,
    d_function.Error,
    d_in.Node,
    {
        'id': string
    }
>
export type Optional_Containment = _pi.Refiner_With_Parameter<
    d_out.Optional_Containment,
    d_function.Error,
    d_in.Node,
    {
        'id': string
    }
>
export type Multiple_Containments = _pi.Refiner_With_Parameter<
    d_out.Multiple_Containments,
    d_function.Error,
    d_in.Node,
    {
        'id': string
    }
>

export type Optional_Reference = _pi.Refiner_With_Parameter<
    d_out.Optional_Reference,
    d_function.Error,
    d_in.Node,
    {
        'id': string
    }
>

export type Singular_Reference = _pi.Refiner_With_Parameter<
    d_out.Singular_Reference,
    d_function.Error,
    d_in.Node,
    {
        'id': string
    }
>

export type Multiple_References = _pi.Refiner_With_Parameter<
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
    return _p.select.entry(
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
    return _p.select.entry(
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
    return _p.select.possible_entry( //implement in pareto-core
        $.properties,
        $p.id,
    )
}

export const Optional_Reference: Optional_Reference = ($, abort, $p) => {
    const node = $
    const result = _p.select.entry(
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
    const result = _p.select.entry(
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
    return _p.select.entry(
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