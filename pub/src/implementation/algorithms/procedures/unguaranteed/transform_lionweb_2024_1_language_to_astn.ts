import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'

import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"


import { $$ as temp_func } from "../../purifiers/temp_2024_1"

import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/transform_lionweb_2024_1_language_to_astn"


const settings = {
    'in': "./data/lioncore-2024-1.json",
    'out filename': "lioncore-2024-1.lioncore-2024-1.astn",
}

export type Resources = {
    'queries': {
        'read file': _et.Data_Preparer<d_read_file.Parameters, d_read_file.Result, d_read_file.Error>
    },
    'procedures': {
        'write file': _et.Command<d_write_file.Parameters, d_write_file.Error>
    }
}

export const $$: _et.Command_Procedure<_eb.Parameters, _eb.Error, Resources> = ($r) => {
    return () => _easync.__create_procedure_promise({
        'execute': (on_success, on_error) => {
            $r.queries['read file'](
                {
                    'path': settings['in'],
                    'escape spaces in path': true
                },
            ).__start(
                (file_content) => {
                    temp_func(file_content).process(
                        ($) => {
                            $r.commands['write file'](
                                {
                                    'path': {
                                        'path': `./out/${settings['out filename']}`,
                                        'escape spaces in path': true,
                                    },
                                    'data': $
                                },
                            ).__start(
                                on_success,
                                ($) => {
                                    on_error({ 'exit code': 1 })

                                }
                            )
                        },
                        ($) => {
                            _ed.log_debug_message($[0], () => { })
                            on_error({ 'exit code': 1 })
                        }
                    )

                },
                () => {
                    on_error({ 'exit code': 1 })
                }
            )
        }
    })
}