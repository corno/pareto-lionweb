import * as _pi from 'pareto-core/dist/interface'

import { Refinement_Error } from "../../../../interface/to_be_generated/refinement_error"

export const $$ = <T>(
    source: _pi.Dictionary<T>,
    expected_properties: _pi.Dictionary<null>,
    path: string,
    abort: _pi.Abort<Refinement_Error>
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
