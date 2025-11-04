import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = <T, R>(props: _et.Dictionary<T>, prop_name: string, exists: (value: T) => R, not_exists: () => R): R => {
    return props.__get_entry(prop_name).transform(
        ($) => exists($),
        () => not_exists()
    )
}