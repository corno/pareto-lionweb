
import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/serialization_chunk/data"
import * as d_out from "pareto-json/dist/interface/generated/liana/schemas/json/data"

//shorthands
import * as sh from "pareto-json/dist/shorthands/json"
import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'


export const Serialization_Chunk: _pi.Transformer<d_in.Serialization_Chunk, d_out.Value> = ($) => sh.v.object({
    "serializationFormatVersion": sh.v.string($.serializationFormatVersion),
    "language": sh.v.array($.languages.__l_map(($) => sh.v.object({
        "key": sh.v.string($.key),
        "version": sh.v.string($.version),
    }))),
    "nodes": sh.v.array($.nodes.__l_map(($) => sh.v.object({
        "id": sh.v.string($.id),
        "classifier": Meta_Pointer($.classifier),
        "parent": $.parent.__decide(
            ($) => sh.v.string($),
            () => sh.v.null_(),
        ),
        "references": sh.v.array($.references.__l_map(($) => sh.v.object({
            "reference": Meta_Pointer($.reference),
            "targets": Targets($.targets),
        }))),
        "containments": sh.v.array($.containments.__l_map(($) => sh.v.object({
            "containment": Meta_Pointer($.containment),
            "children": sh.v.array($.children.__l_map(($) => sh.v.string($))),
        }))),
        "properties": sh.v.array($.properties.__l_map(($) => sh.v.object({
            "property": Meta_Pointer($.property),
            "value": sh.v.string($.value),
        }))),
        "annotations": sh.v.array($.annotations.__l_map(($) => sh.v.string($))),
    }))),
})


export const Meta_Pointer: _pi.Transformer<d_in.Meta_Pointer, d_out.Value> = ($) => sh.v.object({
    "language": sh.v.string($.language),
    "version": sh.v.string($.version),
    "key": sh.v.string($.key),
})

export const Targets: _pi.Transformer<d_in.Targets, d_out.Value> = ($) => sh.v.array($.__l_map(($) => sh.v.object({
    "reference": $.reference.__decide(
        ($) => sh.v.string($),
        () => sh.v.null_(),
    ),
    "resolveInfo": sh.v.string($.resolveInfo)
})))
