import * as p_ from 'pareto-core/implementation/transformer'


//schemas
import type * as s_in from "../../../schemas/model.js"
import type * as s_out from "../../../schemas/serialized.js"
import type * as s_parameters from "pareto-fountain-pen/interface/schemas/paragraph_serialization"

//dependencies
import * as t_to_graphviz from "./graphviz.js"
import * as t_graphviz_to_paragraph from "pareto-graphviz/implementation/transformers/high_level_simple/paragraph"
import * as t_paragraph_to_serialized from "pareto-fountain-pen/_implementation/transformers/paragraph/serialized"


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