import * as _pi from 'pareto-core-interface'

import { Refinement_Error } from "../../../../interface/to_be_generated/refinement_error"

export const $$ = <T>(
    source: _pi.Dictionary<T>,
    expected_properties: _pi.Dictionary<null>,
    path: string,
    abort: _pi.Abort<Refinement_Error>
): _pi.Dictionary<T> => {
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
