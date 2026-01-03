import * as _pi from 'pareto-core-interface'

export type Value =
| ['null', null]
| ['boolean', 
    | ['true', null]
    | ['false', null]
]
| ['number', number]
| ['string', string]
| ['object', Value__object]
| ['array', Value__array]

export type Value__object = _pi.Dictionary<Value>

export type Value__array = _pi.List<Value>