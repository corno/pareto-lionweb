import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/m3/marshall"


export const M3: _i_signatures._T_M3 = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'dependencies': _pa.cc($['dependencies'], ($) => Raw_References(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'entities': _pa.cc($['entities'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'key': _pa.cc($['key'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'name': _pa.cc($['name'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'classifier': return _pa.ss($, ($) => ({
                    'state': "classifier",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'features': _pa.cc($['features'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                            'feature type': _pa.cc($['feature type'], ($) => ['optional', $.transform(
                                ($): _i_out._T_Value.SG.optional => ['set', Raw_References(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )],
                                () => ['not set', null]
                            )]),
                            'key': _pa.cc($['key'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                            'multiple': _pa.cc($['multiple'], ($) => ['optional', $.transform(
                                ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]],
                                () => ['not set', null]
                            )]),
                            'name': _pa.cc($['name'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                            'optional': _pa.cc($['optional'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                            'property type': _pa.cc($['property type'], ($) => ['optional', $.transform(
                                ($): _i_out._T_Value.SG.optional => ['set', Raw_References(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )],
                                () => ['not set', null]
                            )]),
                        })])]),
                        'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'concept': return _pa.ss($, ($) => ({
                                    'state': "concept",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'abstract': _pa.cc($['abstract'], ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]),
                                        'extends': _pa.cc($['extends'], ($) => Raw_References(
                                            $,
                                            {
                                                'value serializers': $p['value serializers'],
                                            }
                                        )),
                                        'implements': _pa.cc($['implements'], ($) => Raw_References(
                                            $,
                                            {
                                                'value serializers': $p['value serializers'],
                                            }
                                        )),
                                        'partition': _pa.cc($['partition'], ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]),
                                    })],
                                }))
                                case 'interface': return _pa.ss($, ($) => ({
                                    'state': "interface",
                                    'value': ['verbose group', _pa.dictionary_literal({
                                        'extends': _pa.cc($['extends'], ($) => Raw_References(
                                            $,
                                            {
                                                'value serializers': $p['value serializers'],
                                            }
                                        )),
                                    })],
                                }))
                                default: return _pa.au($[0])
                            }
                        })]),
                    })],
                }))
                case 'datatype': return _pa.ss($, ($) => ({
                    'state': "datatype",
                    'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'enumeration': return _pa.ss($, ($) => ({
                                'state': "enumeration",
                                'value': ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                                    'key': _pa.cc($['key'], ($) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                    'name': _pa.cc($['name'], ($) => ['text', ({
                                        'delimiter': ['quote', null],
                                        'value': $,
                                    })]),
                                })])],
                            }))
                            default: return _pa.au($[0])
                        }
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
    })])]),
    'key': _pa.cc($['key'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'name': _pa.cc($['name'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'version': _pa.cc($['version'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Raw_References: _i_signatures._T_Raw_References = ($, $p) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
    'reference': _pa.cc($['reference'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]],
        () => ['not set', null]
    )]),
    'resolveInfo': _pa.cc($['resolveInfo'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})])]
