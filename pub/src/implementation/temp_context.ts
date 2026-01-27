import * as _pi from 'pareto-core/dist/interface'
import * as _pt from 'pareto-core/dist/transformer'
import * as _pdev from 'pareto-core-dev'

export type Unmarshall_Error =
    | ['missing property', { 'property': string, 'path': string }]
    | ['unexpected property', { 'property': string, 'path': string }]
    | ['expected single element', string]
    | ['specific', Unmarshall_Specific_Error]


export type Unmarshall_Specific_Error =
    | ['expected exactly one element for link type of feature', string]
    | ['unknown feature classifier type', string]
    | ['expected exactly one element for property type of feature', string]
    | ['unknown entity classifier type', string]
    | ['unknown classifier type', string]

export type Key_Value_Pair<T> = {
    'key': string,
    'value': T,
}


export type Refinement_Context = {
    rekey: <T>(
        $: _pi.Dictionary<Key_Value_Pair<T>>,
    ) => _pi.Dictionary<T>
    expect_type: <T>(
        source: _pi.Dictionary<T>,
        expected_properties: _pi.Dictionary<null>,
        path: string,
    ) => _pi.Dictionary<T>
    expect_property: <T>(
        props: _pi.Dictionary<T>,
        prop_name: string,
        path: string,
    ) => T
    abort: _pi.Abort<Unmarshall_Specific_Error>
}

export const create_context = (
    abort: _pi.Abort<Unmarshall_Error>
): Refinement_Context => ({
    rekey: <T>(
        $: _pi.Dictionary<Key_Value_Pair<T>>,
    ) => rekey($, abort),
    expect_type: <T>(
        source: _pi.Dictionary<T>,
        expected_properties: _pi.Dictionary<null>,
        path: string,
    ) => expect_type(source, expected_properties, path, abort),
    expect_property: <T>(
        props: _pi.Dictionary<T>,
        prop_name: string,
        path: string,
    ) => expect_property(props, prop_name, path, abort),
    abort: ($) => abort(['specific', $])
})

const expect_property = <T>(
    props: _pi.Dictionary<T>,
    prop_name: string,
    path: string,
    abort: _pi.Abort<Unmarshall_Error>
): T => props.__get_possible_entry(prop_name).__decide(
    ($) => $,
    () => abort(['missing property', { 'property': prop_name, 'path': path }])
)

const expect_type = <T>(
    source: _pi.Dictionary<T>,
    expected_properties: _pi.Dictionary<null>,
    path: string,
    abort: _pi.Abort<Unmarshall_Error>
): _pi.Dictionary<T> => {
    const expected: { [id: string]: null } = {}
    expected_properties.__d_map(($, id) => {
        expected[id] = null
    })
    source.__d_map(($, id) => {
        if (expected[id] === undefined) {
            abort(['unexpected property', { 'property': id, 'path': path }])
        }
    })
    return source
}

const rekey = <T>(
    $: _pi.Dictionary<Key_Value_Pair<T>>,
    abort: _pi.Abort<Unmarshall_Error>,
): _pi.Dictionary<T> => {
    return _pdev.implement_me(`rekey`)
    // return o_group($).__d_map(($, id) => {
    //     return o_expect_single_element($).__decide(
    //         ($) => $,
    //         () => abort(['expected single element', key])
    //     )
    // })
}