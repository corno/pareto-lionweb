import * as p_ from 'pareto-core/interface/command_implementation'

import type * as query_interfaces_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/queries"
import type * as command_interfaces_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/commands"
import type * as command_interfaces_pareto_stream from "pareto-stream-api/interface/commands"
import type * as command_interfaces_pareto_application_api from "pareto-application-api/interface/commands"

export namespace procedures {

    export type transform_lionweb_2024_1_language_to_astn = p_.Command_Implementation<
        command_interfaces_pareto_application_api.main,
        null,
        {
            'read file': query_interfaces_pareto_filesystem_unrestricted_api.read_file
        },
        {
            'write file': command_interfaces_pareto_filesystem_unrestricted_api.write_file
            'log error': command_interfaces_pareto_stream.log_error
        }
    >

}