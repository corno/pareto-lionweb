import * as p_ from 'pareto-core/implementation/transformer'


//schemas
import type * as s_in from "../schema.js"
import type * as s_out from "pareto-fountain-pen/modules/paragraph/schemas/serialized/schema"
import type * as s_parameters from "pareto-fountain-pen/modules/paragraph/schemas/paragraph_serialization/schema"

//dependencies
import * as t_to_graphviz from "./graphviz.js"
import * as t_graphviz_to_paragraph from "pareto-graphviz/schemas/high_level_simple/transformers/paragraph"
import * as t_paragraph_to_serialized from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/transformers/serialized"


export const M3: p_.Transformer_With_Parameter<
    s_in.M3,
    s_out.Lines,
    s_parameters.Parameters
> = ($, $p) => {
    const graphviz = t_to_graphviz.M3($)
    const paragraph = t_graphviz_to_paragraph.Graph(graphviz)
    return t_paragraph_to_serialized.Paragraph(
        paragraph,
        $p
    )
}