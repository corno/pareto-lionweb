import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d_in from "../../../../interface/generated/pareto/schemas/serialization_tree/data_types/source"
import * as d_out from "../../../../interface/generated/pareto/schemas/lioncore/data_types/target"

import { $$ as on_property_exists } from "../../../../temp/purification/on_property_exists"
import { $$ as expect_property } from "../../../../temp/purification/expect_property"
import { $$ as expect_type } from "../../../../temp/purification/expect_type"
import { $$ as expect_optional_property } from "../../../../temp/purification/expect_optional_property"

import { $$ as group } from "exupery-standard-library/dist/implementation/operations/impure/dictionary/group"
import { $$ as expect_single_element } from "pareto-standard-operations/dist/implementation/operations/impure/list/expect_exactly_one_element"
import { Signature } from "../../../../interface/algorithms/transformations/2023_1_tree/2023_1_tree_to_M3"



type Key_Value_Pair<T> = {
    'key': string,
    'value': T,
}

const rekey = <T>($: _et.Dictionary<Key_Value_Pair<T>>): _et.Dictionary<T> => {
    return group($).map(($, key) => {
        return expect_single_element($).transform(
            ($) => $,
            () => _ea.panic(`expected exactly one element for key: ${key}`)
        )
    })
}

const expect_name = ($: d_in.Node, path: string) => expect_property(
    $.properties,
    "LionCore-builtins:2023.1:LionCore-builtins-INamed-name",
    path
)
const expect_key = ($: d_in.Node, path: string) => expect_property(
    $.properties,
    "LionCore-M3:2023.1:IKeyed-key",
    path
)

const temp_log_node = (where: string, $: d_in.Node) => {
    _ed.log_debug_message(`>>>${where}`, () => { })
    $.containments.map(($, key) => {
        _ed.log_debug_message(`   Containment: ${key}`, () => { })
    })
    $.properties.map(($, key) => {
        _ed.log_debug_message(`   Property: ${key}`, () => { })
    })
    $.references.map(($, key) => {
        _ed.log_debug_message(`   Reference: ${key}`, () => { })
    })
}

export const ID = ($: d_in.Node, id: string, write_id: boolean): d_out.ID => {
    return !write_id
        ? _ea.not_set()
        : _ea.set({
            'key': expect_key($, id),
            'id': id,
        })
}

export const M3 = (
    $: d_in.Serialization_Chunk,
    $p: {
        'write id': boolean
    }
): d_out.M3 => {


    return {
        'id': ID($['node tree'], $['root node id'], $p['write id']),
        'version': expect_property(
            $['node tree'].properties,
            "LionCore-M3:2023.1:Language-version",
            "version",
        ),
        'entities': rekey(expect_property(
            $['node tree'].containments,
            "LionCore-M3:2023.1:Language-entities",
            "entities",
        ).map(($, key) => {
            const entity_id = key
            return {
                'key': expect_name($, `entities/${entity_id}`),
                'value': {
                    'id': ID($, key, $p['write id']),
                    'type': _ea.block((): d_out.M3.entities.D._type => {
                        expect_type($.properties, _ea.dictionary_literal({
                            "LionCore-M3:2023.1:IKeyed-key": null,
                            "LionCore-builtins:2023.1:LionCore-builtins-INamed-name": null,
                            "LionCore-M3:2023.1:Concept-abstract": null,
                            "LionCore-M3:2023.1:Concept-partition": null,
                        }), "entity " + key + " properties")
                        expect_type($.containments, _ea.dictionary_literal({
                            "LionCore-M3:2023.1:Classifier-features": null,
                            "LionCore-M3:2023.1:Enumeration-literals": null,
                        }), "entity " + key + " containments")

                        expect_type($.references, _ea.dictionary_literal({
                            "LionCore-M3:2023.1:Concept-extends": null,
                            "LionCore-M3:2023.1:Concept-implements": null,
                            "LionCore-M3:2023.1:Interface-extends": null,
                        }), "entity " + key + " references")
                        switch ($.classifier) {
                            case "LionCore-M3:2023.1:Concept":
                            case "LionCore-M3:2023.1:Interface":
                                {
                                    return ['classifier', {
                                        'features': rekey(expect_property(
                                            $.containments,
                                            "LionCore-M3:2023.1:Classifier-features",
                                            "features of entity " + key,
                                        ).map(($, key) => {
                                            const feature_id = entity_id + ">" + key
                                            expect_type($.properties, _ea.dictionary_literal({
                                                "LionCore-M3:2023.1:IKeyed-key": null,
                                                "LionCore-builtins:2023.1:LionCore-builtins-INamed-name": null,
                                                "LionCore-M3:2023.1:Feature-optional": null,
                                                "LionCore-M3:2023.1:Link-multiple": null,
                                            }), "feature properties of entity " + feature_id)
                                            expect_type($.references, _ea.dictionary_literal({
                                                "LionCore-M3:2023.1:Link-type": null,
                                                "LionCore-M3:2023.1:Property-type": null,
                                            }), "feature references of entity " + feature_id)
                                            expect_type($.containments, _ea.dictionary_literal({
                                                //empty
                                            }), "feature containments of entity " + feature_id)

                                            //FIXME
                                            return {
                                                'key': expect_name($, key),
                                                'value': {
                                                    'id': ID($, key, $p['write id']),
                                                    'optional': expect_property(
                                                        $.properties,
                                                        "LionCore-M3:2023.1:Feature-optional",
                                                        "optional property of feature: " + feature_id,
                                                    ),
                                                    'type': on_property_exists(
                                                        $.references,
                                                        "LionCore-M3:2023.1:Link-type",
                                                        (_dont_use_) => {
                                                            return ['link', {
                                                                'multiple': expect_property(
                                                                    $.properties,
                                                                    "LionCore-M3:2023.1:Link-multiple",
                                                                    "multiple property of link: " + feature_id,
                                                                ),
                                                                'type': expect_single_element(expect_property(
                                                                    $.references,
                                                                    "LionCore-M3:2023.1:Link-type",
                                                                    "type property of link: " + feature_id,
                                                                )).transform(
                                                                    ($) => $,
                                                                    () => _ea.panic(`expected exactly one element for link type of feature: ${feature_id}`)
                                                                ),
                                                                'link type': _ea.cc($.classifier, ($) => {
                                                                    switch ($) {
                                                                        case "LionCore-M3:2023.1:Reference":
                                                                            return ['reference', null]
                                                                        case "LionCore-M3:2023.1:Containment":
                                                                            return ['containment', null]
                                                                        default: return _ea.panic(`unknown feature classifier type: ${$}`)
                                                                    }
                                                                })
                                                            }] as d_out.M3.entities.D._type.SG.classifier.features.D._type
                                                        },
                                                        () => {
                                                            return ['property', {
                                                                'type': expect_single_element(expect_property(
                                                                    $.references,
                                                                    "LionCore-M3:2023.1:Property-type",
                                                                    "type property of property: " + feature_id,
                                                                )).transform(
                                                                    ($) => $,
                                                                    () => _ea.panic(`expected exactly one element for property type of feature: ${feature_id}`)
                                                                ),
                                                            }] as d_out.M3.entities.D._type.SG.classifier.features.D._type
                                                        }
                                                    ),

                                                }
                                            }
                                        })),
                                        'type': _ea.block((): d_out.M3.entities.D._type.SG.classifier._type => {
                                            switch ($.classifier) {
                                                case "LionCore-M3:2023.1:Concept": {
                                                    return ['concept', {
                                                        'abstract': expect_property(
                                                            $.properties,
                                                            "LionCore-M3:2023.1:Concept-abstract",
                                                            "concept " + key
                                                        ),
                                                        'partition': expect_property(
                                                            $.properties,
                                                            "LionCore-M3:2023.1:Concept-partition",
                                                            "concept " + key
                                                        ),
                                                        'extends': expect_single_element(expect_property(
                                                            $.references,
                                                            "LionCore-M3:2023.1:Concept-extends",
                                                            "concept " + key
                                                        )),
                                                        'implements': expect_property(
                                                            $.references,
                                                            "LionCore-M3:2023.1:Concept-implements",
                                                            "concept " + key
                                                        ),
                                                    }]
                                                }
                                                case "LionCore-M3:2023.1:Interface": {
                                                    return ['interface', {
                                                        'extends': expect_property(
                                                            $.references,
                                                            "LionCore-M3:2023.1:Interface-extends",
                                                            "interface " + key
                                                        ),
                                                    }]
                                                }
                                                default: _ea.panic(`unknown classifier type: ${$.classifier}`)
                                            }
                                        })
                                    }]
                                }
                            case "LionCore-M3:2023.1:Enumeration": {
                                // temp_log_node(`Enumeration ${key}`, $)
                                return ['datatype', ['enumeration', rekey(expect_property(
                                    $.containments,
                                    "LionCore-M3:2023.1:Enumeration-literals",
                                    "literals of enumeration " + key,
                                ).map(($, key) => {
                                    expect_type($.properties, _ea.dictionary_literal({
                                        "LionCore-M3:2023.1:IKeyed-key": null,
                                        "LionCore-builtins:2023.1:LionCore-builtins-INamed-name": null,
                                    }), "literal properties of enumeration " + key)
                                    expect_type($.references, _ea.dictionary_literal({
                                        //empty
                                    }), "literal references of enumeration " + key)
                                    expect_type($.containments, _ea.dictionary_literal({
                                        //empty
                                    }), "literal containments of enumeration " + key)
                                    return {
                                        'key': expect_name($, key),
                                        'value': ID($, key, $p['write id'])
                                    }
                                }))]]
                            }
                            default: _ea.panic(`unknown entity classifier: ${$.classifier}`)
                        }
                    })
                }
            }
        })),
        'dependencies': expect_property(
            $['node tree'].references,
            "LionCore-M3:2023.1:Language-dependsOn",
            "dependencies",
        ).map(($) => {
            return {
                'resolveInfo': $.resolveInfo,
                'reference': $.reference
            }
        }),
    }
}