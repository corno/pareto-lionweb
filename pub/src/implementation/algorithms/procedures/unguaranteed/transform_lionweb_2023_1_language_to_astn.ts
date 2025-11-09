import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'


import * as q_read_file from "exupery-resources/dist/implementation/algorithms/queries/unguaranteed/read_file"
import * as p_write_file from "exupery-resources/dist/implementation/algorithms/procedures/unguaranteed/write_file"

import { $$ as temp_func } from "../../purifiers/temp_2023_1"

import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/transform_lionweb_2023_1_language_to_astn"


// const settings = {
//     'in': "./data/lioncore-2023-1.json",
//     'out filename': "lioncore-2023.1.lioncore-2023.1.astn",
// }
const settings = {
    'in': "./data/SysML_lionweb_lionweb.json",
    'out filename': "sysml.m3.astn",
}


export const $$: _easync.Unguaranteed_Procedure_Initializer<_eb.Parameters, _eb.Error, null> = () => {
    return {
        __start: (on_success, on_error) => {
            q_read_file.$$(
                {
                    'path': settings['in'],
                    'escape spaces in path': true
                },
                null,
            ).__start(
                (file_content) => {
                    temp_func(file_content).process(
                        ($) => {
                            p_write_file.$$(
                                {
                                    'path': {
                                        'path': `./out/${settings['out filename']}`,
                                        'escape spaces in path': true,
                                    },
                                    'data': $
                                },
                                null,
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
    }
}