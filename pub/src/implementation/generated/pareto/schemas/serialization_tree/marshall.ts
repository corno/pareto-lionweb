import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/serialization_tree/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


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
export const Node: _i_signatures._T_Node = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'classifier': _pa.deprecated_cc($['classifier'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'properties': _pa.deprecated_cc($['properties'], ($) => ['dictionary', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
    'containments': _pa.deprecated_cc($['containments'], ($) => ['dictionary', $.map(($) => ['dictionary', $.map(($) => Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))])]),
    'references': _pa.deprecated_cc($['references'], ($) => ['dictionary', $.map(($) => Targets(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]),
    'annotations': _pa.deprecated_cc($['annotations'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
})]
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
    'root node id': _pa.deprecated_cc($['root node id'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'node tree': _pa.deprecated_cc($['node tree'], ($) => Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
