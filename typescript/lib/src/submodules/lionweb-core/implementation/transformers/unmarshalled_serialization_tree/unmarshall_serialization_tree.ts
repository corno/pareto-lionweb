import type * as p_i from 'pareto-core/interface/transformer'
import type * as p_di from 'pareto-core/interface/schema'
import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/unmarshalled_serialization_tree.js"

import type * as s_out from "../../../../../submodules/lionweb-core/interface/schemas/lion_core_from_serialization_tree.js"
namespace declarations {
    export type Node_With_Possibly_Unexpected_Content = p_i.Transformer_With_Parameter<
        s_in.Node_With_Possibly_Unexpected_References,
        s_out.Optional_Error,
        {
            'expected containments': p_di.Dictionary<null>
            'expected properties': p_di.Dictionary<null>
            'expected references': p_di.Dictionary<null>
        }
    >
}

export const Node_With_Possibly_Unexpected_Content: declarations.Node_With_Possibly_Unexpected_Content = ($, $p) => {

    const $p_unexpected_containments = p_.from.dictionary(
        p_.from.dictionary($.containments).join(
            $p['expected containments'],
            ($, $_other, id): p_di.Optional_Value<null> => p_.from.optional($_other).decide(
                ($) => p_.literal.not_set(),
                () => p_.literal.set(null)
            )
        )
    ).map_optionally(
        ($) => $
    )
    const $p_unexpected_properties = p_.from.dictionary(
        p_.from.dictionary($.properties).join(
            $p['expected properties'],
            ($, other, id): p_di.Optional_Value<null> => p_.from.optional(other).decide(
                ($) => p_.literal.not_set(),
                () => p_.literal.set(null)
            )
        )
    ).map_optionally(
        ($) => $
    )
    const $p_unexpected_references = p_.from.dictionary(
        p_.from.dictionary($.references).join(
            $p['expected references'],
            ($, other, id): p_di.Optional_Value<null> => p_.from.optional(other).decide(
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
    return p_.literal.set<s_out.Error>({
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