import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/serialization_chunk/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Meta_Pointer: _i_signatures._T_Meta_Pointer = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'language': _pa.cc($['language'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'key': _pa.cc($['key'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'version': _pa.cc($['version'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Targets: _i_signatures._T_Targets = ($, $p) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
    'resolveInfo': _pa.cc($['resolveInfo'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'reference': _pa.cc($['reference'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]],
        () => ['not set', null]
    )]),
})])]
export const Serialization_Chunk: _i_signatures._T_Serialization_Chunk = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'serializationFormatVersion': _pa.cc($['serializationFormatVersion'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'languages': _pa.cc($['languages'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'key': _pa.cc($['key'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'version': _pa.cc($['version'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })])]),
    'nodes': _pa.cc($['nodes'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'id': _pa.cc($['id'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'parent': _pa.cc($['parent'], ($) => ['optional', $.transform(
            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]],
            () => ['not set', null]
        )]),
        'classifier': _pa.cc($['classifier'], ($) => Meta_Pointer(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'properties': _pa.cc($['properties'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'property': _pa.cc($['property'], ($) => Meta_Pointer(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'value': _pa.cc($['value'], ($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })]),
        })])]),
        'references': _pa.cc($['references'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'reference': _pa.cc($['reference'], ($) => Meta_Pointer(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'targets': _pa.cc($['targets'], ($) => Targets(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })])]),
        'containments': _pa.cc($['containments'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
            'containment': _pa.cc($['containment'], ($) => Meta_Pointer(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'children': _pa.cc($['children'], ($) => ['list', $.map(($) => ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })])]),
        })])]),
        'annotations': _pa.cc($['annotations'], ($) => ['list', $.map(($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })])]),
    })])]),
})]
