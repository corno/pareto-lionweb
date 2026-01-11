    import * as _p from 'pareto-core-transformer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/lioncore/marshall"
    import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
    
    
    export const ID: _i_signatures._T_ID = ($, $p) => ['optional', $.__decide(
        ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _p.dictionary.literal({
            'key': _p.deprecated_cc($['key'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
            'id': _p.deprecated_cc($['id'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        })]],
        () => ['not set', null]
    )]
    export const Raw_Reference: _i_signatures._T_Raw_Reference = ($, $p) => ['verbose group', _p.dictionary.literal({
        'resolveInfo': _p.deprecated_cc($['resolveInfo'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'reference': _p.deprecated_cc($['reference'], ($) => ['optional', $.__decide(
            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]],
            () => ['not set', null]
        )]),
    })]
    export const M3: _i_signatures._T_M3 = ($, $p) => ['verbose group', _p.dictionary.literal({
        'id': _p.deprecated_cc($['id'], ($) => ID(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'version': _p.deprecated_cc($['version'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'dependencies': _p.deprecated_cc($['dependencies'], ($) => ['list', $.__l_map(($) => Raw_Reference(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        ))]),
        'entities': _p.deprecated_cc($['entities'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
            'id': _p.deprecated_cc($['id'], ($) => ID(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'classifier': return _p.ss($, ($) => ({
                        'state': "classifier",
                        'value': ['verbose group', _p.dictionary.literal({
                            'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'concept': return _p.ss($, ($) => ({
                                        'state': "concept",
                                        'value': ['verbose group', _p.dictionary.literal({
                                            'abstract': _p.deprecated_cc($['abstract'], ($) => ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]),
                                            'partition': _p.deprecated_cc($['partition'], ($) => ['text', ({
                                                'delimiter': ['quote', null],
                                                'value': $,
                                            })]),
                                            'extends': _p.deprecated_cc($['extends'], ($) => ['optional', $.__decide(
                                                ($): _i_out._T_Value.SG.optional => ['set', Raw_Reference(
                                                    $,
                                                    {
                                                        'value serializers': $p['value serializers'],
                                                    }
                                                )],
                                                () => ['not set', null]
                                            )]),
                                            'implements': _p.deprecated_cc($['implements'], ($) => ['list', $.__l_map(($) => Raw_Reference(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            ))]),
                                        })],
                                    }))
                                    case 'interface': return _p.ss($, ($) => ({
                                        'state': "interface",
                                        'value': ['verbose group', _p.dictionary.literal({
                                            'extends': _p.deprecated_cc($['extends'], ($) => ['list', $.__l_map(($) => Raw_Reference(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            ))]),
                                        })],
                                    }))
                                    default: return _p.au($[0])
                                }
                            })]),
                            'features': _p.deprecated_cc($['features'], ($) => ['dictionary', $.__d_map(($) => ['verbose group', _p.dictionary.literal({
                                'id': _p.deprecated_cc($['id'], ($) => ID(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                'optional': _p.deprecated_cc($['optional'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                                'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                    switch ($[0]) {
                                        case 'property': return _p.ss($, ($) => ({
                                            'state': "property",
                                            'value': ['verbose group', _p.dictionary.literal({
                                                'type': _p.deprecated_cc($['type'], ($) => Raw_Reference(
                                                    $,
                                                    {
                                                        'value serializers': $p['value serializers'],
                                                    }
                                                )),
                                            })],
                                        }))
                                        case 'link': return _p.ss($, ($) => ({
                                            'state': "link",
                                            'value': ['verbose group', _p.dictionary.literal({
                                                'multiple': _p.deprecated_cc($['multiple'], ($) => ['text', ({
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                })]),
                                                'type': _p.deprecated_cc($['type'], ($) => Raw_Reference(
                                                    $,
                                                    {
                                                        'value serializers': $p['value serializers'],
                                                    }
                                                )),
                                                'link type': _p.deprecated_cc($['link type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                                    switch ($[0]) {
                                                        case 'containment': return _p.ss($, ($) => ({
                                                            'state': "containment",
                                                            'value': ['nothing', null],
                                                        }))
                                                        case 'reference': return _p.ss($, ($) => ({
                                                            'state': "reference",
                                                            'value': ['nothing', null],
                                                        }))
                                                        default: return _p.au($[0])
                                                    }
                                                })]),
                                            })],
                                        }))
                                        default: return _p.au($[0])
                                    }
                                })]),
                            })])]),
                        })],
                    }))
                    case 'datatype': return _p.ss($, ($) => ({
                        'state': "datatype",
                        'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'enumeration': return _p.ss($, ($) => ({
                                    'state': "enumeration",
                                    'value': ['dictionary', $.__d_map(($) => ID(
                                        $,
                                        {
                                            'value serializers': $p['value serializers'],
                                        }
                                    ))],
                                }))
                                default: return _p.au($[0])
                            }
                        })],
                    }))
                    default: return _p.au($[0])
                }
            })]),
        })])]),
    })]
