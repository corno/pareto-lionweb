import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = <T>(
    source: _et.Dictionary<T>,
    expected_properties: _et.Dictionary<null>,
    path: string
): _et.Dictionary<T> => {
    const expected: { [key: string]: null } = {}
    expected_properties.map(($, key) => {
        expected[key] = null
    })
    source.map(($, key) => {
        if (expected[key] === undefined) {
            _ea.panic(`unexpected property '${key}' at ${path}`)
        }
    })
    return source
}
