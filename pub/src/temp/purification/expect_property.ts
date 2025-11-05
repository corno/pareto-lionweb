import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import { Refinement_Error } from "./Error"

export const $$ = <T>(
    props: _et.Dictionary<T>,
    prop_name: string,
    path: string,
    abort: _ea.Abort<Refinement_Error>
): T => {
    return props.__get_entry(prop_name).transform(
        ($) => $,
        () => {
            return abort(['missing property', { 'property': prop_name, 'path': path }])
        }
    )
}
