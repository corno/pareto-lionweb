
import * as _p from "pareto-core/dist/deserializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/lioncore/deserialize"

import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/deserializers"

import * as v_unmarshall from "./unmarshall"

export const ID: t_signatures.ID = ($, abort, $p) => v_unmarshall.ID(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        {
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        }
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)

export const Raw_Reference: t_signatures.Raw_Reference = ($, abort, $p) => v_unmarshall.Raw_Reference(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        {
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        }
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)

export const M3: t_signatures.M3 = ($, abort, $p) => v_unmarshall.M3(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        {
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        }
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)
