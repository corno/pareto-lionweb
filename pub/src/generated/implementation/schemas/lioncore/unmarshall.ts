import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/lioncore/data_types/target"
import * as _i_signatures from "../../../interface/schemas/lioncore/unmarshall"


export const ID: _i_signatures._T_ID = ($, $p) => _i_generic.process_optional(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'id': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "id",
                        }
                    ), ($) => _i_generic.process_text(
                        $,
                        null
                    )),
                    'key': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "key",
                        }
                    ), ($) => _i_generic.process_text(
                        $,
                        null
                    )),
                }),
            }
        ),
    }
)
export const M3: _i_signatures._T_M3 = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'dependencies': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "dependencies",
                }
            ), ($) => Raw_References(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'entities': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "entities",
                }
            ), ($) => _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'id': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "id",
                                    }
                                ), ($) => ID(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                                'type': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "type",
                                    }
                                ), ($) => _i_generic.process_unconstrained_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary_literal({
                                            'classifier': ($): _i_out._T_M3.entities.D._type.SG => ['classifier', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'features': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "features",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_dictionary(
                                                            $,
                                                            {
                                                                'value': ($) => _i_generic.process_group(
                                                                    $,
                                                                    {
                                                                        'properties': ($) => ({
                                                                            'id': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "id",
                                                                                }
                                                                            ), ($) => ID(
                                                                                $,
                                                                                {
                                                                                    'value deserializers': $p['value deserializers'],
                                                                                }
                                                                            )),
                                                                            'optional': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "optional",
                                                                                }
                                                                            ), ($) => _i_generic.process_text(
                                                                                $,
                                                                                null
                                                                            )),
                                                                            'type': _pa.cc(_i_generic.get_entry(
                                                                                $,
                                                                                {
                                                                                    'key': "type",
                                                                                }
                                                                            ), ($) => _i_generic.process_unconstrained_state_group(
                                                                                $,
                                                                                {
                                                                                    'states': _pa.dictionary_literal({
                                                                                        'link': ($): _i_out._T_M3.entities.D._type.SG.classifier.features.D._type.SG => ['link', _i_generic.process_group(
                                                                                            $,
                                                                                            {
                                                                                                'properties': ($) => ({
                                                                                                    'multiple': _pa.cc(_i_generic.get_entry(
                                                                                                        $,
                                                                                                        {
                                                                                                            'key': "multiple",
                                                                                                        }
                                                                                                    ), ($) => _i_generic.process_text(
                                                                                                        $,
                                                                                                        null
                                                                                                    )),
                                                                                                    'type': _pa.cc(_i_generic.get_entry(
                                                                                                        $,
                                                                                                        {
                                                                                                            'key': "type",
                                                                                                        }
                                                                                                    ), ($) => Raw_References(
                                                                                                        $,
                                                                                                        {
                                                                                                            'value deserializers': $p['value deserializers'],
                                                                                                        }
                                                                                                    )),
                                                                                                }),
                                                                                            }
                                                                                        )],
                                                                                        'property': ($): _i_out._T_M3.entities.D._type.SG.classifier.features.D._type.SG => ['property', _i_generic.process_group(
                                                                                            $,
                                                                                            {
                                                                                                'properties': ($) => ({
                                                                                                    'type': _pa.cc(_i_generic.get_entry(
                                                                                                        $,
                                                                                                        {
                                                                                                            'key': "type",
                                                                                                        }
                                                                                                    ), ($) => Raw_References(
                                                                                                        $,
                                                                                                        {
                                                                                                            'value deserializers': $p['value deserializers'],
                                                                                                        }
                                                                                                    )),
                                                                                                }),
                                                                                            }
                                                                                        )],
                                                                                    }),
                                                                                }
                                                                            )),
                                                                        }),
                                                                    }
                                                                ),
                                                            }
                                                        )),
                                                        'type': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "type",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_state_group(
                                                            $,
                                                            {
                                                                'states': _pa.dictionary_literal({
                                                                    'concept': ($): _i_out._T_M3.entities.D._type.SG.classifier._type.SG => ['concept', _i_generic.process_group(
                                                                        $,
                                                                        {
                                                                            'properties': ($) => ({
                                                                                'abstract': _pa.cc(_i_generic.get_entry(
                                                                                    $,
                                                                                    {
                                                                                        'key': "abstract",
                                                                                    }
                                                                                ), ($) => _i_generic.process_text(
                                                                                    $,
                                                                                    null
                                                                                )),
                                                                                'extends': _pa.cc(_i_generic.get_entry(
                                                                                    $,
                                                                                    {
                                                                                        'key': "extends",
                                                                                    }
                                                                                ), ($) => Raw_References(
                                                                                    $,
                                                                                    {
                                                                                        'value deserializers': $p['value deserializers'],
                                                                                    }
                                                                                )),
                                                                                'implements': _pa.cc(_i_generic.get_entry(
                                                                                    $,
                                                                                    {
                                                                                        'key': "implements",
                                                                                    }
                                                                                ), ($) => Raw_References(
                                                                                    $,
                                                                                    {
                                                                                        'value deserializers': $p['value deserializers'],
                                                                                    }
                                                                                )),
                                                                                'partition': _pa.cc(_i_generic.get_entry(
                                                                                    $,
                                                                                    {
                                                                                        'key': "partition",
                                                                                    }
                                                                                ), ($) => _i_generic.process_text(
                                                                                    $,
                                                                                    null
                                                                                )),
                                                                            }),
                                                                        }
                                                                    )],
                                                                    'interface': ($): _i_out._T_M3.entities.D._type.SG.classifier._type.SG => ['interface', _i_generic.process_group(
                                                                        $,
                                                                        {
                                                                            'properties': ($) => ({
                                                                                'extends': _pa.cc(_i_generic.get_entry(
                                                                                    $,
                                                                                    {
                                                                                        'key': "extends",
                                                                                    }
                                                                                ), ($) => Raw_References(
                                                                                    $,
                                                                                    {
                                                                                        'value deserializers': $p['value deserializers'],
                                                                                    }
                                                                                )),
                                                                            }),
                                                                        }
                                                                    )],
                                                                }),
                                                            }
                                                        )),
                                                    }),
                                                }
                                            )],
                                            'datatype': ($): _i_out._T_M3.entities.D._type.SG => ['datatype', _i_generic.process_unconstrained_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary_literal({
                                                        'enumeration': ($): _i_out._T_M3.entities.D._type.SG.datatype.SG => ['enumeration', _i_generic.process_unconstrained_dictionary(
                                                            $,
                                                            {
                                                                'value': ($) => ID(
                                                                    $,
                                                                    {
                                                                        'value deserializers': $p['value deserializers'],
                                                                    }
                                                                ),
                                                            }
                                                        )],
                                                    }),
                                                }
                                            )],
                                        }),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
            'id': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "id",
                }
            ), ($) => ID(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
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
)
export const Raw_References: _i_signatures._T_Raw_References = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
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
                    'resolveInfo': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "resolveInfo",
                        }
                    ), ($) => _i_generic.process_text(
                        $,
                        null
                    )),
                }),
            }
        ),
    }
)
