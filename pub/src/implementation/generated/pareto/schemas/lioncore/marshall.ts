import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/lioncore/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const ID: _i_signatures._T_ID = ($, $p) => ['optional', $.transform(
    ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _pa.dictionary.literal({
        'key': _pa.deprecated_cc($['key'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'id': _pa.deprecated_cc($['id'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })]],
    () => ['not set', null]
)]
export const Raw_Reference: _i_signatures._T_Raw_Reference = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'resolveInfo': _pa.deprecated_cc($['resolveInfo'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'reference': _pa.deprecated_cc($['reference'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]],
        () => ['not set', null]
    )]),
})]
export const M3: _i_signatures._T_M3 = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'id': _pa.deprecated_cc($['id'], ($) => ID(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'version': _pa.deprecated_cc($['version'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'dependencies': _pa.deprecated_cc($['dependencies'], ($) => ['list', $.map(($) => Raw_Reference(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]),
    'entities': _pa.deprecated_cc($['entities'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'id': _pa.deprecated_cc($['id'], ($) => ID(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'type': _pa.deprecated_cc($['type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'classifier': return _pa.ss($, ($) => ({
                    'state': "classifier",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'type': _pa.deprecated_cc($['type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'concept': return _pa.ss($, ($) => ({
                                    'state': "concept",
                                    'value': ['verbose group', _pa.dictionary.literal({
                                        'abstract': _pa.deprecated_cc($['abstract'], ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]),
                                        'partition': _pa.deprecated_cc($['partition'], ($) => ['text', ({
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        })]),
                                        'extends': _pa.deprecated_cc($['extends'], ($) => ['optional', $.transform(
                                            ($): _i_out._T_Value.SG.optional => ['set', Raw_Reference(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )],
                                            () => ['not set', null]
                                        )]),
                                        'implements': _pa.deprecated_cc($['implements'], ($) => ['list', $.map(($) => Raw_Reference(
                                            $,
                                            {
                                                'value serializers': $p['value serializers'],
                                            }
                                        ))]),
                                    })],
                                }))
                                case 'interface': return _pa.ss($, ($) => ({
                                    'state': "interface",
                                    'value': ['verbose group', _pa.dictionary.literal({
                                        'extends': _pa.deprecated_cc($['extends'], ($) => ['list', $.map(($) => Raw_Reference(
                                            $,
                                            {
                                                'value serializers': $p['value serializers'],
                                            }
                                        ))]),
                                    })],
                                }))
                                default: return _pa.au($[0])
                            }
                        })]),
                        'features': _pa.deprecated_cc($['features'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
                            'id': _pa.deprecated_cc($['id'], ($) => ID(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            'optional': _pa.deprecated_cc($['optional'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                            'type': _pa.deprecated_cc($['type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'property': return _pa.ss($, ($) => ({
                                        'state': "property",
                                        'value': ['verbose group', _pa.dictionary.literal({
                                            'type': _pa.deprecated_cc($['type'], ($) => Raw_Reference(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                        })],
                                    }))
                                    case 'link': return _pa.ss($, ($) => ({
                                        'state': "link",
                                        'value': ['verbose group', _pa.dictionary.literal({
                                            'multiple': _pa.deprecated_cc($['multiple'], ($) => ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]),
                                            'type': _pa.deprecated_cc($['type'], ($) => Raw_Reference(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                            'link type': _pa.deprecated_cc($['link type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                                switch ($[0]) {
                                                    case 'containment': return _pa.ss($, ($) => ({
                                                        'state': "containment",
                                                        'value': ['nothing', null],
                                                    }))
                                                    case 'reference': return _pa.ss($, ($) => ({
                                                        'state': "reference",
                                                        'value': ['nothing', null],
                                                    }))
                                                    default: return _pa.au($[0])
                                                }
                                            })]),
                                        })],
                                    }))
                                    default: return _pa.au($[0])
                                }
                            })]),
                        })])]),
                    })],
                }))
                case 'datatype': return _pa.ss($, ($) => ({
                    'state': "datatype",
                    'value': ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'enumeration': return _pa.ss($, ($) => ({
                                'state': "enumeration",
                                'value': ['dictionary', $.map(($) => ID(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                ))],
                            }))
                            default: return _pa.au($[0])
                        }
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
    })])]),
})]
