import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//data  types
import type * as s_in from "../../../../chunk_deserialization.to_be_generated/schemas/chunk.js"

import type * as s_out from "../../../schemas/json_with_guaranteed_unique_keys.js"
namespace declarations {

    export type Meta_Pointer = p_i.Transformer<
        s_in.Meta_Pointer,
        s_out.Value
    >

    export type Serialization_Chunk = p_i.Transformer<
        s_in.Serialization_Chunk,
        s_out.Document
    >

    export type Targets = p_i.Transformer<
        s_in.Targets,
        s_out.Value
    >

}

//shorthands
import * as sh from "pareto-json/shorthands/json_with_guaranteed_unique_keys/target"


export const Meta_Pointer: declarations.Meta_Pointer = ($) => sh.object(
    p_.literal.dictionary({
        "key": sh.string($.key),
        "version": sh.string($.version),
        "language": sh.string($.language),
    })
)

export const Serialization_Chunk: declarations.Serialization_Chunk = ($) => sh.object(
    p_.literal.dictionary({
        "serializationFormatVersion": sh.string($.serializationFormatVersion),
        "languages": sh.array(p_.from.list($.languages).map(
            ($) => sh.object(
                p_.literal.dictionary({
                    "key": sh.string($.key),
                    "version": sh.string($.version),
                })
            )
        )),
        "nodes": sh.array(p_.from.list($.nodes).map(
            ($) => sh.object(
                p_.literal.dictionary({
                    "id": sh.string($.id),
                    "parent": p_.from.optional($.parent).decide(
                        ($) => sh.string($),
                        () => sh.null_()
                    ),
                    "annotations": sh.array(p_.from.list($.annotations).map(
                        ($) => sh.string($))),
                    "classifier": Meta_Pointer($['classifier']),
                    "containments": sh.array(p_.from.list($.containments).map(
                        ($) => sh.object(
                            p_.literal.dictionary({
                                "containment": Meta_Pointer($.containment),
                                "children": sh.array(p_.from.list($.children).map(
                                    ($) => sh.string($))),
                            })
                        )
                    )),
                    "properties": sh.array(
                        p_.from.list($.properties).map(
                            ($) => sh.object(
                                p_.literal.dictionary({
                                    "value": sh.string($.value),
                                    "property": Meta_Pointer($.property),
                                })
                            )
                        )),
                    "references": sh.array(p_.from.list($.references).map(
                        ($) => sh.object(
                            p_.literal.dictionary({
                                "targets": Targets($.targets),
                                "reference": Meta_Pointer($.reference),
                            })
                        )
                    )),
                })
            )
        )),
    })
)

export const Targets: declarations.Targets = ($) => sh.array(
    p_.from.list($).map(
        ($) => sh.object(p_.literal.dictionary({
            "reference": p_.from.optional($.reference).decide(
                ($) => sh.string($),
                () => sh.null_()
            ),
            "resolveInfo": sh.string($.resolveInfo),
        }))
    )
)