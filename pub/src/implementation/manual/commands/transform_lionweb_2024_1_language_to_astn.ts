import * as _p from 'pareto-core/dist/command'
import * as _pdev from 'pareto-core-dev'
import * as _pi from 'pareto-core/dist/interface'

//data


// const settings = {
//     'in': {
//         'dir': "./data",
//         'file': "SysML_lionweb_lionweb.json",
//     },
//     'out': {
//         'dir': ".",
//         'file': "sysml.m3.astn",
//     },
// }
const settings = {
    'in': {
        'dir': "./data",
        'file': "lioncore-2024-1.json",
    },
    'out': {
        'dir': ".",
        'file': "lioncore-2024-1.lioncore-2024-1.astn",
    },
}

//interface

import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export type Query_Resources = {
    'read file': resources_pareto.queries.read_file
}

export type Command_Resources = {
    'write file': resources_pareto.commands.write_file
    'log error': resources_pareto.commands.log_error
}

import * as resources_pareto from "pareto-resources/dist/interface/resources"



//dependencies

import { $$ as r_2024_1 } from "../text_to_text/temp_2024_1"

import * as t_read_file_to_fountain_pen from "pareto-resources/dist/implementation/manual/transformers/read_file/fountain_pen"
import * as t_fountain_pen_to_text from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/list_of_characters"
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/transformers/path/path"
import * as r_path_from_text from "pareto-resources/dist/implementation/manual/refiners/context_path/temp_string"
import * as t_write_file_to_fountain_pen from "pareto-resources/dist/implementation/manual/transformers/write_file/fountain_pen"
import * as t_processing_to_fountain_pen from "../transformers/processing/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const $$: _pi.Command_Procedure<resources_pareto.commands.main, Command_Resources, Query_Resources> = _p.command_procedure(
    ($p, $cr, $qr) => [

        _p.handle_error(
            [

                _p.query(

                    $qr['read file'](
                        t_path_to_path.create_node_path(
                            r_path_from_text.Context_Path(settings['in']['dir']),
                            { 'node': settings['in']['file'] }
                        ),
                        ($): d_fp.Phrase => t_read_file_to_fountain_pen.Error($)
                    ),
                    ($, abort) => ({
                        'path': t_path_to_path.create_node_path(
                            r_path_from_text.Context_Path(settings['out']['dir']),
                            { 'node': settings['out']['file'] }
                        ),
                        'data': r_2024_1(
                            $,
                            ($) => abort(sh.ph.composed([
                                sh.ph.literal("error during processing: "),
                                t_processing_to_fountain_pen.Error($),
                            ])),
                            {
                                'document resource identifier': settings['in']['file'],
                                'tab size': 4,
                            }
                        )
                    }),
                    ($v) => [
                        $cr['write file'].execute(
                            $v,
                            ($) => {
                                _pdev.log_debug_message(`failed to write converted dataset to ${settings['out']['file']}`, () => { })
                                return sh.ph.composed([
                                    sh.ph.literal("failed to write converted dataset to "),
                                    sh.ph.literal(settings['out']['file']),
                                    t_write_file_to_fountain_pen.Error($),
                                ])
                            },

                        )
                    ]
                )
            ],
            ($) => [
                $cr['log error'].execute(
                    {
                        'message': sh.pg.sentences([
                            sh.sentence([
                                $
                            ])
                        ])
                    },
                    ($) => ({
                        'exit code': 2,
                    })
                )
            ],
            () => ({
                'exit code': 1,
            })

        ),
    ]
)
