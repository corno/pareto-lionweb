import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _erd from 'exupery-core-rawdata'
import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'

import * as read_file from "exupery-resources/dist/queries/read_file"

import * as unmarshall from "../unmarshall"
import { Serialization_Chunk } from "../types/LionWeb_serialization_format"
import * as d from "../types/LionWeb_serialization_format"
import * as d_tree from "../types/LionWeb_tree"
import * as t_sf_to_tree from "../transformations/serialization_format_to_tree"
import * as t_tree from "../transformations/tree_to_M3"
import * as m_x from "../generated/implementation/schemas/m3/marshall"

import * as temp_astn_to_fp from "../transformations/temp_astn_target_to_fountain_pen_block"
import * as fp_write from "pareto-fountain-pen/dist/procedures/write_to_file"



const log_meta_pointer = (mp: d.Meta_Pointer) => {
    return _ed.log_debug_message(`${mp.language}:${mp.version}:${mp.key}`, () => { })
}

// const settings = {
//     'in': "./data/M3.json",
//     'out filename': "m3.m3.astn",
//     'root': "-id-LionCore-M3-2024-1"
// }
const settings = {
    'in': "./data/SysML_lionweb_lionweb.json",
    'out filename': "sysml.m3.astn",
    'root': "sysml"
}


export const $$: _eb.Unguaranteed_Main_Initializer = () => {
    return {
        __start: (on_success, on_error) => {
            read_file.$$({
                'path': settings['in'],
                'escape spaces in path': true
            }).__start(
                (file_content) => {
                    //_ed.log_debug_message(file_content, () => {})
                    const raw = _erd.parse_json(file_content)
                    const sysml = unmarshall.Serialization_Chunk(raw)
                    sysml.languages.__for_each(($) => {
                        //_ed.log_debug_message(`Language: ${$.key}, version: ${$.version}`, () => { })
                    })
                    sysml.nodes.__for_each(($) => {
                        const id = $.id
                        //_ed.log_debug_message(`Node ID: ${$.id}`, () => { })
                        $.parent.map(($) => {
                            //_ed.log_debug_message(`${id}->${$}`, () => { })
                        })
                        $.parent.transform(
                            ($) => {
                            },
                            () => {
                                _ed.log_debug_message(`no parent: ${id}`, () => { })
                            }
                        )

                        //_ed.log_debug_message(`${id}(${$.classifier.key})`, () => {     })
                        //log_meta_pointer($.classifier)
                        // $.properties.map(($) => {
                        //     mp($.property)
                        // })
                        // $.containments.map(($) => {
                        //     mp($.containment)
                        // })
                        // $.references.map(($) => {
                        //     mp($.reference)
                        // })
                    })

                    const tree = t_sf_to_tree.Serialization_Chunk({
                        'chunk': sysml,
                        'root node id': settings['root'],
                    })

                    const m3 = t_tree.M3(
                        tree
                    )


                    const value = m_x.M3(
                        m3,
                        {
                            'value serializers': {
                                'boolean': () => "FIXME",
                                'default number': () => "FIXME",
                                'custom numbers': null
                                // 'string': () => "FIXME", 
                            }
                        }
                    )

                    fp_write.$$(
                        {
                            'directory path': "./out",
                            'filename': settings['out filename'],
                            'indentation': "    ",
                            'newline': "\n",
                            'block': temp_astn_to_fp.Document(value, {}),
                        }
                    ).__start(
                        () => {
                            on_success()

                        },
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