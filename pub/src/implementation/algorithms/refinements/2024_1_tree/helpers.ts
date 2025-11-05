import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { $$ as o_group } from "exupery-standard-library/dist/implementation/operations/impure/dictionary/group"
import { $$ as o_expect_single_element } from "pareto-standard-operations/dist/implementation/operations/impure/list/expect_exactly_one_element"

import * as d_in from "../../../../interface/generated/pareto/schemas/serialization_tree/data_types/source"

export type Unmarshall_Error =
    | ['missing property', { 'property': string, 'path': string }]
    | ['unexpected property', { 'property': string, 'path': string }]
    | ['expected single element', string]
    | ['expected exactly one element for link type of feature', string]
    | ['unknown feature classifier type', string]
    | ['expected exactly one element for property type of feature', string]
    | ['unknown entity classifier type', string]
    | ['unknown classifier type', string]

export type Key_Value_Pair<T> = {
    'key': string,
    'value': T,
}




export const expect_property = <T>(
    props: _et.Dictionary<T>,
    prop_name: string,
    path: string,
    abort: _ea.Abort<Unmarshall_Error>
): T => {
    return props.__get_entry(prop_name).transform(
        ($) => $,
        () => {
            return abort(['missing property', { 'property': prop_name, 'path': path }])
        }
    )
}

export const expect_type = <T>(
    source: _et.Dictionary<T>,
    expected_properties: _et.Dictionary<null>,
    path: string,
    abort: _ea.Abort<Unmarshall_Error>
): _et.Dictionary<T> => {
    const expected: { [key: string]: null } = {}
    expected_properties.map(($, key) => {
        expected[key] = null
    })
    source.map(($, key) => {
        if (expected[key] === undefined) {
            abort(['unexpected property', { 'property': key, 'path': path }])
        }
    })
    return source
}

export const rekey = <T>(
    $: _et.Dictionary<Key_Value_Pair<T>>,
    abort: _ea.Abort<Unmarshall_Error>,
): _et.Dictionary<T> => {
    return o_group($).map(($, key) => {
        return o_expect_single_element($).transform(
            ($) => $,
            () => abort(['expected single element', key])
        )
    })
}

export const expect_name = (
    $: d_in.Node,
    path: string,
    abort: _ea.Abort<Unmarshall_Error>
) => expect_property(
    $.properties,
    "LionCore-builtins:2024.1:LionCore-builtins-INamed-name",
    path,
    abort
)

export const expect_key = (
    $: d_in.Node,
    path: string,
    abort: _ea.Abort<Unmarshall_Error>
) => expect_property(
    $.properties,
    "LionCore-M3:2024.1:IKeyed-key",
    path,
    abort
)
