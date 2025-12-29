import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/serialization_tree/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


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
export const Node: _i_signatures._T_Node = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'classifier': _pa.cc($['classifier'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'properties': _pa.cc($['properties'], ($) => ['dictionary', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
    'containments': _pa.cc($['containments'], ($) => ['dictionary', $.map(($) => ['dictionary', $.map(($) => Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))])]),
    'references': _pa.cc($['references'], ($) => ['dictionary', $.map(($) => Targets(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]),
    'annotations': _pa.cc($['annotations'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
})]
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
    'root node id': _pa.cc($['root node id'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'node tree': _pa.cc($['node tree'], ($) => Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
