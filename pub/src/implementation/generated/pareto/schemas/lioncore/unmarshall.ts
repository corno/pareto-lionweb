import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/lioncore/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/lioncore/data_types/target"


export const ID: _i_signatures._T_ID = ($, $p) => _i_generic.process_optional(
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
                    'id': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "id",
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
export const Raw_Reference: _i_signatures._T_Raw_Reference = ($, $p) => _i_generic.process_group(
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
)
export const M3: _i_signatures._T_M3 = ($, $p) => _i_generic.process_group(
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
            'version': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "version",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'dependencies': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "dependencies",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => Raw_Reference(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
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
                                                                                'partition': _pa.cc(_i_generic.get_entry(
                                                                                    $,
                                                                                    {
                                                                                        'key': "partition",
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
                                                                                ), ($) => _i_generic.process_optional(
                                                                                    $,
                                                                                    {
                                                                                        'value': ($) => Raw_Reference(
                                                                                            $,
                                                                                            {
                                                                                                'value deserializers': $p['value deserializers'],
                                                                                            }
                                                                                        ),
                                                                                    }
                                                                                )),
                                                                                'implements': _pa.cc(_i_generic.get_entry(
                                                                                    $,
                                                                                    {
                                                                                        'key': "implements",
                                                                                    }
                                                                                ), ($) => _i_generic.process_unconstrained_list(
                                                                                    $,
                                                                                    {
                                                                                        'value': ($) => Raw_Reference(
                                                                                            $,
                                                                                            {
                                                                                                'value deserializers': $p['value deserializers'],
                                                                                            }
                                                                                        ),
                                                                                    }
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
                                                                                ), ($) => _i_generic.process_unconstrained_list(
                                                                                    $,
                                                                                    {
                                                                                        'value': ($) => Raw_Reference(
                                                                                            $,
                                                                                            {
                                                                                                'value deserializers': $p['value deserializers'],
                                                                                            }
                                                                                        ),
                                                                                    }
                                                                                )),
                                                                            }),
                                                                        }
                                                                    )],
                                                                }),
                                                            }
                                                        )),
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
                                                                                        'property': ($): _i_out._T_M3.entities.D._type.SG.classifier.features.D._type.SG => ['property', _i_generic.process_group(
                                                                                            $,
                                                                                            {
                                                                                                'properties': ($) => ({
                                                                                                    'type': _pa.cc(_i_generic.get_entry(
                                                                                                        $,
                                                                                                        {
                                                                                                            'key': "type",
                                                                                                        }
                                                                                                    ), ($) => Raw_Reference(
                                                                                                        $,
                                                                                                        {
                                                                                                            'value deserializers': $p['value deserializers'],
                                                                                                        }
                                                                                                    )),
                                                                                                }),
                                                                                            }
                                                                                        )],
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
                                                                                                    ), ($) => Raw_Reference(
                                                                                                        $,
                                                                                                        {
                                                                                                            'value deserializers': $p['value deserializers'],
                                                                                                        }
                                                                                                    )),
                                                                                                    'link type': _pa.cc(_i_generic.get_entry(
                                                                                                        $,
                                                                                                        {
                                                                                                            'key': "link type",
                                                                                                        }
                                                                                                    ), ($) => _i_generic.process_unconstrained_state_group(
                                                                                                        $,
                                                                                                        {
                                                                                                            'states': _pa.dictionary_literal({
                                                                                                                'containment': ($): _i_out._T_M3.entities.D._type.SG.classifier.features.D._type.SG.link.link_type.SG => ['containment', _i_generic.process_nothing(
                                                                                                                    $,
                                                                                                                    null
                                                                                                                )],
                                                                                                                'reference': ($): _i_out._T_M3.entities.D._type.SG.classifier.features.D._type.SG.link.link_type.SG => ['reference', _i_generic.process_nothing(
                                                                                                                    $,
                                                                                                                    null
                                                                                                                )],
                                                                                                            }),
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
        }),
    }
)
