import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_temp from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/refiner'
import p_assert from 'pareto-core/dist/implementation/refiner/specials/assert'
import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/serialization_tree/data"
import * as d_out from "../../../../interface/generated/liana/schemas/lioncore/data"
import * as d_out_generic from "../../../../interface/generated/liana/schemas/generic/data"
import * as d_function from "../../../../modules/lionweb-core/interface/data/lion_core_from_serialization_tree"

export namespace interface_ {
    export type ID = p_i.Refiner_With_Parameter<
        d_out_generic.ID,
        d_function.Error,
        d_in.Node,
        {
            'id': string,
            'write source': boolean,
        }
    >

    export type M3 = p_i.Refiner_With_Parameter<
        d_out.M3,
        d_function.Error,
        d_in.Serialization_Tree,
        {
            'write source': boolean
        }
    >
}

//dependencies
import * as r_unmarshalled_serialization_tree_from_serialization_tree from "../../../../modules/lionweb-core/implementation/manual/refiners/unmarshalled_serialization_tree/serialization_tree"
import * as t_unmarshalled_serialization_tree_to_optional_error from "../../../../modules/lionweb-core/implementation/manual/transformers/unmarshalled_serialization_tree/unmarshall_serialization_tree"

export const ID: interface_.ID = ($, abort, $p) => ({
    'key': r_unmarshalled_serialization_tree_from_serialization_tree.Property(
        $,
        abort,
        {
            'id': "LionCore-M3:2024.1:IKeyed-key",
        }
    ),
    'id': $p['id'],
    'source': $p['write source']
        ? p_.literal.set($.range)
        : p_.literal.not_set(),
})

export const M3: interface_.M3 = ($, abort, $p) => p_assert(
    abort,
    () => t_unmarshalled_serialization_tree_to_optional_error.Node_With_Possibly_Unexpected_Content(
        $['node tree'],
        {
            'expected containments': p_.literal.dictionary({
                "LionCore-M3:2024.1:Language-entities": null,
            }),
            'expected properties': p_.literal.dictionary({
                "LionCore-M3:2024.1:Language-version": null,
                "LionCore-builtins:2024.1:LionCore-builtins-INamed-name": null,
                "LionCore-M3:2024.1:IKeyed-key": null,
            }),
            'expected references': p_.literal.dictionary({
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
            'dependencies': p_.from.list(r_unmarshalled_serialization_tree_from_serialization_tree.Multiple_References(
                $['node tree'],
                abort,
                {
                    'id': "LionCore-M3:2024.1:Language-dependsOn",
                },
            )
            ).map(
                ($) => ({
                    'resolveInfo': $.resolveInfo,
                    'reference': $.reference
                })),
        },
        'containments': {
            'entities': p_temp.from.dictionary(
                p_temp.from.dictionary(r_unmarshalled_serialization_tree_from_serialization_tree.Multiple_Containments(
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
                )
            ).map(
                ($, id) => {
                    return p_assert(
                        abort,
                        () => t_unmarshalled_serialization_tree_to_optional_error.Node_With_Possibly_Unexpected_Content(
                            $,
                            {
                                'expected containments': p_.literal.dictionary({
                                    "LionCore-M3:2024.1:Classifier-features": null,
                                    "LionCore-M3:2024.1:Enumeration-literals": null,
                                }),
                                'expected properties': p_.literal.dictionary({
                                    "LionCore-M3:2024.1:IKeyed-key": null,
                                    "LionCore-builtins:2024.1:LionCore-builtins-INamed-name": null,
                                    "LionCore-M3:2024.1:Concept-abstract": null,
                                    "LionCore-M3:2024.1:Concept-partition": null,
                                }),
                                'expected references': p_.literal.dictionary({
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
                            'classifier': p_.from.text($.classifier).to_state(
                                $,
                                ($, text): d_out.M3.containments.entities.D.classifier => {
                                    switch (text) {
                                        case "LionCore-M3:2024.1:Concept":
                                        case "LionCore-M3:2024.1:Interface":
                                            {
                                                return ['Classifier', {
                                                    'classifier': p_.from.text($.classifier).to_state(
                                                        $,
                                                        ($, text): d_out.M3.containments.entities.D.classifier.Classifier.classifier => {
                                                            switch (text) {
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
                                                                    'node': $,
                                                                    'type': ['unknown option', {
                                                                        'option name': $.classifier,
                                                                        'state name': "entity classifier"
                                                                    }]
                                                                })
                                                            }
                                                        }),
                                                    'containments': {
                                                        'features': p_temp.from.dictionary(
                                                            p_temp.from.dictionary(r_unmarshalled_serialization_tree_from_serialization_tree.Multiple_Containments(
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
                                                            )
                                                        ).map(
                                                            ($, id): d_out.M3.containments.entities.D.classifier.Classifier.containments.features.D => {
                                                                const node = $

                                                                return p_assert(
                                                                    abort,
                                                                    () => t_unmarshalled_serialization_tree_to_optional_error.Node_With_Possibly_Unexpected_Content(
                                                                        $,
                                                                        {
                                                                            'expected containments': p_.literal.dictionary({
                                                                                //empty
                                                                            }),
                                                                            'expected properties': p_.literal.dictionary({
                                                                                "LionCore-M3:2024.1:IKeyed-key": null,
                                                                                "LionCore-builtins:2024.1:LionCore-builtins-INamed-name": null,
                                                                                "LionCore-M3:2024.1:Feature-optional": null,
                                                                                "LionCore-M3:2024.1:Link-multiple": null,
                                                                            }),
                                                                            'expected references': p_.literal.dictionary({
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
                                                                        'classifier': p_temp.from.optional(p_.from.dictionary($.references).get_possible_entry(
                                                                            "LionCore-M3:2024.1:Link-type",
                                                                        )
                                                                        ).decide(
                                                                            (): d_out.M3.containments.entities.D.classifier.Classifier.containments.features.D.classifier => ['Link', {
                                                                                'classifier': p_change_context($.classifier, ($) => {
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
                                                                            }],
                                                                            () => ['Property', {
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
                                                                        ),
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
                                        case "LionCore-M3:2024.1:Enumeration": return ['Datatype', ['Enumeration', p_temp.from.dictionary(
                                            p_temp.from.dictionary(r_unmarshalled_serialization_tree_from_serialization_tree.Multiple_Containments(
                                                $,
                                                abort,
                                                {
                                                    'id': "LionCore-M3:2024.1:Enumeration-literals"
                                                }
                                            )).re_id(
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
                                            )
                                        ).map(
                                            ($, id) => {
                                                return p_assert(
                                                    abort,
                                                    () => t_unmarshalled_serialization_tree_to_optional_error.Node_With_Possibly_Unexpected_Content(
                                                        $,
                                                        {
                                                            'expected containments': p_.literal.dictionary({
                                                                //empty
                                                            }),
                                                            'expected properties': p_.literal.dictionary({
                                                                "LionCore-M3:2024.1:IKeyed-key": null,
                                                                "LionCore-builtins:2024.1:LionCore-builtins-INamed-name": null,
                                                            }),
                                                            'expected references': p_.literal.dictionary({
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
                                            'node': $,
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