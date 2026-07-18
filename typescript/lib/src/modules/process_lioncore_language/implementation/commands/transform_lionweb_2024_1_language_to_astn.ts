import * as p_ from 'pareto-core/implementation/command'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

//interface dependencies
import type * as query_interfaces_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/modules/unrestricted/interface/queries"
import type * as command_interfaces_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/modules/unrestricted/interface/commands"
import type * as command_interfaces_pareto_stream from "pareto-stream-api/interface/commands"
import type * as command_interfaces_pareto_application_api from "pareto-application-api/interface/commands"

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

//schemas
import type * as s_paragraph from "pareto-fountain-pen/interface/schemas/paragraph"

//dependencies
import * as r_lion_core_from_list_of_characters from "../../../lioncore_deserialization_via_serialization_chunk.to_be_generated/implementation/refiners/model/list_of_characters.js"
import * as deser_path from "pareto-filesystem-unrestricted-api/modules/unrestricted/implementation/deserializers/path"
import * as t_paragraph_to_serialized from "pareto-fountain-pen/_implementation/transformers/paragraph/serialized"
import * as t_lioncore_to_serialized_graphviz from "../../../graphviz_visualization/implementation/transformers/model/serialized_graphviz.js"
import * as t_lioncore_to_serialized_astn from "../../../liana.generated/modules/lioncore/implementation/transformers/unconstrained/serialized.js"
import * as t_path_to_path from "pareto-filesystem-unrestricted-api/modules/unrestricted/implementation/transformers/path/path"
import * as ser_read_file from "pareto-filesystem-unrestricted-api/modules/unrestricted/implementation/serializers/read_file"
import * as ser_write_file from "pareto-filesystem-unrestricted-api/modules/unrestricted/implementation/serializers/write_file"
import * as t_document_deserialization_to_paragraph from "../../../tree_node_unmarshalling/implementation/transformers/document_deserialization/paragraph.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"

export const $$: p_.Command_Implementation<
    command_interfaces_pareto_application_api.main,
    {
        'newline': string
        'indentation': string
        'tab size': number
    },
    {
        'read file': query_interfaces_pareto_filesystem_unrestricted_api.read_file
    },
    {
        'write file': command_interfaces_pareto_filesystem_unrestricted_api.write_file
        'log error lines': command_interfaces_pareto_stream.log_error_lines
    }
> = p_.command(
    ($d, $s, $q, $c) => [

        p_.s.handle_error(
            [
                p_.s.query(
                    p_super_query_result($q['read file'](
                        t_path_to_path.create_node_path(
                            deser_path.Context_Path(settings['in']['dir']),
                            { 'node': settings['in']['file'] }
                        ),
                        ($): s_paragraph.Phrase => sh.ph.text(ser_read_file.Error($))
                    )).refine(
                        ($, abort) => {

                            return r_lion_core_from_list_of_characters.M3(
                                $.data,
                                ($) => abort(t_document_deserialization_to_paragraph.Error($)),
                                {
                                    'document deserialization': {
                                        'tab size': $s['tab size'],

                                    },
                                    'construction': {
                                        'write source': false,
                                    }
                                }
                            )
                        }
                    ),
                    ($v) => [
                        $c['write file'].execute(
                            ({
                                'path': t_path_to_path.create_node_path(
                                    deser_path.Context_Path(settings['out']['dir']),
                                    { 'node': settings['out']['file'] }
                                ),
                                'content': {
                                    'lines': t_lioncore_to_serialized_astn.M3(
                                        $v,
                                        {
                                            'indentation': $s.indentation,
                                        }
                                    ),
                                    'parameters': {
                                        'newline': $s.newline,
                                    }
                                }
                            }),
                            ($) => sh.ph.composed([
                                sh.ph.text("failed to write converted dataset to "),
                                sh.ph.text(settings['out']['file']),
                                sh.ph.text(ser_write_file.Error($)),
                            ]),

                        ),
                        $c['write file'].execute(
                            ({
                                'path': t_path_to_path.create_node_path(
                                    deser_path.Context_Path(settings['out']['dir']),
                                    { 'node': settings['out']['graphviz file'] }
                                ),
                                'content': {
                                    'lines': t_lioncore_to_serialized_graphviz.M3(
                                        $v,
                                        {
                                            'indentation': $s.indentation,
                                        }
                                    ),
                                    'parameters': {
                                        'newline': $s.newline,
                                    }
                                }
                            }),
                            ($) => sh.ph.composed([
                                sh.ph.text("failed to write converted dataset to "),
                                sh.ph.text(settings['out']['graphviz file']),
                                sh.ph.text(ser_write_file.Error($)),
                            ]),

                        )
                    ]
                )
            ],
            ($) => [
                $c['log error lines'].execute(
                    {
                        'lines': t_paragraph_to_serialized.Phrase(
                            $,
                            {
                                'indentation': $s.indentation,
                            }
                        )
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
