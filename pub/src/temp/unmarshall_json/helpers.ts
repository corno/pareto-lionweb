import * as _et from 'exupery-core-types'

import { Value } from 'exupery-core-rawdata'

export type Helpers = {
    expect_property: ($: _et.Dictionary<Value>, key: string) => Value
    expect_text: (value: Value) => string
    expect_array: (value: Value) => _et.List<Value> 
    expect_optional_null: (value: Value) => _et.Optional_Value<Value>
    expect_verbose_type: (value: Value, allowed_properties: _et.Dictionary<null>) => _et.Dictionary<Value> 
}