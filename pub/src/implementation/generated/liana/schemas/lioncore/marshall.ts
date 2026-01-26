
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/lioncore/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const ID: t_signatures.ID = ($,) => ['optional', $(($,) => ['set', ['group', ['verbose', _p.dictionary.literal(({
    'key': _p.deprecated_cc($['key'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'id': _p.deprecated_cc($['id'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
}))]]], () => ['set', ['group', ['verbose', _p.dictionary.literal(({
    'key': _p.deprecated_cc($['key'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'id': _p.deprecated_cc($['id'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
}))]]])]
export const Raw_Reference: t_signatures.Raw_Reference = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'resolveInfo': _p.deprecated_cc($['resolveInfo'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'reference': _p.deprecated_cc($['reference'], ($,) => ['optional', $(($,) => ['set', ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]], () => ['set', ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]])]),
}))]]
export const M3: t_signatures.M3 = ($,) => ['group', ['verbose', _p.dictionary.literal(({
    'id': _p.deprecated_cc($['id'], ($,) => ID($)),
    'version': _p.deprecated_cc($['version'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'dependencies': _p.deprecated_cc($['dependencies'], ($,) => ['list', $.__l_map(($,) => Raw_Reference($))]),
    'entities': _p.deprecated_cc($['entities'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
        'id': _p.deprecated_cc($['id'], ($,) => ID($)),
        'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
            switch ($[0]) {
                case 'classifier':
                    return _p.ss($, ($,) => ({
                        'option': "classifier",
                        'value': ['group', ['verbose', _p.dictionary.literal(({
                            'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'concept':
                                        return _p.ss($, ($,) => ({
                                            'option': "concept",
                                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                                'abstract': _p.deprecated_cc($['abstract'], ($,) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                                'partition': _p.deprecated_cc($['partition'], ($,) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                                'extends': _p.deprecated_cc($['extends'], ($,) => ['optional', $(($,) => ['set', Raw_Reference($)], () => ['set', Raw_Reference($)])]),
                                                'implements': _p.deprecated_cc($['implements'], ($,) => ['list', $.__l_map(($,) => Raw_Reference($))]),
                                            }))]],
                                        }))
                                    case 'interface':
                                        return _p.ss($, ($,) => ({
                                            'option': "interface",
                                            'value': ['group', ['verbose', _p.dictionary.literal(({
                                                'extends': _p.deprecated_cc($['extends'], ($,) => ['list', $.__l_map(($,) => Raw_Reference($))]),
                                            }))]],
                                        }))
                                    default:
                                        return _p.au($[0])
                                }
                            })]),
                            'features': _p.deprecated_cc($['features'], ($,) => ['dictionary', $.__d_map(($,key,) => ['group', ['verbose', _p.dictionary.literal(({
                                'id': _p.deprecated_cc($['id'], ($,) => ID($)),
                                'optional': _p.deprecated_cc($['optional'], ($,) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                                'type': _p.deprecated_cc($['type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'property':
                                            return _p.ss($, ($,) => ({
                                                'option': "property",
                                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                                    'type': _p.deprecated_cc($['type'], ($,) => Raw_Reference($)),
                                                }))]],
                                            }))
                                        case 'link':
                                            return _p.ss($, ($,) => ({
                                                'option': "link",
                                                'value': ['group', ['verbose', _p.dictionary.literal(({
                                                    'multiple': _p.deprecated_cc($['multiple'], ($,) => ['text', ({
                                                        'delimiter': ['quote', null],
                                                        'value': $,
                                                    })]),
                                                    'type': _p.deprecated_cc($['type'], ($,) => Raw_Reference($)),
                                                    'link type': _p.deprecated_cc($['link type'], ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
                                                        switch ($[0]) {
                                                            case 'containment':
                                                                return _p.ss($, ($,) => ({
                                                                    'option': "containment",
                                                                    'value': ['nothing', null],
                                                                }))
                                                            case 'reference':
                                                                return _p.ss($, ($,) => ({
                                                                    'option': "reference",
                                                                    'value': ['nothing', null],
                                                                }))
                                                            default:
                                                                return _p.au($[0])
                                                        }
                                                    })]),
                                                }))]],
                                            }))
                                        default:
                                            return _p.au($[0])
                                    }
                                })]),
                            }))]])]),
                        }))]],
                    }))
                case 'datatype':
                    return _p.ss($, ($,) => ({
                        'option': "datatype",
                        'value': ['state', _p.decide.state($, ($,): t_out.Value.state => {
                            switch ($[0]) {
                                case 'enumeration':
                                    return _p.ss($, ($,) => ({
                                        'option': "enumeration",
                                        'value': ['dictionary', $.__d_map(($,key,) => ID($))],
                                    }))
                                default:
                                    return _p.au($[0])
                            }
                        })],
                    }))
                default:
                    return _p.au($[0])
            }
        })]),
    }))]])]),
}))]]
