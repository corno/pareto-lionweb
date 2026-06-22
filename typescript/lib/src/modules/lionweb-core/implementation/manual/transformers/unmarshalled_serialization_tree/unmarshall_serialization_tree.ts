import * as p_i from 'pareto-core/dist/interface/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
import * as p_ from 'pareto-core/dist/implementation/transformer'

import * as d_in from "../../../../interface/data/unmarshalled_serialization_tree"
import * as d_out from "../../../../interface/data/lion_core_from_serialization_tree"


export type Node_With_Possibly_Unexpected_Content = p_i.Transformer_With_Parameter<
    d_in.Node_With_Possibly_Unexpected_References,
    d_out.Optional_Error,
    {
        'expected containments': p_di.Dictionary<null>
        'expected properties': p_di.Dictionary<null>
        'expected references': p_di.Dictionary<null>
    }
>

export const Node_With_Possibly_Unexpected_Content: Node_With_Possibly_Unexpected_Content = ($, $p) => {

    const $p_unexpected_containments = p_.from.dictionary(p_.from.dictionary($.containments,
        ).join(
            $p['expected containments'],
            ($, other, id): p_di.Optional_Value<null> => p_.from.optional(other,
            ).decide(
                ($) => p_.literal.not_set(),
                () => p_.literal.set(null)
            )
        )
    ).map_optionally(
        ($) => $
    )
    const $p_unexpected_properties = p_.from.dictionary(p_.from.dictionary($.properties,
        ).join(
            $p['expected properties'],
            ($, other, id): p_di.Optional_Value<null> => p_.from.optional(other,
            ).decide(
                ($) => p_.literal.not_set(),
                () => p_.literal.set(null)
            )
        )
    ).map_optionally(
        ($) => $
    )
    const $p_unexpected_references = p_.from.dictionary(p_.from.dictionary($.references,
        ).join(
            $p['expected references'],
            ($, other, id): p_di.Optional_Value<null> => p_.from.optional(other,
            ).decide(
                ($) => p_.literal.not_set(),
                () => p_.literal.set(null)
            )
        )
    ).map_optionally(
        ($) => $
    )

    if (
        p_.from.dictionary($p_unexpected_containments).amount_of_entries() === 0
        &&
        p_.from.dictionary($p_unexpected_properties).amount_of_entries() === 0
        &&
        p_.from.dictionary($p_unexpected_references).amount_of_entries() === 0
    ) {
        return p_.literal.not_set()
    }
    return p_.literal.set<d_out.Error>({
        'type': ['unexpected content', {
            'containments': {
                'unexpected': $p_unexpected_containments,
                'expected': $p['expected containments'],
            },
            'properties': {
                'unexpected': $p_unexpected_properties,
                'expected': $p['expected properties'],
            },
            'references': {
                'unexpected': $p_unexpected_references,
                'expected': $p['expected references'],
            },
        }],
        'node': $
    })

}