import * as _p from 'pareto-core/dist/assign'


import * as d_in from "../../../../../../interface/generated/liana/schemas/serialization_chunk/data"
import * as d_out from "pareto-json/dist/interface/generated/liana/schemas/json/data"

import * as sh from "pareto-json/dist/shorthands/json"


export const Meta_Pointer = ($: d_in.Meta_Pointer): d_out.Value => sh.v.object({
    "key": sh.v.string($.key),
    "version": sh.v.string($.version),
    "language": sh.v.string($.language),
})

export const Serialization_Chunks = ($: d_in.Serialization_Chunks): d_out.Document => ['object', ['dictionary', $.__d_map(($) => Serialization_Chunk($))]]

export const Serialization_Chunk = ($: d_in.Serialization_Chunk): d_out.Document => sh.v.object({
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

export const Targets = ($: d_in.Targets): d_out.Value => sh.v.array($.__l_map(($) => sh.v.object({
    "reference": _p.decide.optional(
        $.reference,
        ($) => sh.v.string($),
        () => sh.v.null_()
    ),
    "resolveInfo": sh.v.string($.resolveInfo),
})))