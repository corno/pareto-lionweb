import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_assert from 'pareto-core/dist/_p_assert'
import _p_change_context from 'pareto-core/dist/_p_change_context'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/serialization_tree/data"
import * as d_out from "../../../../interface/generated/liana/schemas/lioncore/data"
import * as d_function from "../../../../modules/lionweb-core/interface/to_be_generated/unmarshall_serialization_tree"

//dependencies
import * as r_unmarshalled_serialization_tree_from_serialization_tree from "../../../../modules/lionweb-core/implementation/manual/refiners/unmarshalled_serialization_tree/serialization_tree"
import * as t_unmarshalled_serialization_tree_to_optional_error from "../../../../modules/lionweb-core/implementation/manual/transformers/unmarshalled_serialization_tree/unmarshall_serialization_tree"

export const ID = (
    $: d_in.Node,
    abort: _pi.Abort<d_function.Error>,
    $p: {
        'id': string,
        'write id': boolean,
    },
): d_out.ID => !$p['write id']
        ? _p.optional.literal.not_set()
        : _p.optional.literal.set({
            'key': r_unmarshalled_serialization_tree_from_serialization_tree.Property(
                $,
                abort,
                {
                    'id': "LionCore-M3:2024.1:IKeyed-key",
                }
            ),
            'id': $p['id'],
        })

export const M3 = (
    $: d_in.Serialization_Tree,
    abort: _pi.Abort<d_function.Error>,
    $p: {
        'write id': boolean
    },
): d_out.M3 => {
    const root_node = $['node tree']
    return _p_assert(
        abort,
        () => t_unmarshalled_serialization_tree_to_optional_error.Node_With_Possibly_Unexpected_Content(
            $['node tree'],
            {
                'expected containments': _p.dictionary.literal({
                }),
                'expected properties': _p.dictionary.literal({
                    "LionCore-M3:2024.1:Language-version": null,
                    "LionCore-M3:2024.1:Language-entities": null,
                }),
                'expected references': _p.dictionary.literal({
                    "LionCore-M3:2024.1:Language-dependsOn": null,
                }),
            }
        ),
        () => ({
            'id': ID(
                $['node tree'],
                abort,
                {
                    'id': $['root node id'],
                    'write id': $p['write id']
                }
            ),
            'version': r_unmarshalled_serialization_tree_from_serialization_tree.Property(
                $['node tree'],
                abort,
                {
                    'id': "LionCore-M3:2024.1:Language-version",
                }
            ),
            'entities': _p.dictionary.from.dictionary(
                r_unmarshalled_serialization_tree_from_serialization_tree.Containment(
                    $['node tree'],
                    abort,
                    {
                        'id': "LionCore-M3:2024.1:Language-entities",
                    }
                )
            ).re_id(
                ($, id) => r_unmarshalled_serialization_tree_from_serialization_tree.Property(
                    $,
                    abort,
                    {
                        'id': "LionCore-builtins:2024.1:LionCore-builtins-INamed-name",
                    }
                ),
                {
                    duplicate_id: ($, id) => abort({
                        'range': $.range,
                        'type': ['expected single element', id]
                    })
                },
            ).__d_map(
                ($, id) => {
                    return {
                        'id': ID(
                            $,
                            abort,
                            {
                                'id': id,
                                'write id': $p['write id']
                            }
                        ),
                        'type': _p.state.block((): d_out.M3.entities.D.type_ => _p_assert(
                            abort,
                            () => t_unmarshalled_serialization_tree_to_optional_error.Node_With_Possibly_Unexpected_Content(
                                $,
                                {
                                    'expected containments': _p.dictionary.literal({
                                        "LionCore-M3:2024.1:Classifier-features": null,
                                        "LionCore-M3:2024.1:Enumeration-literals": null,
                                    }),
                                    'expected properties': _p.dictionary.literal({
                                        "LionCore-M3:2024.1:IKeyed-key": null,
                                        "LionCore-builtins:2024.1:LionCore-builtins-INamed-name": null,
                                        "LionCore-M3:2024.1:Concept-abstract": null,
                                        "LionCore-M3:2024.1:Concept-partition": null,
                                    }),
                                    'expected references': _p.dictionary.literal({
                                        "LionCore-M3:2024.1:Concept-extends": null,
                                        "LionCore-M3:2024.1:Concept-implements": null,
                                        "LionCore-M3:2024.1:Interface-extends": null,
                                    }),
                                }
                            ),
                            (): d_out.M3.entities.D.type_ => {
                                const node = $
                                switch ($.classifier) {
                                    case "LionCore-M3:2024.1:Concept":
                                    case "LionCore-M3:2024.1:Interface":
                                        {
                                            return ['classifier', {
                                                'features': _p.dictionary.from.dictionary(
                                                    r_unmarshalled_serialization_tree_from_serialization_tree.Containment(
                                                        $,
                                                        abort,
                                                        {
                                                            'id': "LionCore-M3:2024.1:Classifier-features",
                                                        }
                                                    )
                                                ).re_id(
                                                    ($, id) => r_unmarshalled_serialization_tree_from_serialization_tree.Property(
                                                        $,
                                                        abort,
                                                        {
                                                            'id': "LionCore-builtins:2024.1:LionCore-builtins-INamed-name",
                                                        }
                                                    ),
                                                    {
                                                        duplicate_id: ($, id) => abort({
                                                            'range': $.range,
                                                            'type': ['expected single element', id]
                                                        })
                                                    },
                                                ).__d_map(($, id) => {
                                                    const node = $

                                                    return _p_assert(
                                                        abort,
                                                        () => t_unmarshalled_serialization_tree_to_optional_error.Node_With_Possibly_Unexpected_Content(
                                                            $,
                                                            {
                                                                'expected containments': _p.dictionary.literal({
                                                                    //empty
                                                                }),
                                                                'expected properties': _p.dictionary.literal({
                                                                    "LionCore-M3:2024.1:IKeyed-key": null,
                                                                    "LionCore-builtins:2024.1:LionCore-builtins-INamed-name": null,
                                                                    "LionCore-M3:2024.1:Feature-optional": null,
                                                                    "LionCore-M3:2024.1:Link-multiple": null,
                                                                }),
                                                                'expected references': _p.dictionary.literal({
                                                                    "LionCore-M3:2024.1:Link-type": null,
                                                                    "LionCore-M3:2024.1:Property-type": null,
                                                                })
                                                            }
                                                        ),
                                                        () => ({
                                                            'id': ID(
                                                                $,
                                                                abort,
                                                                {
                                                                    'id': id,
                                                                    'write id': $p['write id']
                                                                }
                                                            ),
                                                            'optional': r_unmarshalled_serialization_tree_from_serialization_tree.Property(
                                                                $,
                                                                abort,
                                                                {
                                                                    'id': "LionCore-M3:2024.1:Feature-optional",
                                                                }
                                                            ),
                                                            'type': _p.boolean.from.optional(
                                                                $.references.__get_possible_entry_deprecated(
                                                                    "LionCore-M3:2024.1:Link-type",
                                                                )
                                                            ).is_set()
                                                                ? ['link', {
                                                                    'multiple': r_unmarshalled_serialization_tree_from_serialization_tree.Property(
                                                                        $,
                                                                        abort,
                                                                        {
                                                                            'id': "LionCore-M3:2024.1:Link-multiple"
                                                                        }
                                                                    ),
                                                                    'type': r_unmarshalled_serialization_tree_from_serialization_tree.Single_Reference(
                                                                        $,
                                                                        abort,
                                                                        {

                                                                            'id': "LionCore-M3:2024.1:Link-type"
                                                                        },
                                                                    ),
                                                                    'link type': _p_change_context($.classifier, ($) => {
                                                                        switch ($) {
                                                                            case "LionCore-M3:2024.1:Reference":
                                                                                return ['reference', null]
                                                                            case "LionCore-M3:2024.1:Containment":
                                                                                return ['containment', null]
                                                                            default: return abort({
                                                                                'range': node.range,
                                                                                'type': ['unknown option', {
                                                                                    'option name': $,
                                                                                    'state name': "link type"
                                                                                }]
                                                                            })
                                                                        }
                                                                    })
                                                                }]
                                                                : ['property', {
                                                                    'type': r_unmarshalled_serialization_tree_from_serialization_tree.Single_Reference(
                                                                        $,
                                                                        abort,
                                                                        {
                                                                            'id': "LionCore-M3:2024.1:Property-type"
                                                                        }
                                                                    )
                                                                }]
                                                        })
                                                    )

                                                }),
                                                'type': _p.state.block((): d_out.M3.entities.D.type_.classifier.type_ => {
                                                    switch ($.classifier) {
                                                        case "LionCore-M3:2024.1:Concept": {
                                                            return ['concept', {
                                                                'abstract': r_unmarshalled_serialization_tree_from_serialization_tree.Property(
                                                                    $,
                                                                    abort,
                                                                    {
                                                                        'id': "LionCore-M3:2024.1:Concept-abstract"
                                                                    },
                                                                ),
                                                                'partition': r_unmarshalled_serialization_tree_from_serialization_tree.Property(
                                                                    $,
                                                                    abort,
                                                                    {
                                                                        'id': "LionCore-M3:2024.1:Concept-partition"
                                                                    },
                                                                ),
                                                                'extends': r_unmarshalled_serialization_tree_from_serialization_tree.Optional_Reference(
                                                                    $,
                                                                    abort,
                                                                    {
                                                                        'id': "LionCore-M3:2024.1:Concept-extends",

                                                                    }
                                                                ),
                                                                'implements': r_unmarshalled_serialization_tree_from_serialization_tree.Multiple_References(
                                                                    $,
                                                                    abort,
                                                                    {
                                                                        'id': "LionCore-M3:2024.1:Concept-implements",
                                                                    }
                                                                ),
                                                            }]
                                                        }
                                                        case "LionCore-M3:2024.1:Interface": return ['interface', {
                                                            'extends': r_unmarshalled_serialization_tree_from_serialization_tree.Multiple_References(
                                                                $,
                                                                abort,
                                                                {
                                                                    'id': "LionCore-M3:2024.1:Interface-extends",

                                                                }
                                                            ),
                                                        }]
                                                        default: return abort({
                                                            'range': node.range,
                                                            'type': ['unknown option', {
                                                                'option name': $.classifier,
                                                                'state name': "entity classifier"
                                                            }]
                                                        })
                                                    }
                                                })
                                            }]
                                        }
                                    case "LionCore-M3:2024.1:Enumeration": return ['datatype', ['enumeration', _p.dictionary.from.dictionary(
                                        r_unmarshalled_serialization_tree_from_serialization_tree.Containment(
                                            $,
                                            abort,
                                            {
                                                'id': "LionCore-M3:2024.1:Enumeration-literals"
                                            }
                                        )
                                    ).re_id(
                                        ($, id) => r_unmarshalled_serialization_tree_from_serialization_tree.Property(
                                            $,
                                            abort,
                                            {
                                                'id': "LionCore-builtins:2024.1:LionCore-builtins-INamed-name"
                                            }
                                        ),
                                        {
                                            'duplicate_id': ($, id) => abort({
                                                'range': $.range,
                                                'type': ['expected single element', id]
                                            })
                                        }
                                    ).__d_map(($, id) => {
                                        return _p_assert(
                                            abort,
                                            () => t_unmarshalled_serialization_tree_to_optional_error.Node_With_Possibly_Unexpected_Content(
                                                $,
                                                {
                                                    'expected containments': _p.dictionary.literal({
                                                        //empty
                                                    }),
                                                    'expected properties': _p.dictionary.literal({
                                                        "LionCore-M3:2024.1:IKeyed-key": null,
                                                        "LionCore-builtins:2024.1:LionCore-builtins-INamed-name": null,
                                                    }),
                                                    'expected references': _p.dictionary.literal({
                                                        //empty
                                                    }),
                                                }
                                            ),
                                            () => ID(
                                                $,
                                                abort,
                                                {
                                                    'id': id,
                                                    'write id': $p['write id'],
                                                }
                                            )
                                        )
                                    })
                                    ]]
                                    default: return abort({
                                        'range': node.range,
                                        'type': ['unknown option', {
                                            'option name': $.classifier,
                                            'state name': "entity classifier"
                                        }]
                                    })
                                }
                            }
                        ))
                    }
                }
            ),
            'dependencies': r_unmarshalled_serialization_tree_from_serialization_tree.Multiple_References(
                $['node tree'],
                abort,
                {
                    'id': "LionCore-M3:2024.1:Language-dependsOn",
                },
            ).__l_map(($) => ({
                'resolveInfo': $.resolveInfo,
                'reference': $.reference
            })),
        })
    )
}