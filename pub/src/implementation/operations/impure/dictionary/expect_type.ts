import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import { Refinement_Error } from "../../../../interface/to_be_generated/refinement_error"

export const $$ = <T>(
    source: _et.Dictionary<T>,
    expected_properties: _et.Dictionary<null>,
    path: string,
    abort: _ea.Abort<Refinement_Error>
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
