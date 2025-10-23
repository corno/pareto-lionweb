import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const expect_property = <T>(props: _et.Dictionary<T>, prop_name: string): T => {
    return props.__get_entry(prop_name).transform(
        ($) => $,
        () => {
            return _ea.panic(`property '${prop_name}' not found`)
        }
    )
}

export const expect_optional_property = <T>(props: _et.Dictionary<T>, prop_name: string): _et.Optional_Value<T> => {
    return props.__get_entry(prop_name)
}

export const expect_type = <T>(source: _et.Dictionary<T>, expected_properties: _et.Dictionary<null>): _et.Dictionary<T> => {
    const expected: { [key: string]: null } = {}
    expected_properties.map(($, key) => {
        expected[key] = null
    })
    source.map(($, key) => {
        if (expected[key] === undefined) {
            _ea.panic(`unexpected property '${key}'`)
        }
    })
    return source
}