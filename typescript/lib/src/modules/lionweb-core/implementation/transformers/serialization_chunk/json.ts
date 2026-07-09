import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//data  types
import type * as d_in from "../../../../../interface/generated/liana/schemas/serialization_chunk/data.js"
import type * as d_out from "pareto-json/interface/generated/liana/schemas/json_with_guaranteed_unique_keys/data"

namespace interface_ {

    export type Meta_Pointer = p_i.Transformer<
        d_in.Meta_Pointer,
        d_out.Value
    >

    export type Serialization_Chunk = p_i.Transformer<
        d_in.Serialization_Chunk,
        d_out.Document
    >

    export type Targets = p_i.Transformer<
        d_in.Targets,
        d_out.Value
    >

}

//shorthands
import * as sh from "pareto-json/shorthands/json_with_guaranteed_unique_keys/target"


export const Meta_Pointer: interface_.Meta_Pointer = ($) => sh.v.object(
    p_.literal.dictionary({
        "key": sh.v.string($.key),
        "version": sh.v.string($.version),
        "language": sh.v.string($.language),
    })
)

export const Serialization_Chunk: interface_.Serialization_Chunk = ($) => sh.v.object(
    p_.literal.dictionary({
        "serializationFormatVersion": sh.v.string($.serializationFormatVersion),
        "languages": sh.v.array(p_.from.list($.languages).map(
            ($) => sh.v.object(
                p_.literal.dictionary({
                    "key": sh.v.string($.key),
                    "version": sh.v.string($.version),
                })
            )
        )),
        "nodes": sh.v.array(p_.from.list($.nodes).map(
            ($) => sh.v.object(
                p_.literal.dictionary({
                    "id": sh.v.string($.id),
                    "parent": p_.from.optional($.parent).decide(
                        ($) => sh.v.string($),
                        () => sh.v.null_()
                    ),
                    "annotations": sh.v.array(p_.from.list($.annotations).map(
                        ($) => sh.v.string($))),
                    "classifier": Meta_Pointer($['classifier']),
                    "containments": sh.v.array(p_.from.list($.containments).map(
                        ($) => sh.v.object(
                            p_.literal.dictionary({
                                "containment": Meta_Pointer($.containment),
                                "children": sh.v.array(p_.from.list($.children).map(
                                    ($) => sh.v.string($))),
                            })
                        )
                    )),
                    "properties": sh.v.array(
                        p_.from.list($.properties).map(
                            ($) => sh.v.object(
                                p_.literal.dictionary({
                                    "value": sh.v.string($.value),
                                    "property": Meta_Pointer($.property),
                                })
                            )
                        )),
                    "references": sh.v.array(p_.from.list($.references).map(
                        ($) => sh.v.object(
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

export const Targets: interface_.Targets = ($) => sh.v.array(
    p_.from.list($).map(
        ($) => sh.v.object(p_.literal.dictionary({
            "reference": p_.from.optional($.reference).decide(
                ($) => sh.v.string($),
                () => sh.v.null_()
            ),
            "resolveInfo": sh.v.string($.resolveInfo),
        }))
    )
)