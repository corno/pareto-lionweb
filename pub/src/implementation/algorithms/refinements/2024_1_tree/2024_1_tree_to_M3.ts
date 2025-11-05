import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d_in from "../../../../interface/generated/pareto/schemas/serialization_tree/data_types/source"
import * as d_out from "../../../../interface/generated/pareto/schemas/lioncore/data_types/target"

import { $$ as on_property_exists } from "../../../../temp/purification/on_property_exists"

import { $$ as expect_single_element } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/list/expect_exactly_one_element"

import * as h from "../context"

import { Signature } from "../../../../interface/algorithms/transformations/2024_1_tree/2024_1_tree_to_M3"



export const ID = (
    $: d_in.Node,
    id: string,
    write_id: boolean,
    context: h.Refinement_Context,
): d_out.ID => {
    return !write_id
        ? _ea.not_set()
        : _ea.set({
            'key': context.expect_property(
                $.properties,
                "LionCore-M3:2024.1:IKeyed-key",
                id,
            ),
            'id': id,
        })
}

export const M3 = (
    $p: {
        $: d_in.Serialization_Chunk,
        'write id': boolean
    },
    context: h.Refinement_Context,
): d_out.M3 => {


    return {
        'id': ID($p.$['node tree'], $p.$['root node id'], $p['write id'], context),
        'version': context.expect_property(
            $p.$['node tree'].properties,
            "LionCore-M3:2024.1:Language-version",
            "version",
        ),
        'entities': context.rekey(
            context.expect_property(
                $p.$['node tree'].containments,
                "LionCore-M3:2024.1:Language-entities",
                "entities",
            ).map(($, key) => {
                const entity_id = key
                return {
                    'key': context.expect_property(
                        $.properties,
                        "LionCore-builtins:2024.1:LionCore-builtins-INamed-name",
                        `entities/${entity_id}`
                    ),
                    'value': {
                        'id': ID($, key, $p['write id'], context),
                        'type': _ea.block((): d_out.M3.entities.D._type => {
                            context.expect_type(
                                $.properties,
                                _ea.dictionary_literal({
                                    "LionCore-M3:2024.1:IKeyed-key": null,
                                    "LionCore-builtins:2024.1:LionCore-builtins-INamed-name": null,
                                    "LionCore-M3:2024.1:Concept-abstract": null,
                                    "LionCore-M3:2024.1:Concept-partition": null,
                                }),
                                "entity " + key + " properties",
                            )
                            context.expect_type(
                                $.containments,
                                _ea.dictionary_literal({
                                    "LionCore-M3:2024.1:Classifier-features": null,
                                    "LionCore-M3:2024.1:Enumeration-literals": null,
                                }),
                                "entity " + key + " containments",
                            )

                            context.expect_type(
                                $.references,
                                _ea.dictionary_literal({
                                    "LionCore-M3:2024.1:Concept-extends": null,
                                    "LionCore-M3:2024.1:Concept-implements": null,
                                    "LionCore-M3:2024.1:Interface-extends": null,
                                }),
                                "entity " + key + " references",
                            )
                            switch ($.classifier) {
                                case "LionCore-M3:2024.1:Concept":
                                case "LionCore-M3:2024.1:Interface":
                                    {
                                        return ['classifier', {
                                            'features': context.rekey(
                                                context.expect_property(
                                                    $.containments,
                                                    "LionCore-M3:2024.1:Classifier-features",
                                                    "features of entity " + key,
                                                ).map(($, key) => {
                                                    const feature_id = entity_id + ">" + key
                                                    context.expect_type($.properties,
                                                        _ea.dictionary_literal({
                                                            "LionCore-M3:2024.1:IKeyed-key": null,
                                                            "LionCore-builtins:2024.1:LionCore-builtins-INamed-name": null,
                                                            "LionCore-M3:2024.1:Feature-optional": null,
                                                            "LionCore-M3:2024.1:Link-multiple": null,
                                                        }),
                                                        "feature properties of entity " + feature_id,
                                                    )
                                                    context.expect_type(
                                                        $.references, _ea.dictionary_literal({
                                                            "LionCore-M3:2024.1:Link-type": null,
                                                            "LionCore-M3:2024.1:Property-type": null,
                                                        }),
                                                        "feature references of entity " + feature_id,
                                                    )
                                                    context.expect_type(
                                                        $.containments, _ea.dictionary_literal({
                                                            //empty
                                                        }),
                                                        "feature containments of entity " + feature_id,
                                                    )

                                                    //FIXME
                                                    return {
                                                        'key': context.expect_property(
                                                            $.properties,
                                                            key,
                                                            "LionCore-builtins:2024.1:LionCore-builtins-INamed-name",
                                                        ),
                                                        'value': {
                                                            'id': ID($, key, $p['write id'], context),
                                                            'optional': context.expect_property(
                                                                $.properties,
                                                                "LionCore-M3:2024.1:Feature-optional",
                                                                "optional property of feature: " + feature_id,
                                                            ),
                                                            'type': on_property_exists(
                                                                $.references,
                                                                "LionCore-M3:2024.1:Link-type",
                                                                (_dont_use_) => {
                                                                    return ['link', {
                                                                        'multiple': context.expect_property(
                                                                            $.properties,
                                                                            "LionCore-M3:2024.1:Link-multiple",
                                                                            "multiple property of link: " + feature_id,
                                                                        ),
                                                                        'type': expect_single_element(context.expect_property(
                                                                            $.references,
                                                                            "LionCore-M3:2024.1:Link-type",
                                                                            "type property of link: " + feature_id,
                                                                        )).transform(
                                                                            ($) => $,
                                                                            () => context.abort(['expected exactly one element for link type of feature', feature_id])
                                                                        ),
                                                                        'link type': _ea.cc($.classifier, ($) => {
                                                                            switch ($) {
                                                                                case "LionCore-M3:2024.1:Reference":
                                                                                    return ['reference', null]
                                                                                case "LionCore-M3:2024.1:Containment":
                                                                                    return ['containment', null]
                                                                                default: return context.abort(['unknown feature classifier type', feature_id])
                                                                            }
                                                                        })
                                                                    }] as d_out.M3.entities.D._type.SG.classifier.features.D._type
                                                                },
                                                                () => {
                                                                    return ['property', {
                                                                        'type': expect_single_element(context.expect_property(
                                                                            $.references,
                                                                            "LionCore-M3:2024.1:Property-type",
                                                                            "type property of property: " + feature_id,
                                                                        )).transform(
                                                                            ($) => $,
                                                                            () => context.abort(['expected exactly one element for property type of feature', feature_id])
                                                                        ),
                                                                    }] as d_out.M3.entities.D._type.SG.classifier.features.D._type
                                                                }
                                                            ),

                                                        }
                                                    }
                                                }),
                                            ),
                                            'type': _ea.block((): d_out.M3.entities.D._type.SG.classifier._type => {
                                                switch ($.classifier) {
                                                    case "LionCore-M3:2024.1:Concept": {
                                                        return ['concept', {
                                                            'abstract': context.expect_property(
                                                                $.properties,
                                                                "LionCore-M3:2024.1:Concept-abstract",
                                                                "concept " + key,
                                                            ),
                                                            'partition': context.expect_property(
                                                                $.properties,
                                                                "LionCore-M3:2024.1:Concept-partition",
                                                                "concept " + key,
                                                            ),
                                                            'extends': expect_single_element(context.expect_property(
                                                                $.references,
                                                                "LionCore-M3:2024.1:Concept-extends",
                                                                "concept " + key,
                                                            )),
                                                            'implements': context.expect_property(
                                                                $.references,
                                                                "LionCore-M3:2024.1:Concept-implements",
                                                                "concept " + key,
                                                            ),
                                                        }]
                                                    }
                                                    case "LionCore-M3:2024.1:Interface": {
                                                        return ['interface', {
                                                            'extends': context.expect_property(
                                                                $.references,
                                                                "LionCore-M3:2024.1:Interface-extends",
                                                                "interface " + key,
                                                            ),
                                                        }]
                                                    }
                                                    default: return context.abort(['unknown classifier type', entity_id])
                                                }
                                            })
                                        }]
                                    }
                                case "LionCore-M3:2024.1:Enumeration": {
                                    // temp_log_node(`Enumeration ${key}`, $)
                                    return ['datatype', ['enumeration', context.rekey(
                                        context.expect_property(
                                            $.containments,
                                            "LionCore-M3:2024.1:Enumeration-literals",
                                            "literals of enumeration " + key,
                                        ).map(($, key) => {
                                            context.expect_type(
                                                $.properties,
                                                _ea.dictionary_literal({
                                                    "LionCore-M3:2024.1:IKeyed-key": null,
                                                    "LionCore-builtins:2024.1:LionCore-builtins-INamed-name": null,
                                                }),
                                                "literal properties of enumeration " + key,
                                            )
                                            context.expect_type(
                                                $.references,
                                                _ea.dictionary_literal({
                                                    //empty
                                                }),
                                                "literal references of enumeration " + key,
                                            )
                                            context.expect_type(
                                                $.containments,
                                                _ea.dictionary_literal({
                                                    //empty
                                                }),
                                                "literal containments of enumeration " + key,
                                            )
                                            return {
                                                'key': context.expect_property(
                                                    $.properties,
                                                    "LionCore-builtins:2024.1:LionCore-builtins-INamed-name",
                                                    key,
                                                ),
                                                'value': ID($, key, $p['write id'], context),
                                            }
                                        }),
                                    )]]
                                }
                                default: return context.abort(['unknown entity classifier type', entity_id])
                            }
                        })
                    }
                }
            }),
        ),
        'dependencies': context.expect_property(
            $p.$['node tree'].references,
            "LionCore-M3:2024.1:Language-dependsOn",
            "dependencies",
        ).map(($) => {
            return {
                'resolveInfo': $.resolveInfo,
                'reference': $.reference
            }
        }),
    }
}