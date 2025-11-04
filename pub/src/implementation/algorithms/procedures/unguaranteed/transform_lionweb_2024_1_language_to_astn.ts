import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'

import * as q_read_file from "exupery-resources/dist/implementation/queries/unguaranteed/read_file"
import * as p_write_file from "exupery-resources/dist/implementation/procedures/unguaranteed/write_file"

import { $$ as p_2024_1 } from "../../purifiers/temp_2024_1"

import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/transform_lionweb_2024_1_language_to_astn"


const settings = {
    'in': "./data/lioncore-2024-1.json",
    'out filename': "lioncore-2024-1.lioncore-2024-1.astn",
}

export const $$: _eb.Unguaranteed_Main_Initializer = () => {
    return {
        __start: (on_success, on_error) => {
            q_read_file.$$({
                'path': settings['in'],
                'escape spaces in path': true
            }).__start(
                (file_content) => {
                    p_write_file.$$(
                        {
                            'path': {
                                'path': `./out/${settings['out filename']}`,
                                'escape spaces in path': true,
                            },
                            'data': p_2024_1(file_content)
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