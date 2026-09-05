
import * as p_ from 'pareto-core/transformer'

import * as s_in from "../schema.js"
import * as s_out from "pareto-fountain-pen/modules/paragraph/schemas/serialized/schema"
import * as s_parameters from "pareto-fountain-pen/modules/paragraph/schemas/paragraph_serialization/schema"

import * as t_to_paragraph from "./paragraph.js"
import * as t_paragraph_to_serialized from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/transformers/serialized"

export const M3: p_.Transformer_With_Parameter<
    s_in.M3,
    s_out.Lines,
    s_parameters.Parameters
> = ($, $p) => t_paragraph_to_serialized.Paragraph(
    t_to_paragraph.M3($),
    $p
)