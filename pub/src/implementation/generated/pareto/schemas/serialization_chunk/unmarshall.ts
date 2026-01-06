import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/serialization_chunk/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/serialization_chunk/data_types/target"


export const Meta_Pointer: _i_signatures._T_Meta_Pointer = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'language': _pa.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "language",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'key': _pa.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "key",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'version': _pa.deprecated_cc(_i_generic.get_entry(
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
)
export const Targets: _i_signatures._T_Targets = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'resolveInfo': _pa.deprecated_cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "resolveInfo",
                        }
                    ), ($) => _i_generic.process_text(
                        $,
                        null
                    )),
                    'reference': _pa.deprecated_cc(_i_generic.get_entry(
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
export const Serialization_Chunk: _i_signatures._T_Serialization_Chunk = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'serializationFormatVersion': _pa.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "serializationFormatVersion",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'languages': _pa.deprecated_cc(_i_generic.get_entry(
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
                                'key': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "key",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'version': _pa.deprecated_cc(_i_generic.get_entry(
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
            'nodes': _pa.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "nodes",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'id': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "id",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'parent': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "parent",
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
                                'classifier': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "classifier",
                                    }
                                ), ($) => Meta_Pointer(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                                'properties': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "properties",
                                    }
                                ), ($) => _i_generic.process_unconstrained_list(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'property': _pa.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "property",
                                                        }
                                                    ), ($) => Meta_Pointer(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    )),
                                                    'value': _pa.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "value",
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
                                'references': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "references",
                                    }
                                ), ($) => _i_generic.process_unconstrained_list(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'reference': _pa.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "reference",
                                                        }
                                                    ), ($) => Meta_Pointer(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    )),
                                                    'targets': _pa.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "targets",
                                                        }
                                                    ), ($) => Targets(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    )),
                                                }),
                                            }
                                        ),
                                    }
                                )),
                                'containments': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "containments",
                                    }
                                ), ($) => _i_generic.process_unconstrained_list(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_group(
                                            $,
                                            {
                                                'properties': ($) => ({
                                                    'containment': _pa.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "containment",
                                                        }
                                                    ), ($) => Meta_Pointer(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    )),
                                                    'children': _pa.deprecated_cc(_i_generic.get_entry(
                                                        $,
                                                        {
                                                            'key': "children",
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
                                        ),
                                    }
                                )),
                                'annotations': _pa.deprecated_cc(_i_generic.get_entry(
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
                    ),
                }
            )),
        }),
    }
)
