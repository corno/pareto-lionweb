    
    import * as _p from 'pareto-core/dist/expression'
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lioncore/deserialize"
    
    import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/list_of_characters"
    
    import * as v_unmarshall from "./astn_parse_tree"
    
    export const M3: t_signatures.M3 = ($, abort, $p) => v_unmarshall.M3(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const ID: t_signatures.ID = ($, abort, $p) => v_unmarshall.ID(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Raw_Reference: t_signatures.Raw_Reference = ($, abort, $p) => v_unmarshall.Raw_Reference(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
