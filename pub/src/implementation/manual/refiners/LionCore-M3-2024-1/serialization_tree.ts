import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_assert from 'pareto-core/dist/_p_assert'
import _p_change_context from 'pareto-core/dist/_p_change_context'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/serialization_tree/data"
import * as d_out from "../../../../interface/generated/liana/schemas/lioncore/data"
import * as d_out_generic from "../../../../interface/generated/liana/schemas/generic/data"
import * as d_function from "../../../../modules/lionweb-core/interface/to_be_generated/unmarshall_serialization_tree"

//dependencies
import * as r_unmarshalled_serialization_tree_from_serialization_tree from "../../../../modules/lionweb-core/implementation/manual/refiners/unmarshalled_serialization_tree/serialization_tree"
import * as t_unmarshalled_serialization_tree_to_optional_error from "../../../../modules/lionweb-core/implementation/manual/transformers/unmarshalled_serialization_tree/unmarshall_serialization_tree"

export const ID = (
    $: d_in.Node,
    abort: _pi.Abort<d_function.Error>,
    $p: {
        'id': string,
        'write source': boolean,
    },
): d_out_generic.ID => ({
    'key': r_unmarshalled_serialization_tree_from_serialization_tree.Property(
        $,
        abort,
        {
            'id': "LionCore-M3:2024.1:IKeyed-key",
        }
    ),
    'id': $p['id'],
    'source': $p['write source']
        ? _p.optional.literal.set($.range)
        : _p.optional.literal.not_set(),
})

export const M3 = (
    $: d_in.Serialization_Tree,
    abort: _pi.Abort<d_function.Error>,
    $p: {
        'write source': boolean
    },
): d_out.M3 => {
    return _p_assert(
        abort,
        () => t_unmarshalled_serialization_tree_to_optional_error.Node_With_Possibly_Unexpected_Content(
            $['node tree'],
            {
                'expected containments': _p.dictionary.literal({
                    "LionCore-M3:2024.1:Language-entities": null,
                }),
                'expected properties': _p.dictionary.literal({
                    "LionCore-M3:2024.1:Language-version": null,
                    "LionCore-builtins:2024.1:LionCore-builtins-INamed-name": null,
                    "LionCore-M3:2024.1:IKeyed-key": null,
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
                    'write source': $p['write source'],
                }
            ),
            'properties': {
                'version': r_unmarshalled_serialization_tree_from_serialization_tree.Property(
                    $['node tree'],
                    abort,
                    {
                        'id': "LionCore-M3:2024.1:Language-version",
                    }
                ),
            },
            'references': {
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
            },
            'containments': {
                'entities': _p.dictionary.from.dictionary(
                    r_unmarshalled_serialization_tree_from_serialization_tree.Multiple_Containments(
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
                            'node': $,
                            'type': ['expected single element', id]
                        })
                    },
                ).__d_map(
                    ($, id) => {
                        return _p_assert(
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
                            () => ({
                                'id': ID(
                                    $,
                                    abort,
                                    {
                                        'id': id,
                                        'write source': $p['write source']
                                    }
                                ),
                                'classifier': _p.state.block((): d_out.M3.containments.entities.D.classifier => {
                                    const node = $
                                    switch ($.classifier) {
                                        case "LionCore-M3:2024.1:Concept":
                                        case "LionCore-M3:2024.1:Interface":
                                            {
                                                return ['Classifier', {
                                                    'classifier': _p.state.block((): d_out.M3.containments.entities.D.classifier.Classifier.classifier => {
                                                        switch ($.classifier) {
                                                            case "LionCore-M3:2024.1:Concept": {
                                                                return ['Concept', {
                                                                    'properties': {
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
                                                                    },
                                                                    'references': {
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
                                                                    },
                                                                }]
                                                            }
                                                            case "LionCore-M3:2024.1:Interface": return ['Interface', {
                                                                'references': {
                                                                    'extends': r_unmarshalled_serialization_tree_from_serialization_tree.Multiple_References(
                                                                        $,
                                                                        abort,
                                                                        {
                                                                            'id': "LionCore-M3:2024.1:Interface-extends",

                                                                        }
                                                                    ),
                                                                },
                                                            }]
                                                            default: return abort({
                                                                'node': node,
                                                                'type': ['unknown option', {
                                                                    'option name': $.classifier,
                                                                    'state name': "entity classifier"
                                                                }]
                                                            })
                                                        }
                                                    }),
                                                    'containments': {
                                                        'features': _p.dictionary.from.dictionary(
                                                            r_unmarshalled_serialization_tree_from_serialization_tree.Multiple_Containments(
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
                                                                    'node': $,
                                                                    'type': ['expected single element', id]
                                                                })
                                                            },
                                                        ).__d_map(($, id): d_out.M3.containments.entities.D.classifier.Classifier.containments.features.D => {
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
                                                                            'write source': $p['write source']
                                                                        }
                                                                    ),
                                                                    'classifier': _p.boolean.from.optional(
                                                                        $.references.__get_possible_entry_deprecated(
                                                                            "LionCore-M3:2024.1:Link-type",
                                                                        )
                                                                    ).is_set()
                                                                        ? ['Link', {
                                                                            'classifier': _p_change_context($.classifier, ($) => {
                                                                                switch ($) {
                                                                                    case "LionCore-M3:2024.1:Reference":
                                                                                        return ['Reference', null]
                                                                                    case "LionCore-M3:2024.1:Containment":
                                                                                        return ['Containment', null]
                                                                                    default: return abort({
                                                                                        'node': node,
                                                                                        'type': ['unknown option', {
                                                                                            'option name': $,
                                                                                            'state name': "link type"
                                                                                        }]
                                                                                    })
                                                                                }
                                                                            }),
                                                                            'properties': {
                                                                                'multiple': r_unmarshalled_serialization_tree_from_serialization_tree.Property(
                                                                                    $,
                                                                                    abort,
                                                                                    {
                                                                                        'id': "LionCore-M3:2024.1:Link-multiple"
                                                                                    }
                                                                                ),
                                                                            },
                                                                            'references': {
                                                                                'type': r_unmarshalled_serialization_tree_from_serialization_tree.Singular_Reference(
                                                                                    $,
                                                                                    abort,
                                                                                    {

                                                                                        'id': "LionCore-M3:2024.1:Link-type"
                                                                                    },
                                                                                ),
                                                                            },
                                                                        }]
                                                                        : ['Property', {
                                                                            'references': {
                                                                                'type': r_unmarshalled_serialization_tree_from_serialization_tree.Singular_Reference(
                                                                                    $,
                                                                                    abort,
                                                                                    {
                                                                                        'id': "LionCore-M3:2024.1:Property-type"
                                                                                    }
                                                                                )
                                                                            },
                                                                        }],
                                                                    'properties': {
                                                                        'optional': r_unmarshalled_serialization_tree_from_serialization_tree.Property(
                                                                            $,
                                                                            abort,
                                                                            {
                                                                                'id': "LionCore-M3:2024.1:Feature-optional",
                                                                            }
                                                                        ),
                                                                    }
                                                                })
                                                            )

                                                        }),
                                                    },
                                                }]
                                            }
                                        case "LionCore-M3:2024.1:Enumeration": return ['Datatype', ['Enumeration', _p.dictionary.from.dictionary(
                                            r_unmarshalled_serialization_tree_from_serialization_tree.Multiple_Containments(
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
                                                    'node': $,
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
                                                () => ({
                                                    'id': ID(
                                                        $,
                                                        abort,
                                                        {
                                                            'id': id,
                                                            'write source': $p['write source'],
                                                        }
                                                    )
                                                })
                                            )
                                        })
                                        ]]
                                        default: return abort({
                                            'node': node,
                                            'type': ['unknown option', {
                                                'option name': $.classifier,
                                                'state name': "entity classifier"
                                            }]
                                        })
                                    }
                                }),
                                'properties': {
                                },
                            })
                        )
                    }
                ),

            },
        })
    )
}