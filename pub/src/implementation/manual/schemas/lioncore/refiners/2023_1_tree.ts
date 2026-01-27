import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/serialization_tree/data"
import * as d_out from "../../../../../interface/generated/liana/schemas/lioncore/data"


export const expect_exactly_one_element = <T>($: _pi.List<T>): _pi.Optional_Value<T> => _p.natural.amount_of_list_items($) !== 1
    ? _p.optional.not_set()
    : $.__get_possible_item_at(0)



import * as h from "../../../../temp_context"

export const ID = (
    $: d_in.Node,
    $p: {
        id: string,
        write_id: boolean,
        context: h.Refinement_Context,
    }
): d_out.ID => !$p.write_id
        ? _p.optional.not_set()
        : _p.optional.set({
            'key': $p.context.expect_property(
                $.properties,
                "LionCore-M3:2023.1:IKeyed-key",
                $p.id,
            ),
            'id': $p.id,
        })

export const M3 = (
    $: d_in.Serialization_Chunk,
    $p: {
        'write id': boolean
    },
    context: h.Refinement_Context,
): d_out.M3 => ({
    'id': ID(
        $['node tree'],
        {
            id: $['root node id'],
            write_id: $p['write id'],
            context,
        }
    ),
    'version': context.expect_property(
        $['node tree'].properties,
        "LionCore-M3:2023.1:Language-version",
        "version",
    ),
    'entities': context.rekey(
        context.expect_property(
            $['node tree'].containments,
            "LionCore-M3:2023.1:Language-entities",
            "entities",
        ).__d_map(($, id) => {
            const entity_id = id
            return {
                'key': context.expect_property(
                    $.properties,
                    "LionCore-builtins:2023.1:LionCore-builtins-INamed-name",
                    `entities/${entity_id}`
                ),
                'value': {
                    'id': ID(
                        $,
                        {
                            id: id,
                            write_id: $p['write id'],
                            context,
                        }
                    ),
                    'type': _p.state.block((): d_out.M3.entities.D.type_ => {
                        context.expect_type(
                            $.properties,
                            _p.dictionary.literal({
                                "LionCore-M3:2023.1:IKeyed-key": null,
                                "LionCore-builtins:2023.1:LionCore-builtins-INamed-name": null,
                                "LionCore-M3:2023.1:Concept-abstract": null,
                                "LionCore-M3:2023.1:Concept-partition": null,
                            }),
                            "entity " + id + " properties",
                        )
                        context.expect_type(
                            $.containments,
                            _p.dictionary.literal({
                                "LionCore-M3:2023.1:Classifier-features": null,
                                "LionCore-M3:2023.1:Enumeration-literals": null,
                            }),
                            "entity " + id + " containments",
                        )

                        context.expect_type(
                            $.references,
                            _p.dictionary.literal({
                                "LionCore-M3:2023.1:Concept-extends": null,
                                "LionCore-M3:2023.1:Concept-implements": null,
                                "LionCore-M3:2023.1:Interface-extends": null,
                            }),
                            "entity " + id + " references",
                        )
                        switch ($.classifier) {
                            case "LionCore-M3:2023.1:Concept":
                            case "LionCore-M3:2023.1:Interface": return ['classifier', {
                                'features': context.rekey(
                                    context.expect_property(
                                        $.containments,
                                        "LionCore-M3:2023.1:Classifier-features",
                                        "features of entity " + id,
                                    ).__d_map(($, id) => {
                                        const feature_id = entity_id + ">" + id
                                        context.expect_type($.properties,
                                            _p.dictionary.literal({
                                                "LionCore-M3:2023.1:IKeyed-key": null,
                                                "LionCore-builtins:2023.1:LionCore-builtins-INamed-name": null,
                                                "LionCore-M3:2023.1:Feature-optional": null,
                                                "LionCore-M3:2023.1:Link-multiple": null,
                                            }),
                                            "feature properties of entity " + feature_id,
                                        )
                                        context.expect_type(
                                            $.references, _p.dictionary.literal({
                                                "LionCore-M3:2023.1:Link-type": null,
                                                "LionCore-M3:2023.1:Property-type": null,
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
                                                id,
                                                "LionCore-builtins:2023.1:LionCore-builtins-INamed-name",
                                            ),
                                            'value': {
                                                'id': ID(
                                                    $,
                                                    {
                                                        id: id,
                                                        write_id: $p['write id'],
                                                        context,
                                                    }
                                                ),
                                                'optional': context.expect_property(
                                                    $.properties,
                                                    "LionCore-M3:2023.1:Feature-optional",
                                                    "optional property of feature: " + feature_id,
                                                ),
                                                'type': $.references.__get_possible_entry(
                                                    "LionCore-M3:2023.1:Link-type",
                                                ).__is_set()
                                                    ? ['link', {
                                                        'multiple': context.expect_property(
                                                            $.properties,
                                                            "LionCore-M3:2023.1:Link-multiple",
                                                            "multiple property of link: " + feature_id,
                                                        ),
                                                        'type': expect_exactly_one_element(context.expect_property(
                                                            $.references,
                                                            "LionCore-M3:2023.1:Link-type",
                                                            "type property of link: " + feature_id,
                                                        )).__decide(
                                                            ($) => $,
                                                            () => context.abort(['expected exactly one element for link type of feature', feature_id])
                                                        ),
                                                        'link type': _p.deprecated_cc($.classifier, ($) => {
                                                            switch ($) {
                                                                case "LionCore-M3:2023.1:Reference": return ['reference', null]
                                                                case "LionCore-M3:2023.1:Containment": return ['containment', null]
                                                                default: return context.abort(['unknown feature classifier type', feature_id])
                                                            }
                                                        })
                                                    }]
                                                    : ['property', {
                                                        'type': expect_exactly_one_element(context.expect_property(
                                                            $.references,
                                                            "LionCore-M3:2023.1:Property-type",
                                                            "type property of property: " + feature_id,
                                                        )).__decide(
                                                            ($) => $,
                                                            () => context.abort(['expected exactly one element for property type of feature', feature_id])
                                                        ),
                                                    }]

                                            }
                                        }
                                    }),
                                ),
                                'type': _p.state.block((): d_out.M3.entities.D.type_.classifier.type_ => {
                                    switch ($.classifier) {
                                        case "LionCore-M3:2023.1:Concept": return ['concept', {
                                            'abstract': context.expect_property(
                                                $.properties,
                                                "LionCore-M3:2023.1:Concept-abstract",
                                                "concept " + id,
                                            ),
                                            'partition': context.expect_property(
                                                $.properties,
                                                "LionCore-M3:2023.1:Concept-partition",
                                                "concept " + id,
                                            ),
                                            'extends': expect_exactly_one_element(context.expect_property(
                                                $.references,
                                                "LionCore-M3:2023.1:Concept-extends",
                                                "concept " + id,
                                            )),
                                            'implements': context.expect_property(
                                                $.references,
                                                "LionCore-M3:2023.1:Concept-implements",
                                                "concept " + id,
                                            ),
                                        }]

                                        case "LionCore-M3:2023.1:Interface": return ['interface', {
                                            'extends': context.expect_property(
                                                $.references,
                                                "LionCore-M3:2023.1:Interface-extends",
                                                "interface " + id,
                                            ),
                                        }]
                                        default: return context.abort(['unknown classifier type', entity_id])
                                    }
                                })
                            }]

                            case "LionCore-M3:2023.1:Enumeration": ['datatype', ['enumeration', context.rekey(
                                context.expect_property(
                                    $.containments,
                                    "LionCore-M3:2023.1:Enumeration-literals",
                                    "literals of enumeration " + id,
                                ).__d_map(($, id) => {
                                    context.expect_type(
                                        $.properties,
                                        _p.dictionary.literal({
                                            "LionCore-M3:2023.1:IKeyed-key": null,
                                            "LionCore-builtins:2023.1:LionCore-builtins-INamed-name": null,
                                        }),
                                        "literal properties of enumeration " + id,
                                    )
                                    context.expect_type(
                                        $.references,
                                        _p.dictionary.literal({
                                            //empty
                                        }),
                                        "literal references of enumeration " + id,
                                    )
                                    context.expect_type(
                                        $.containments,
                                        _p.dictionary.literal({
                                            //empty
                                        }),
                                        "literal containments of enumeration " + id,
                                    )
                                    return {
                                        'key': context.expect_property(
                                            $.properties,
                                            "LionCore-builtins:2023.1:LionCore-builtins-INamed-name",
                                            id,
                                        ),
                                        'value': ID(
                                            $,
                                            {
                                                id: id,
                                                write_id: $p['write id'],
                                                context,
                                            }
                                        ),
                                    }
                                }),
                            )]]

                            default: return context.abort(['unknown entity classifier type', entity_id])
                        }
                    })
                }
            }
        }),
    ),
    'dependencies': context.expect_property(
        $['node tree'].references,
        "LionCore-M3:2023.1:Language-dependsOn",
        "dependencies",
    ).__l_map(($) => ({
        'resolveInfo': $.resolveInfo,
        'reference': $.reference
    })),
})