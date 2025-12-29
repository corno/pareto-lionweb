import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/serialization_tree/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/serialization_tree/data_types/target"


export const Targets: _i_signatures._T_Targets = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'resolveInfo': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "resolveInfo",
                        }
                    ), ($) => _i_generic.process_text(
                        $,
                        null
                    )),
                    'reference': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "reference",
                        }
                    ), ($) => _i_generic.process_optional(
                        $,
                        {
                            'value': ($) => _i_generic.process_text(
                                $,
                                null
                            ),
                        }
                    )),
                }),
            }
        ),
    }
)
export const Node: _i_signatures._T_Node = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'classifier': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "classifier",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'properties': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "properties",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_text(
                        $,
                        null
                    ),
                }
            )),
            'containments': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "containments",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_unconstrained_dictionary(
                        $,
                        {
                            'value': ($) => Node(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            ),
                        }
                    ),
                }
            )),
            'references': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "references",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => Targets(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )),
            'annotations': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "annotations",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_text(
                        $,
                        null
                    ),
                }
            )),
        }),
    }
)
export const Serialization_Chunk: _i_signatures._T_Serialization_Chunk = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'serializationFormatVersion': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "serializationFormatVersion",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'languages': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "languages",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'key': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "key",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'version': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "version",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                            }),
                        }
                    ),
                }
            )),
            'root node id': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "root node id",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'node tree': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "node tree",
                }
            ), ($) => Node(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
