import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-dev'

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
        $: _et.Dictionary<Key_Value_Pair<T>>,
    ) => _et.Dictionary<T>
    expect_type: <T>(
        source: _et.Dictionary<T>,
        expected_properties: _et.Dictionary<null>,
        path: string,
    ) => _et.Dictionary<T>
    expect_property: <T>(
        props: _et.Dictionary<T>,
        prop_name: string,
        path: string,
    ) => T
    abort: _ea.Abort<Unmarshall_Specific_Error>
}

export const create_context = (
    abort: _ea.Abort<Unmarshall_Error>
): Refinement_Context => {
    return {
        rekey: <T>(
            $: _et.Dictionary<Key_Value_Pair<T>>,
        ) => rekey($, abort),
        expect_type: <T>(
            source: _et.Dictionary<T>,
            expected_properties: _et.Dictionary<null>,
            path: string,
        ) => expect_type(source, expected_properties, path, abort),
        expect_property: <T>(
            props: _et.Dictionary<T>,
            prop_name: string,
            path: string,
        ) => expect_property(props, prop_name, path, abort),
        abort: ($) => {
            return abort(['specific', $])
        }
    }
}

const expect_property = <T>(
    props: _et.Dictionary<T>,
    prop_name: string,
    path: string,
    abort: _ea.Abort<Unmarshall_Error>
): T => {
    return props.get_entry(prop_name).transform(
        ($) => $,
        () => {
            return abort(['missing property', { 'property': prop_name, 'path': path }])
        }
    )
}

const expect_type = <T>(
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

const rekey = <T>(
    $: _et.Dictionary<Key_Value_Pair<T>>,
    abort: _ea.Abort<Unmarshall_Error>,
): _et.Dictionary<T> => {
    return _ed.implement_me(`rekey`)
    // return o_group($).map(($, key) => {
    //     return o_expect_single_element($).transform(
    //         ($) => $,
    //         () => abort(['expected single element', key])
    //     )
    // })
}