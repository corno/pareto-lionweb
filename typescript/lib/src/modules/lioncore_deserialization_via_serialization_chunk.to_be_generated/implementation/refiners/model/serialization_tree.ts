import * as p_ from 'pareto-core/implementation/refiner'
import * as p_temp from 'pareto-core/implementation/transformer'
import p_assert from 'pareto-core/implementation/refiner/specials/assert'
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'
import * as p_di from 'pareto-core/interface/schema'

//schemas
import type * as s_in from "../../../schemas/tree.js"
import type * as s_out_generic from "../../../../liana.generated/modules/generic_types/schemas/unconstrained.js"
import type * as s_error from "../../../../tree_node_unmarshalling/schemas/document_construction.js"
import type * as s_out from "../../../schemas/lioncore.js"
import type * as s_parameters from "../../../schemas/construction.js"

namespace declarations {
    export type ID = p_.Refiner_With_Parameter<
        s_out_generic.ID,
        s_error.Error,
        s_in.Node,
        {
            'id': string,
            'write source': boolean,
        }
    >

    export type M3 = p_.Refiner_With_Parameter<
        s_out.M3,
        s_error.Error,
        s_in.Serialization_Tree,
        s_parameters.M3_Parameters
    >


}


//dependencies
import * as r_unmarshalled_tree_node_from_serialization_tree from "../../../../tree_node_unmarshalling/implementation/refiners/unmarshalled_node/serialization_tree.js"
import * as t_unmarshalled_tree_node_to_optional_error from "../../../../tree_node_unmarshalling/implementation/transformers/unmarshalled_node/possibly_unexpected_content.js"

export const ID: declarations.ID = ($, abort, $p) => ({
    'key': r_unmarshalled_tree_node_from_serialization_tree.Property(
        $,
        ($) => abort(['node unmarshalling', $]),
        {
            'id': "LionCore-M3:2024.1:IKeyed-key",
        }
    ),
    'id': $p['id'],
    'source': $p['write source']
        ? p_.literal.set($.range)
        : p_.literal.not_set(),
})

export const M3: declarations.M3 = ($, abort, $p) => p_assert(
    abort,
    () => p_.from.optional(
        t_unmarshalled_tree_node_to_optional_error.Node_With_Possibly_Unexpected_Content(
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
        )
    ).map(
        ($) => ['unexpected content', $]
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
            'version': r_unmarshalled_tree_node_from_serialization_tree.Property(
                $['node tree'],
                ($) => abort(['node unmarshalling', $]),
                {
                    'id': "LionCore-M3:2024.1:Language-version",
                }
            ),
        },
        'references': {
            'dependencies': p_.from.list(r_unmarshalled_tree_node_from_serialization_tree.Multiple_References(
                $['node tree'],
                ($) => abort(['node unmarshalling', $]),
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
                p_.from.dictionary(r_unmarshalled_tree_node_from_serialization_tree.Multiple_Containments(
                    $['node tree'],
                    ($) => abort(['node unmarshalling', $]),
                    {
                        'id': "LionCore-M3:2024.1:Language-entities",
                    }
                )
                ).re_id(
                    ($, id) => r_unmarshalled_tree_node_from_serialization_tree.Property(
                        $,
                        ($) => abort(['node unmarshalling', $]),
                        {
                            'id': "LionCore-builtins:2024.1:LionCore-builtins-INamed-name",
                        }
                    ),
                    ($, id) => abort(['expected single element', {
                        'name': id,
                        'node': $,
                    }]),
                )
            ).map(
                ($, id) => {
                    return p_assert(
                        abort,
                        () => p_.from.optional(
                            t_unmarshalled_tree_node_to_optional_error.Node_With_Possibly_Unexpected_Content(
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
                            )
                        ).map(
                            ($) => ['unexpected content', $]
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
                                ($, text): s_out.M3.containments.entities.D.classifier => {
                                    switch (text) {
                                        case "LionCore-M3:2024.1:Concept":
                                        case "LionCore-M3:2024.1:Interface":
                                            {
                                                return ['Classifier', {
                                                    'classifier': p_.from.text($.classifier).to_state(
                                                        $,
                                                        ($, text): s_out.M3.containments.entities.D.classifier.Classifier.classifier => {
                                                            switch (text) {
                                                                case "LionCore-M3:2024.1:Concept": {
                                                                    return ['Concept', {
                                                                        'properties': {
                                                                            'abstract': r_unmarshalled_tree_node_from_serialization_tree.Property(
                                                                                $,
                                                                                ($) => abort(['node unmarshalling', $]),
                                                                                {
                                                                                    'id': "LionCore-M3:2024.1:Concept-abstract"
                                                                                },
                                                                            ),
                                                                            'partition': r_unmarshalled_tree_node_from_serialization_tree.Property(
                                                                                $,
                                                                                ($) => abort(['node unmarshalling', $]),
                                                                                {
                                                                                    'id': "LionCore-M3:2024.1:Concept-partition"
                                                                                },
                                                                            ),
                                                                        },
                                                                        'references': {
                                                                            'extends': r_unmarshalled_tree_node_from_serialization_tree.Optional_Reference(
                                                                                $,
                                                                                ($) => abort(['node unmarshalling', $]),
                                                                                {
                                                                                    'id': "LionCore-M3:2024.1:Concept-extends",

                                                                                }
                                                                            ),
                                                                            'implements': r_unmarshalled_tree_node_from_serialization_tree.Multiple_References(
                                                                                $,
                                                                                ($) => abort(['node unmarshalling', $]),
                                                                                {
                                                                                    'id': "LionCore-M3:2024.1:Concept-implements",
                                                                                }
                                                                            ),
                                                                        },
                                                                    }]
                                                                }
                                                                case "LionCore-M3:2024.1:Interface": return ['Interface', {
                                                                    'references': {
                                                                        'extends': r_unmarshalled_tree_node_from_serialization_tree.Multiple_References(
                                                                            $,
                                                                            ($) => abort(['node unmarshalling', $]),
                                                                            {
                                                                                'id': "LionCore-M3:2024.1:Interface-extends",

                                                                            }
                                                                        ),
                                                                    },
                                                                }]
                                                                default: return abort(['unknown option', {
                                                                    'node': $,
                                                                    'option name': $.classifier,
                                                                    'state name': "entity classifier"
                                                                }])
                                                            }
                                                        }),
                                                    'containments': {
                                                        'features': p_temp.from.dictionary(
                                                            p_.from.dictionary(r_unmarshalled_tree_node_from_serialization_tree.Multiple_Containments(
                                                                $,
                                                                ($) => abort(['node unmarshalling', $]),
                                                                {
                                                                    'id': "LionCore-M3:2024.1:Classifier-features",
                                                                }
                                                            )
                                                            ).re_id(
                                                                ($, id) => r_unmarshalled_tree_node_from_serialization_tree.Property(
                                                                    $,
                                                                    ($) => abort(['node unmarshalling', $]),
                                                                    {
                                                                        'id': "LionCore-builtins:2024.1:LionCore-builtins-INamed-name",
                                                                    }
                                                                ),
                                                                ($, id) => abort(['expected single element', {
                                                                    'name': id,
                                                                    'node': $,
                                                                }]),
                                                            )
                                                        ).map(
                                                            ($, id): s_out.M3.containments.entities.D.classifier.Classifier.containments.features.D => {
                                                                const node = $

                                                                return p_assert(
                                                                    abort,
                                                                    () => p_.from.optional(
                                                                        t_unmarshalled_tree_node_to_optional_error.Node_With_Possibly_Unexpected_Content(
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
                                                                        )
                                                                    ).map(
                                                                        ($) => ['unexpected content', $]
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
                                                                            (): s_out.M3.containments.entities.D.classifier.Classifier.containments.features.D.classifier => ['Link', {
                                                                                'classifier': p_change_context($.classifier, ($) => {
                                                                                    switch ($) {
                                                                                        case "LionCore-M3:2024.1:Reference":
                                                                                            return ['Reference', null]
                                                                                        case "LionCore-M3:2024.1:Containment":
                                                                                            return ['Containment', null]
                                                                                        default: return abort(['unknown option', {
                                                                                            'node': node,
                                                                                            'option name': $,
                                                                                            'state name': "link type"
                                                                                        }])
                                                                                    }
                                                                                }),
                                                                                'properties': {
                                                                                    'multiple': r_unmarshalled_tree_node_from_serialization_tree.Property(
                                                                                        $,
                                                                                        ($) => abort(['node unmarshalling', $]),
                                                                                        {
                                                                                            'id': "LionCore-M3:2024.1:Link-multiple"
                                                                                        }
                                                                                    ),
                                                                                },
                                                                                'references': {
                                                                                    'type': r_unmarshalled_tree_node_from_serialization_tree.Singular_Reference(
                                                                                        $,
                                                                                        ($) => abort(['node unmarshalling', $]),
                                                                                        {

                                                                                            'id': "LionCore-M3:2024.1:Link-type"
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            }],
                                                                            () => ['Property', {
                                                                                'references': {
                                                                                    'type': r_unmarshalled_tree_node_from_serialization_tree.Singular_Reference(
                                                                                        $,
                                                                                        ($) => abort(['node unmarshalling', $]),
                                                                                        {
                                                                                            'id': "LionCore-M3:2024.1:Property-type"
                                                                                        }
                                                                                    )
                                                                                },
                                                                            }],
                                                                        ),
                                                                        'properties': {
                                                                            'optional': r_unmarshalled_tree_node_from_serialization_tree.Property(
                                                                                $,
                                                                                ($) => abort(['node unmarshalling', $]),
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
                                            p_.from.dictionary(r_unmarshalled_tree_node_from_serialization_tree.Multiple_Containments(
                                                $,
                                                ($) => abort(['node unmarshalling', $]),
                                                {
                                                    'id': "LionCore-M3:2024.1:Enumeration-literals"
                                                }
                                            )).re_id(
                                                ($, id) => r_unmarshalled_tree_node_from_serialization_tree.Property(
                                                    $,
                                                    ($) => abort(['node unmarshalling', $]),
                                                    {
                                                        'id': "LionCore-builtins:2024.1:LionCore-builtins-INamed-name"
                                                    }
                                                ),
                                                ($, id) => abort(['expected single element', {
                                                    'name': id,
                                                    'node': $,
                                                }])
                                            )
                                        ).map(
                                            ($, id) => {
                                                return p_assert(
                                                    abort,
                                                    () => p_.from.optional(
                                                        t_unmarshalled_tree_node_to_optional_error.Node_With_Possibly_Unexpected_Content(
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
                                                        )
                                                    ).map(
                                                        ($) => ['unexpected content', $]
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
                                        default: return abort(['unknown option', {
                                            'node': $,
                                            'option name': $.classifier,
                                            'state name': "entity classifier"
                                        }])
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