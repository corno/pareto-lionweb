import * as p_i from 'pareto-core/interface/command'

import * as query_actions_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/query_actions"
import * as command_actions_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/command_actions"
import * as command_actions_pareto_stream from "pareto-stream-api/interface/command_actions"
import * as command_actions_pareto_application_api from "pareto-application-api/interface/command_actions"

export namespace procedures {

    export type transform_lionweb_2024_1_language_to_astn = p_i.Command<
        command_actions_pareto_application_api.main,
        null,
        {
            'read file': query_actions_pareto_filesystem_unrestricted_api.read_file
        },
        {
            'write file': command_actions_pareto_filesystem_unrestricted_api.write_file
            'log error': command_actions_pareto_stream.log_error
        }
    >

}