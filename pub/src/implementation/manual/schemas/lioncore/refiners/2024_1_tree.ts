import * as _p from 'pareto-core-refiner'

import * as d_in from "../../../../../interface/generated/pareto/schemas/serialization_tree/data_types/source"
import * as d_out from "../../../../../interface/generated/pareto/schemas/lioncore/data_types/target"

import { $$ as expect_single_element } from "pareto-standard-operations/dist/implementation/operations/impure/list/expect_exactly_one_element"

import * as h from "../../../../temp_context"


export const ID = (
    $: d_in.Node,
    id: string,
    write_id: boolean,
    context: h.Refinement_Context,
): d_out.ID => {
    return !write_id
        ? _p.optional.not_set()
        : _p.optional.set({
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
                        'type': _p.block((): d_out.M3.entities.D._type => {
                            context.expect_type(
                                $.properties,
                                _p.dictionary.literal({
                                    "LionCore-M3:2024.1:IKeyed-key": null,
                                    "LionCore-builtins:2024.1:LionCore-builtins-INamed-name": null,
                                    "LionCore-M3:2024.1:Concept-abstract": null,
                                    "LionCore-M3:2024.1:Concept-partition": null,
                                }),
                                "entity " + key + " properties",
                            )
                            context.expect_type(
                                $.containments,
                                _p.dictionary.literal({
                                    "LionCore-M3:2024.1:Classifier-features": null,
                                    "LionCore-M3:2024.1:Enumeration-literals": null,
                                }),
                                "entity " + key + " containments",
                            )

                            context.expect_type(
                                $.references,
                                _p.dictionary.literal({
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
                                                        _p.dictionary.literal({
                                                            "LionCore-M3:2024.1:IKeyed-key": null,
                                                            "LionCore-builtins:2024.1:LionCore-builtins-INamed-name": null,
                                                            "LionCore-M3:2024.1:Feature-optional": null,
                                                            "LionCore-M3:2024.1:Link-multiple": null,
                                                        }),
                                                        "feature properties of entity " + feature_id,
                                                    )
                                                    context.expect_type(
                                                        $.references, _p.dictionary.literal({
                                                            "LionCore-M3:2024.1:Link-type": null,
                                                            "LionCore-M3:2024.1:Property-type": null,
                                                        }),
                                                        "feature references of entity " + feature_id,
                                                    )
                                                    context.expect_type(
                                                        $.containments, _p.dictionary.literal({
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
                                                            'type': $.references.get_possible_entry(
                                                                "LionCore-M3:2024.1:Link-type",
                                                            ).is_set()
                                                                ? ['link', {
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
                                                                    'link type': _p.cc($.classifier, ($) => {
                                                                        switch ($) {
                                                                            case "LionCore-M3:2024.1:Reference":
                                                                                return ['reference', null]
                                                                            case "LionCore-M3:2024.1:Containment":
                                                                                return ['containment', null]
                                                                            default: return context.abort(['unknown feature classifier type', feature_id])
                                                                        }
                                                                    })
                                                                }]
                                                                : ['property', {
                                                                    'type': expect_single_element(context.expect_property(
                                                                        $.references,
                                                                        "LionCore-M3:2024.1:Property-type",
                                                                        "type property of property: " + feature_id,
                                                                    )).transform(
                                                                        ($) => $,
                                                                        () => context.abort(['expected exactly one element for property type of feature', feature_id])
                                                                    ),
                                                                }]

                                                        }
                                                    }
                                                }),
                                            ),
                                            'type': _p.block((): d_out.M3.entities.D._type.SG.classifier._type => {
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
                                                _p.dictionary.literal({
                                                    "LionCore-M3:2024.1:IKeyed-key": null,
                                                    "LionCore-builtins:2024.1:LionCore-builtins-INamed-name": null,
                                                }),
                                                "literal properties of enumeration " + key,
                                            )
                                            context.expect_type(
                                                $.references,
                                                _p.dictionary.literal({
                                                    //empty
                                                }),
                                                "literal references of enumeration " + key,
                                            )
                                            context.expect_type(
                                                $.containments,
                                                _p.dictionary.literal({
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
        ).map(($) => ({
            'resolveInfo': $.resolveInfo,
            'reference': $.reference
        })),
    }
}