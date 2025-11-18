import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'

import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"
import * as d_main from "exupery-resources/dist/interface/temp_main"

import { $$ as r_2023_1 } from "../../purifiers/temp_2023_1"

import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/transform_lionweb_2023_1_language_to_astn"


import * as t_read_file_to_fountain_pen from "exupery-resources/dist/implementation/transformers/read_file/fountain_pen"
// import * as t_write_file_to_fountain_pen from "exupery-resources/dist/implementation/transformers/write_file/lines"
import * as t_fountain_pen_to_text from "pareto-fountain-pen/dist/implementation/algorithms/transformations/block/text"

// const settings = {
//     'in': "./data/lioncore-2023-1.json",
//     'out filename': "lioncore-2023.1.lioncore-2023.1.astn",
// }
const settings = {
    'in': "./data/SysML_lionweb_lionweb.json",
    'out filename': "sysml.m3.astn",
}

export type Query_Resources = {
    'read file': _et.Stager<d_read_file.Result, d_read_file.Error, d_read_file.Parameters>
}

export type Command_Resources = {
    'write file': _et.Command<d_write_file.Error, d_write_file.Parameters>
}

export const $$: _et.Command_Procedure<d_main.Error, d_main.Parameters, Command_Resources, Query_Resources> = _easync.create_command_procedure(
    ($p, $cr, $qr) => _easync.p.prepare_data(

        $qr['read file'](
            {
                'path': settings['in'],
                'escape spaces in path': true
            },
        ).transform_error_temp(($): d_main.Error => {
            _ed.log_debug_message(`could not read file:  ${t_fountain_pen_to_text.Block_Part(t_read_file_to_fountain_pen.Error($), { 'indentation': `    ` })}`, () => { })
            return { 'exit code': 1 }
        }).stage(


            ($) => r_2023_1($), // <-- this is it; the acutal logic



            ($): d_main.Error => {
                _ed.log_debug_message(`error during processing`, () => { })
                return { 'exit code': 1 }
            }
        ).transform(($): d_write_file.Parameters => {
            return {
                'path': {
                    'path': settings['out filename'],
                    'escape spaces in path': true,
                },
                'data': $
            }
        }),
        ($v) => $cr['write file'].execute(
            $v,
            ($) => {
                _ed.log_debug_message(`failed to write converted dataset to ${settings['out filename']}`, () => { })
                return ({ 'exit code': 1 })
            },

        )
    )
)
