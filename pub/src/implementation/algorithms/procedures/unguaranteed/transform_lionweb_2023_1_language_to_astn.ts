import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _erd from 'exupery-core-rawdata'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'

import * as read_file from "exupery-resources/dist/implementation/queries/unguaranteed/read_file"

import { $$ as temp_func } from "../../../../temp/temp_2023_1"
import * as fp_write from "pareto-fountain-pen/dist/implementation/procedures/unguaranteed/write_to_file"
import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/transform_lionweb_2023_1_language_to_astn"




// const settings = {
//     'in': "./data/lioncore-2023-1.json",
//     'out filename': "lioncore-2023.1.lioncore-2023.1.astn",
// }
const settings = {
    'in': "./data/SysML_lionweb_lionweb.json",
    'out filename': "sysml.m3.astn",
}



export const $$: _eb.Unguaranteed_Main_Initializer = () => {
    return {
        __start: (on_success, on_error) => {
            read_file.$$({
                'path': settings['in'],
                'escape spaces in path': true
            }).__start(
                (file_content) => {
                    fp_write.$$(
                        {
                            'directory path': "./out",
                            'filename': settings['out filename'],
                            'indentation': "    ",
                            'newline': "\n",
                            'group': temp_func(file_content),
                        }
                    ).__start(
                        on_success,
                        ($) => {
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