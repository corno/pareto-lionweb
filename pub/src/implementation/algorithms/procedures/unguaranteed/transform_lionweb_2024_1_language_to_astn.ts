import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'

//data


// const settings = {
//     'in': "./data/lioncore-2024-1.json",
//     'out filename': "lioncore-2024.1.lioncore-2024.1.astn",
// }
const settings = {
    'in': {
        'dir': `./data`,
        'file': `SysML_lionweb_lionweb.json`,
    },
    'out': {
        'dir': `.`,
        'file': `sysml.m3.astn`,
    },
}

//interface

import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"
import * as d_main from "exupery-resources/dist/interface/temp_main"
import * as d_path from "exupery-resources/dist/interface/generated/pareto/schemas/path/data_types/source"

export type Query_Resources = {
    'read file': _et.Query<d_read_file.Result, d_read_file.Error, d_read_file.Parameters>
}

export type Command_Resources = {
    'write file': _et.Command<d_write_file.Error, d_write_file.Parameters>
}
import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/transform_lionweb_2024_1_language_to_astn"

//dependencies

import { $$ as r_2024_1 } from "../../purifiers/temp_2024_1"

import * as t_read_file_to_fountain_pen from "exupery-resources/dist/implementation/transformers/read_file/fountain_pen"
// import * as t_write_file_to_fountain_pen from "exupery-resources/dist/implementation/transformers/write_file/lines"
import * as t_fountain_pen_to_text from "pareto-fountain-pen/dist/implementation/algorithms/transformations/block/text"
import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/path/path"
import * as r_path_from_text from "exupery-resources/dist/implementation/refiners/context_path/text"
export const $$: _et.Command_Procedure<d_main.Error, d_main.Parameters, Command_Resources, Query_Resources> = _easync.create_command_procedure(
    ($p, $cr, $qr) => [
        _easync.p.query_without_error_transformation(

            $qr['read file'](
                {
                    'path': t_path_to_path.create_node_path(
                        r_path_from_text.Context_Path(settings['in']['dir']),
                        settings['in']['file']
                    ),
                    'escape spaces in path': true
                }, ($): d_main.Error => {
                    _ed.log_debug_message(`could not read file:  ${t_fountain_pen_to_text.Block_Part(t_read_file_to_fountain_pen.Error($), { 'indentation': `    ` })}`, () => { })
                    return { 'exit code': 1 }
                }
            ).refine(


                ($) => r_2024_1($), // <-- this is it; the acutal logic



                ($): d_main.Error => {
                    _ed.log_debug_message(`error during processing`, () => { })
                    return { 'exit code': 1 }
                }
            ).transform_result(($): d_write_file.Parameters => {
                return {
                    'path': {
                        'path': t_path_to_path.create_node_path(
                            r_path_from_text.Context_Path(settings['out']['dir']),
                            settings['out']['file']
                        ),
                        'escape spaces in path': true,
                    },
                    'data': $
                }
            }),
            ($v) => [
                $cr['write file'].execute(
                    $v,
                    ($) => {
                        _ed.log_debug_message(`failed to write converted dataset to ${settings['out']['file']}`, () => { })
                        return ({ 'exit code': 1 })
                    },

                )
            ]
        )
    ]
)
