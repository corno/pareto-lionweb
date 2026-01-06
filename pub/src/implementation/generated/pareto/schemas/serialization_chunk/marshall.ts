import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/serialization_chunk/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Meta_Pointer: _i_signatures._T_Meta_Pointer = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'language': _pa.deprecated_cc($['language'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'key': _pa.deprecated_cc($['key'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'version': _pa.deprecated_cc($['version'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Targets: _i_signatures._T_Targets = ($, $p) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
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
})])]
export const Serialization_Chunk: _i_signatures._T_Serialization_Chunk = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'serializationFormatVersion': _pa.deprecated_cc($['serializationFormatVersion'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'languages': _pa.deprecated_cc($['languages'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'key': _pa.deprecated_cc($['key'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'version': _pa.deprecated_cc($['version'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })])]),
    'nodes': _pa.deprecated_cc($['nodes'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'id': _pa.deprecated_cc($['id'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'parent': _pa.deprecated_cc($['parent'], ($) => ['optional', $.transform(
            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]],
            () => ['not set', null]
        )]),
        'classifier': _pa.deprecated_cc($['classifier'], ($) => Meta_Pointer(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'properties': _pa.deprecated_cc($['properties'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'property': _pa.deprecated_cc($['property'], ($) => Meta_Pointer(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'value': _pa.deprecated_cc($['value'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        })])]),
        'references': _pa.deprecated_cc($['references'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'reference': _pa.deprecated_cc($['reference'], ($) => Meta_Pointer(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'targets': _pa.deprecated_cc($['targets'], ($) => Targets(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })])]),
        'containments': _pa.deprecated_cc($['containments'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
            'containment': _pa.deprecated_cc($['containment'], ($) => Meta_Pointer(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'children': _pa.deprecated_cc($['children'], ($) => ['list', $.map(($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })])]),
        })])]),
        'annotations': _pa.deprecated_cc($['annotations'], ($) => ['list', $.map(($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })])]),
    })])]),
})]
