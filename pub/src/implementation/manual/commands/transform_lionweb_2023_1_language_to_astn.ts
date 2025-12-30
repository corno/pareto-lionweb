import * as _pc from 'pareto-core-command'
import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core-interface'

//data


// const settings = {
//     'in': "./data/lioncore-2023-1.json",
//     'out filename': "lioncore-2023.1.lioncore-2023.1.astn",
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
import * as d_main from "exupery-resources/dist/interface/to_be_generated/temp_main"
import * as d_path from "exupery-resources/dist/interface/generated/pareto/schemas/path/data_types/source"

export type Query_Resources = {
    'read file': resources_exupery.queries.read_file
}

export type Command_Resources = {
    'write file': resources_exupery.commands.write_file
}

import * as resources_exupery from "exupery-resources/dist/interface/resources"


//dependencies

import { $$ as r_2023_1 } from "../primitives/text/deserializers/temp_2023_1"

import * as t_read_file_to_fountain_pen from "exupery-resources/dist/implementation/transformers/schemas/read_file/fountain_pen"
// import * as t_write_file_to_fountain_pen from "exupery-resources/dist/implementation/transformers/schemas/write_file/lines"
import * as t_fountain_pen_to_text from "pareto-fountain-pen/dist/implementation/serializers/schemas/block"
import * as t_path_to_path from "exupery-resources/dist/implementation/transformers/schemas/path/path"
import * as ds_path from "exupery-resources/dist/implementation/deserializers/schemas/context_path"


export const $$: _pi.Command_Procedure<resources_exupery.commands.main, Command_Resources, Query_Resources> = _pc.create_command_procedure(
    ($p, $cr, $qr) => [
        _pc.query_without_error_transformation(

            $qr['read file'](
                t_path_to_path.create_node_path(
                    ds_path.Context_Path(settings['in']['dir']),
                    settings['in']['file']
                ),
                ($): d_main.Error => {
                    _pdev.log_debug_message(`could not read file:  ${t_fountain_pen_to_text.Block_Part(t_read_file_to_fountain_pen.Error($), { 'indentation': `    `, 'newline': `\n` })}`, () => { })
                    return { 'exit code': 1 }
                }
            ).refine_without_error_transformation(


                ($, abort) => r_2023_1(
                    $,
                    ($) => {
                        _pdev.log_debug_message(`error during processing`, () => { })
                        return abort({ 'exit code': 1 })
                    }
                ), // <-- this is it; the acutal logic



            ).transform_result(($): d_write_file.Parameters => {
                return {
                    'path': t_path_to_path.create_node_path(
                        ds_path.Context_Path(settings['out']['dir']),
                        settings['out']['file']
                    ),
                    'data': $
                }
            }),
            ($v) => [
                $cr['write file'].execute(
                    $v,
                    ($) => {
                        _pdev.log_debug_message(`failed to write converted dataset to ${settings['out']['file']}`, () => { })
                        return ({ 'exit code': 1 })
                    },

                )
            ]
        )
    ]
)
