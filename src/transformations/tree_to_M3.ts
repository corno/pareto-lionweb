import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d_in from "../types/LionWeb_tree"
import * as d_out from "../generated/interface/schemas/m3/data_types/target"
import { expect_optional_property, expect_property, expect_type, on_property_exists } from '../expect_helpers'

import { $$ as group } from "exupery-standard-library/dist/dictionary/group"


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

export const ID = ($: d_in.Node, path: string): d_out.ID => {
    return {
        'key': expect_key($, path),
        'name': expect_name($, path),
    }
}

export const M3 = ($: d_in.Serialization_Chunk): d_out.M3 => {


    return {
        'id': ID($['node tree'], "root"),
        'version': expect_property(
            $['node tree'].properties,
            "LionCore-M3:2023.1:Language-version",
            "version",
        ),
        'entities': expect_property(
            $['node tree'].containments,
            "LionCore-M3:2023.1:Language-entities",
            "entities",
        ).map(($, key): d_out.M3.entities.D => {
            const entity_id = key
            return {
                'id': ID($, key),
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
                                    'features': expect_property(
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
                                        }), "feature containments of entity " + feature_id)

                                        //FIXME
                                        return {
                                            'id': ID($, "id of entity feature" + feature_id),
                                            'optional': expect_property(
                                                $.properties,
                                                "LionCore-M3:2023.1:Feature-optional",
                                                "optional property of feature: " + feature_id,
                                            ),
                                            'type': on_property_exists(
                                                $.references,
                                                "LionCore-M3:2023.1:Link-type",
                                                (_dont_use_) => {
                                                    return ['feature', {
                                                        'multiple': expect_property(
                                                            $.properties,
                                                            "LionCore-M3:2023.1:Link-multiple",
                                                            "multiple property of feature: " + feature_id,
                                                        ),
                                                        'type': expect_property(
                                                            $.references,
                                                            "LionCore-M3:2023.1:Link-type",
                                                            "type property of feature: " + feature_id,
                                                        ),
                                                    }] as d_out.M3.entities.D._type.SG.classifier.features.D._type
                                                },
                                                () => {
                                                    return ['property', {
                                                        'type': expect_property(
                                                            $.references,
                                                            "LionCore-M3:2023.1:Property-type",
                                                            "type property of property: " + feature_id,
                                                        ),
                                                    }] as d_out.M3.entities.D._type.SG.classifier.features.D._type
                                                }
                                            ),

                                        }
                                    }),
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
                                                    'extends': expect_property(
                                                        $.references,
                                                        "LionCore-M3:2023.1:Concept-extends",
                                                        "concept " + key
                                                    ),
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
                            return ['datatype', ['enumeration', expect_property(
                                $.containments,
                                "LionCore-M3:2023.1:Enumeration-literals",
                                "literals of enumeration " + key,
                            ).map(($) => {
                                expect_type($.properties, _ea.dictionary_literal({
                                    "LionCore-M3:2023.1:IKeyed-key": null,
                                    "LionCore-builtins:2023.1:LionCore-builtins-INamed-name": null,
                                }), "literal properties of enumeration " + key)
                                expect_type($.references, _ea.dictionary_literal({
                                }), "literal references of enumeration " + key)
                                expect_type($.containments, _ea.dictionary_literal({
                                }), "literal containments of enumeration " + key)
                                return ID($, key)
                            })]]
                        }
                        default: _ea.panic(`unknown entity classifier: ${$.classifier}`)
                    }
                })
            }
        }),
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