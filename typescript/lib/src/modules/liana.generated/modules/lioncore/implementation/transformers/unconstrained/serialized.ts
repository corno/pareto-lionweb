
import * as p_ from 'pareto-core/implementation/transformer'

import * as s_in from "../../../schemas/unconstrained.js"
import * as s_out from "../../../schemas/serialized.js"

import * as t_to_paragraph from "./paragraph.js"
import * as t_paragraph_to_serialized from "pareto-fountain-pen/_implementation/transformers/paragraph/serialized"
import * as s_parameters from "pareto-fountain-pen/interface/schemas/paragraph_serialization"

export const M3: p_.Transformer_With_Parameter<
    s_in.M3,
    s_out.Lines,
    s_parameters.Parameters
> = ($, $p) => t_paragraph_to_serialized.Paragraph(
    t_to_paragraph.M3($),
    $p
)