
import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/serialization_chunk/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

//dependencies
import * as t_to_json from "./json"
import * as t_json_to_fountain_pen from "pareto-json/dist/implementation/manual/transformers/json/fountain_pen"


export const Serialization_Chunk: _pi.Transformer<d_in.Serialization_Chunk, d_out.Phrase> = ($) => t_json_to_fountain_pen.Value(
    t_to_json.Serialization_Chunk($)
)