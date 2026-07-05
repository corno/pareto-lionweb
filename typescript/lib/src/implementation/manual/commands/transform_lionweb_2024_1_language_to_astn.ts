import * as p_ from 'pareto-core/implementation/command'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import * as commands from "../../../interface/commands.js"

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

import * as d_prose from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"


//dependencies
import { $$x as r_2024_1 } from "../text_to_text/temp_2024_1.js"
import * as r_path_from_text from "pareto-resources/implementation/manual/refiners/path_unrestricted/text"
import * as t_fp_to_list_of_characters from "pareto-fountain-pen/implementation/manual/transformers/prose/list_of_characters"
import * as t_graphviz_to_prose from "pareto-graphviz/implementation/manual/transformers/high_level_simple/prose"
import * as t_lioncore_to_prose from "../../generated/liana/schemas/lioncore/transformers/fountain_pen.js"
import * as t_lioncore_to_graphviz from "../transformers/LionCore-M3-2024-1/graphviz.js"
import * as t_location_to_prose from "astn-core/implementation/manual/transformers/location/prose"
import * as t_path_to_path from "pareto-resources/implementation/manual/transformers/unrestricted_path/unrestricted_path"
import * as t_path_to_text from "pareto-resources/implementation/manual/transformers/unrestricted_path/text"
import * as t_processing_to_prose from "../transformers/processing/prose.js"
import * as t_processing_to_location from "../transformers/processing/location.js"
import * as t_read_file_to_prose from "pareto-resources/implementation/manual/transformers/read_file/prose"
import * as t_write_file_to_prose from "pareto-resources/implementation/manual/transformers/write_file/prose"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const $$: commands.procedures.transform_lionweb_2024_1_language_to_astn = p_.command_procedure(
    ($d, $s, $q, $c) => [

        p_.s.handle_error(
            [
                p_.s.query(
                    p_super_query_result($q['read file'](
                        t_path_to_path.create_node_path(
                            r_path_from_text.Context_Path(settings['in']['dir']),
                            { 'node': settings['in']['file'] }
                        ),
                        ($): d_prose.Phrase => t_read_file_to_prose.Error($)
                    )).refine(
                        ($, abort) => r_2024_1(
                            $,
                            ($) => abort(
sh.ph.composed([
                                sh.ph.literal("error during processing: "),
                                sh.ph.literal(t_path_to_text.Node_Path(
                                    t_path_to_path.create_node_path(
                                        r_path_from_text.Context_Path(settings['in']['dir']),
                                        { 'node': settings['in']['file'] }
                                    )
                                )),
                                sh.ph.literal(":"),
                                t_location_to_prose.Possible_Range(
                                    t_processing_to_location.Error($),
                                    {
                                        'character location reporting': ['one based', null],
                                    }
                                ),
                                t_processing_to_prose.Error(
                                    $,
                                ),
                            ])),
                            {
                                'tab size': 4,
                            }
                        )
                    ),
                    ($v) => [
                        $c['write file'].execute(
                            ({
                                'path': t_path_to_path.create_node_path(
                                    r_path_from_text.Context_Path(settings['out']['dir']),
                                    { 'node': settings['out']['file'] }
                                ),
                                'data': t_fp_to_list_of_characters.Paragraph(
                                    t_lioncore_to_prose.M3(
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
                                t_write_file_to_prose.Error($),
                            ]),

                        ),
                        $c['write file'].execute(
                            ({
                                'path': t_path_to_path.create_node_path(
                                    r_path_from_text.Context_Path(settings['out']['dir']),
                                    { 'node': settings['out']['graphviz file'] }
                                ),
                                'data': t_fp_to_list_of_characters.Paragraph(
                                    t_graphviz_to_prose.Graph(
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
                                t_write_file_to_prose.Error($),
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
