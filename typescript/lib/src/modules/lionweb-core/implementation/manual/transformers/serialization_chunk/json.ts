import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data  types
import * as d_in from "../../../../../../interface/generated/liana/schemas/serialization_chunk/data"
import * as d_out from "pareto-json/dist/interface/generated/liana/schemas/json_with_guaranteed_unique_keys/data"

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
import * as sh from "pareto-json/dist/shorthands/json_with_guaranteed_unique_keys"


export const Meta_Pointer: interface_.Meta_Pointer = ($) => sh.v.object({
    "key": sh.v.string($.key),
    "version": sh.v.string($.version),
    "language": sh.v.string($.language),
})

export const Serialization_Chunk: interface_.Serialization_Chunk = ($) => sh.v.object({
    "serializationFormatVersion": sh.v.string($.serializationFormatVersion),
    "languages": sh.v.array($.languages.__l_map(($) => sh.v.object({
        "key": sh.v.string($.key),
        "version": sh.v.string($.version),
    }))),
    "nodes": sh.v.array($.nodes.__l_map(($) => sh.v.object({
        "id": sh.v.string($.id),
        "parent": $.parent.__decide(
            ($) => sh.v.string($),
            () => sh.v.null_()
        ),
        "annotations": sh.v.array($.annotations.__l_map(($) => sh.v.string($))),
        "classifier": Meta_Pointer($['classifier']),
        "containments": sh.v.array($.containments.__l_map(($) => sh.v.object({
            "containment": Meta_Pointer($.containment),
            "children": sh.v.array($.children.__l_map(($) => sh.v.string($))),
        }))),
        "properties": sh.v.array($.properties.__l_map(($) => sh.v.object({
            "value": sh.v.string($.value),
            "property": Meta_Pointer($.property),
        }))),
        "references": sh.v.array($.references.__l_map(($) => sh.v.object({
            "targets": Targets($.targets),
            "reference": Meta_Pointer($.reference),
        }))),
    }))),
})

export const Targets: interface_.Targets = ($) => sh.v.array($.__l_map(($) => sh.v.object({
    "reference": p_.decide.optional(
        $.reference,
        ($) => sh.v.string($),
        () => sh.v.null_()
    ),
    "resolveInfo": sh.v.string($.resolveInfo),
})))