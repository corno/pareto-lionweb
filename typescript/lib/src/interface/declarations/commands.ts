import * as p_i from 'pareto-core/interface/command'

import type * as actions_queries_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/query_actions"
import type * as actions_commands_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/command_actions"
import type * as actions_commands_pareto_stream from "pareto-stream-api/interface/command_actions"
import type * as actions_commands_pareto_application_api from "pareto-application-api/interface/command_actions"

export namespace procedures {

    export type transform_lionweb_2024_1_language_to_astn = p_i.Command<
        actions_commands_pareto_application_api.main,
        null,
        {
            'read file': actions_queries_pareto_filesystem_unrestricted_api.read_file
        },
        {
            'write file': actions_commands_pareto_filesystem_unrestricted_api.write_file
            'log error': actions_commands_pareto_stream.log_error
        }
    >

}