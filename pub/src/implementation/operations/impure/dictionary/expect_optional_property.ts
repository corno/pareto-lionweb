import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export const $$ = <T>(props: _et.Dictionary<T>, prop_name: string): _et.Optional_Value<T> => {
    return props.__get_entry(prop_name)
}