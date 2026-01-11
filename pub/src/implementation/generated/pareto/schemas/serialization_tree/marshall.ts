import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/serialization_tree/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Targets: _i_signatures._T_Targets = ($, $p) => ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
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
})])]
export const Node: _i_signatures._T_Node = ($, $p) => ['verbose group', _p.dictionary.literal({
    'classifier': _p.deprecated_cc($['classifier'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'properties': _p.deprecated_cc($['properties'], ($) => ['dictionary', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
    'containments': _p.deprecated_cc($['containments'], ($) => ['dictionary', $.map(($) => ['dictionary', $.map(($) => Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))])]),
    'references': _p.deprecated_cc($['references'], ($) => ['dictionary', $.map(($) => Targets(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]),
    'annotations': _p.deprecated_cc($['annotations'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
})]
export const Serialization_Chunk: _i_signatures._T_Serialization_Chunk = ($, $p) => ['verbose group', _p.dictionary.literal({
    'serializationFormatVersion': _p.deprecated_cc($['serializationFormatVersion'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'languages': _p.deprecated_cc($['languages'], ($) => ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
        'key': _p.deprecated_cc($['key'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'version': _p.deprecated_cc($['version'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
    })])]),
    'root node id': _p.deprecated_cc($['root node id'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'node tree': _p.deprecated_cc($['node tree'], ($) => Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
