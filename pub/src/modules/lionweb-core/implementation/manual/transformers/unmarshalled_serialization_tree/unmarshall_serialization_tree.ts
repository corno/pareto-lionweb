import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

import * as d_in from "../../../../interface/to_be_generated/unmarshalled_serialization_tree"
import * as d_out from "../../../../interface/to_be_generated/unmarshall_serialization_tree"


export type Node_With_Possibly_Unexpected_Content = _pi.Transformer_With_Parameter<
    d_in.Node_With_Possibly_Unexpected_References,
    d_out.Optional_Error,
    {
        'expected containments': _pi.Dictionary<null>
        'expected properties': _pi.Dictionary<null>
        'expected references': _pi.Dictionary<null>
    }
>

export const Node_With_Possibly_Unexpected_Content: Node_With_Possibly_Unexpected_Content = ($, $p) => {

    const unexpected_containments = _p.dictionary.from.dictionary(
        _p.dictionary.from.dictionary(
            $.containments,
        ).join(
            $p['expected containments'],
            ($, other, id): _pi.Optional_Value<null> => _p.decide.optional(
                other,
                () => _p.optional.literal.not_set(),
                () => _p.optional.literal.set(null)
            )
        )
    ).filter(
        ($) => $
    )
    const unexpected_properties = _p.dictionary.from.dictionary(
        _p.dictionary.from.dictionary(
            $.properties,
        ).join(
            $p['expected properties'],
            ($, other, id): _pi.Optional_Value<null> => _p.decide.optional(
                other,
                () => _p.optional.literal.not_set(),
                () => _p.optional.literal.set(null)
            )
        )
    ).filter(
        ($) => $
    )
    const unexpected_references = _p.dictionary.from.dictionary(
        _p.dictionary.from.dictionary(
            $.references,
        ).join(
            $p['expected references'],
            ($, other, id): _pi.Optional_Value<null> => _p.decide.optional(
                other,
                () => _p.optional.literal.not_set(),
                () => _p.optional.literal.set(null)
            )
        )
    ).filter(
        ($) => $
    )

    if (
        unexpected_containments.__get_number_of_entries() === 0
        &&
        unexpected_properties.__get_number_of_entries() === 0
        &&
        unexpected_references.__get_number_of_entries() === 0
    ) {
        return _p.optional.literal.not_set()
    }
    return _p.optional.literal.set<d_out.Error>({
        'type': ['unexpected content', {
            'containments': {
                'unexpected': unexpected_containments,
                'expected': $p['expected containments'],
            },
            'properties': {
                'unexpected': unexpected_properties,
                'expected': $p['expected properties'],
            },
            'references': {
                'unexpected': unexpected_references,
                'expected': $p['expected references'],
            },
        }],
        'node': $
    })

}