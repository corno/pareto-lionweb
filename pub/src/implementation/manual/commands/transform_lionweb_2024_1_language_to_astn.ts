import * as _p from 'pareto-core/dist/command'
import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core/dist/interface'

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

import * as d_read_file from "pareto-resources/dist/interface/generated/liana/schemas/read_file/data"
import * as d_write_file from "pareto-resources/dist/interface/generated/liana/schemas/write_file/data"
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_path from "pareto-resources/dist/interface/generated/liana/schemas/path/data"

export type Query_Resources = {
    'read file': resources_pareto.queries.read_file
}

export type Command_Resources = {
    'write file': resources_pareto.commands.write_file
}

import * as resources_pareto from "pareto-resources/dist/interface/resources"


//dependencies

import { $$ as r_2024_1 } from "../text_to_text/temp_2024_1"

import * as t_read_file_to_fountain_pen from "pareto-resources/dist/implementation/manual/schemas/read_file/transformers/fountain_pen"
// import * as t_write_file_to_fountain_pen from "pareto-resources/dist/implementation/transformers/schemas/write_file/lines"
import * as t_fountain_pen_to_text from "pareto-fountain-pen/dist/implementation/manual/schemas/block/transformers/list_of_characters"
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/schemas/path/transformers/path"
import * as r_path_from_text from "pareto-resources/dist/implementation/manual/schemas/context_path/refiners/temp_string"
export const $$: _pi.Command_Procedure<resources_pareto.commands.main, Command_Resources, Query_Resources> = _p.command_procedure(
    ($p, $cr, $qr) => [
        _p.query(

            $qr['read file'](
                t_path_to_path.create_node_path(
                    r_path_from_text.Context_Path(settings['in']['dir']),
                    { 'node': settings['in']['file'] }
                ),
                ($): d_main.Error => {
                    _pdev.log_debug_message(`could not read file:  ${t_fountain_pen_to_text.Phrase(t_read_file_to_fountain_pen.Error($), { 'indentation': `    `, 'newline': `\n` })}`, () => { })
                    return { 'exit code': 1 }
                }
            ),
            ($, abort) => ({
                'path': t_path_to_path.create_node_path(
                    r_path_from_text.Context_Path(settings['out']['dir']),
                    { 'node': settings['out']['file'] }
                ),
                'data': r_2024_1(
                    $,
                    ($) => {
                        _pdev.log_debug_message(`error during processing`, () => { })
                        return abort({ 'exit code': 1 })
                    }
                )
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
