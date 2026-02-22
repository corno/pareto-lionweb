import * as _p from 'pareto-core/dist/command'
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
        'graphviz file': "lioncore-2024-1.lioncore-2024-1.dot",
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

import * as t_lioncore_to_fp from "../../generated/liana/schemas/lioncore/transformers/fountain_pen"
import * as t_fp_to_list_of_characters from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/list_of_characters"
import * as t_lioncore_to_graphviz from "../transformers/LionCore-M3-2024-1/graphviz"
import * as t_graphviz_to_fp from "pareto-graphviz/dist/implementation/manual/transformers/high_level_simple/fountain_pen"
import * as t_fp_to_loc from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/list_of_characters"

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
                    ($, abort) => r_2024_1(
                        $,
                        ($) => abort(sh.ph.composed([
                            sh.ph.literal("error during processing: "),
                            t_processing_to_fountain_pen.Error($),
                        ])),
                        {
                            'document resource identifier': settings['in']['file'],
                            'tab size': 4,
                        }
                    ),
                    ($v) => [
                        $cr['write file'].execute(
                            ({
                                'path': t_path_to_path.create_node_path(
                                    r_path_from_text.Context_Path(settings['out']['dir']),
                                    { 'node': settings['out']['file'] }
                                ),
                                'data': t_fp_to_list_of_characters.Paragraph(
                                    t_lioncore_to_fp.M3(
                                        $v,
                                    ),
                                    {
                                        'indentation': "    ",
                                        'newline': "\n",
                                    }
                                ),
                            }),
                            ($) => {
                                return sh.ph.composed([
                                    sh.ph.literal("failed to write converted dataset to "),
                                    sh.ph.literal(settings['out']['file']),
                                    t_write_file_to_fountain_pen.Error($),
                                ])
                            },

                        ),
                        $cr['write file'].execute(
                            ({
                                'path': t_path_to_path.create_node_path(
                                    r_path_from_text.Context_Path(settings['out']['dir']),
                                    { 'node': settings['out']['graphviz file'] }
                                ),
                                'data': t_fp_to_list_of_characters.Paragraph(
                                    t_graphviz_to_fp.Graph(
                                        t_lioncore_to_graphviz.M3($v),
                                    ),
                                    {
                                        'indentation': "    ",
                                        'newline': "\n",
                                    }
                                ),
                            }),
                            ($) => {
                                return sh.ph.composed([
                                    sh.ph.literal("failed to write converted dataset to "),
                                    sh.ph.literal(settings['out']['graphviz file']),
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
