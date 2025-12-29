import * as _pi from 'pareto-core-interface'

export const $$ = <T, R>(props: _pi.Dictionary<T>, prop_name: string, exists: (value: T) => R, not_exists: () => R): R => {
    return props.get_entry(prop_name).transform(
        ($) => exists($),
        () => not_exists()
    )
}