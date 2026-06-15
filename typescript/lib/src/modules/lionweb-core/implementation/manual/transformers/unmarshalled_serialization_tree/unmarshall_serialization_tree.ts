import * as p_ti from 'pareto-core/dist/transformer/interface'
import * as p_di from 'pareto-core/dist/data/interface'
import * as pt from 'pareto-core/dist/transformer/implementation'

import * as d_in from "../../../../interface/to_be_generated/unmarshalled_serialization_tree"
import * as d_out from "../../../../interface/to_be_generated/lion_core_from_serialization_tree"


export type Node_With_Possibly_Unexpected_Content = p_ti.Transformer_With_Parameter<
    d_in.Node_With_Possibly_Unexpected_References,
    d_out.Optional_Error,
    {
        'expected containments': p_di.Dictionary<null>
        'expected properties': p_di.Dictionary<null>
        'expected references': p_di.Dictionary<null>
    }
>

export const Node_With_Possibly_Unexpected_Content: Node_With_Possibly_Unexpected_Content = ($, $p) => {

    const unexpected_containments = pt.dictionary.from.dictionary(
        pt.dictionary.from.dictionary(
            $.containments,
        ).join(
            $p['expected containments'],
            ($, other, id): p_di.Optional_Value<null> => pt.decide.optional(
                other,
                () => pt.optional.literal.not_set(),
                () => pt.optional.literal.set(null)
            )
        )
    ).map_optionally(
        ($) => $
    )
    const unexpected_properties = pt.dictionary.from.dictionary(
        pt.dictionary.from.dictionary(
            $.properties,
        ).join(
            $p['expected properties'],
            ($, other, id): p_di.Optional_Value<null> => pt.decide.optional(
                other,
                () => pt.optional.literal.not_set(),
                () => pt.optional.literal.set(null)
            )
        )
    ).map_optionally(
        ($) => $
    )
    const unexpected_references = pt.dictionary.from.dictionary(
        pt.dictionary.from.dictionary(
            $.references,
        ).join(
            $p['expected references'],
            ($, other, id): p_di.Optional_Value<null> => pt.decide.optional(
                other,
                () => pt.optional.literal.not_set(),
                () => pt.optional.literal.set(null)
            )
        )
    ).map_optionally(
        ($) => $
    )

    if (
        unexpected_containments.__get_number_of_entries() === 0
        &&
        unexpected_properties.__get_number_of_entries() === 0
        &&
        unexpected_references.__get_number_of_entries() === 0
    ) {
        return pt.optional.literal.not_set()
    }
    return pt.optional.literal.set<d_out.Error>({
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