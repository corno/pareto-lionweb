import * as p_i from 'pareto-core/dist/command/interface'

import * as resources_pareto from "pareto-resources/dist/interface/resources"
import * as resources_pareto_stream from "pareto-stream/dist/interface/commands"

export namespace procedures {

    export type transform_lionweb_2024_1_language_to_astn = p_i.Command_Procedure<
        resources_pareto.resources.commands.main,
        null,
        {
            'read file': resources_pareto.filesystem_unrestricted.queries.read_file
        },
        {
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file
            'log error': resources_pareto_stream.commands.log_error
        }
    >

}