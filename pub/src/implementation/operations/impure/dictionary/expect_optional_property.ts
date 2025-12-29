import * as _pi from 'pareto-core-interface'

export const $$ = <T>(props: _pi.Dictionary<T>, prop_name: string): _pi.Optional_Value<T> => {
    return props.get_entry(prop_name)
}