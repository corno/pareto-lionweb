import * as p_ from 'pareto-core/dist/command/implementation'
import * as p_ci from 'pareto-core/dist/command/interface'

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

import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

import * as resources_pareto from "pareto-resources/dist/interface/resources"
import * as resources_pareto_stream from "pareto-stream/dist/interface/commands"

export type command_signature = p_ci.Command_Procedure<
    resources_pareto.resources.commands.main,
    null,
    {
        'read file': resources_pareto.filesystem_unrestricted.queries.read_file
    },
    {
        'write file': resources_pareto.filesystem_unrestricted.commands.write_file
        'log error': resources_pareto_stream.commands.log_error
    }
>


//dependencies
import { $$x as r_2024_1 } from "../text_to_text/temp_2024_1"
import * as r_path_from_text from "pareto-resources/dist/implementation/manual/refiners/path_unrestricted/text"
import * as t_fp_to_list_of_characters from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/list_of_characters"
import * as t_graphviz_to_fp from "pareto-graphviz/dist/implementation/manual/transformers/high_level_simple/fountain_pen"
import * as t_lioncore_to_fp from "../../generated/liana/schemas/lioncore/transformers/fountain_pen"
import * as t_lioncore_to_graphviz from "../transformers/LionCore-M3-2024-1/graphviz"
import * as t_location_to_fountain_pen from "astn-core/dist/implementation/manual/transformers/location/fountain_pen"
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/transformers/unrestricted_path/unrestricted_path"
import * as t_path_to_text from "pareto-resources/dist/implementation/manual/transformers/unrestricted_path/text"
import * as t_processing_to_fountain_pen from "../transformers/processing/fountain_pen"
import * as t_processing_to_location from "../transformers/processing/location"
import * as t_read_file_to_fountain_pen from "pareto-resources/dist/implementation/manual/transformers/read_file/fountain_pen"
import * as t_write_file_to_fountain_pen from "pareto-resources/dist/implementation/manual/transformers/write_file/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const $$: command_signature = p_.command_procedure(
    ($d, $s, $q, $c) => [

        p_.handle_error(
            [
                p_.query(
                    $q['read file'](
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
                            sh.ph.literal(t_path_to_text.Node_Path(
                                t_path_to_path.create_node_path(
                                    r_path_from_text.Context_Path(settings['in']['dir']),
                                    { 'node': settings['in']['file'] }
                                )
                            )),
                            sh.ph.literal(":"),
                            t_location_to_fountain_pen.Possible_Range(
                                t_processing_to_location.Error($),
                                {
                                    'character location reporting': ['one based', null],
                                }
                            ),
                            t_processing_to_fountain_pen.Error(
                                $,
                            ),
                        ])),
                        {
                            'tab size': 4,
                        }
                    ),
                    ($v) => [
                        $c['write file'].execute(
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
                            ($) => sh.ph.composed([
                                sh.ph.literal("failed to write converted dataset to "),
                                sh.ph.literal(settings['out']['file']),
                                t_write_file_to_fountain_pen.Error($),
                            ]),

                        ),
                        $c['write file'].execute(
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
                            ($) => sh.ph.composed([
                                sh.ph.literal("failed to write converted dataset to "),
                                sh.ph.literal(settings['out']['graphviz file']),
                                t_write_file_to_fountain_pen.Error($),
                            ]),

                        )
                    ]
                )
            ],
            ($) => [
                $c['log error'].execute(
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
