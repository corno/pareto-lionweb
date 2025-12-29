import * as _pi from 'pareto-core-interface'

import { Value } from 'exupery-core-rawdata'

export type Helpers = {
    expect_property: ($: _pi.Dictionary<Value>, key: string) => Value
    expect_text: (value: Value) => string
    expect_array: (value: Value) => _pi.List<Value> 
    expect_optional_null: (value: Value) => _pi.Optional_Value<Value>
    expect_verbose_type: (value: Value, allowed_properties: _pi.Dictionary<null>) => _pi.Dictionary<Value> 
}