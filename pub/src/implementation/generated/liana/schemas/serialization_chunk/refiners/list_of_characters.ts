    
    import * as _p from 'pareto-core/dist/expression'
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/serialization_chunk/deserialize"
    
    import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/list_of_characters"
    
    import * as v_unmarshall from "./astn_parse_tree"
    
    export const Serialization_Chunk: t_signatures.Serialization_Chunk = ($, abort, $p) => v_unmarshall.Serialization_Chunk(
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
    
    export const Targets: t_signatures.Targets = ($, abort, $p) => v_unmarshall.Targets(
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
    
    export const Meta_Pointer: t_signatures.Meta_Pointer = ($, abort, $p) => v_unmarshall.Meta_Pointer(
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
