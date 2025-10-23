import * as _ed from 'exupery-core-dev'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d_in from "../types/LionWeb_tree"
import * as d_out from "../generated/interface/schemas/m3/data_types/target"
import { expect_optional_property, expect_property, expect_type } from '../expect_helpers'


const expect_name = ($: d_in.Node) => expect_property(
    $.properties,
    "LionCore-builtins:2023.1:LionCore-builtins-INamed-name"
)
const expect_key = ($: d_in.Node) => expect_property(
    $.properties,
    "LionCore-M3:2023.1:IKeyed-key"
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


export const M3 = (tree: d_in.Serialization_Chunk): d_out.M3 => {


    return {
        'key': expect_key(tree['node tree']),
        'version': expect_property(
            tree['node tree'].properties,
            "LionCore-M3:2023.1:Language-version"
        ),
        'name': expect_name(tree['node tree']),
        'entities': expect_property(
            tree['node tree'].containments,
            "LionCore-M3:2023.1:Language-entities"
        ).map(($, key) => {
            return {
                'key': expect_key($),
                'name': expect_name($),
                'type': _ea.block((): d_out.M3.entities.D._type => {
                    expect_type($.properties, _ea.dictionary_literal({
                        "LionCore-M3:2023.1:IKeyed-key": null,
                        "LionCore-builtins:2023.1:LionCore-builtins-INamed-name": null,
                        "LionCore-M3:2023.1:Concept-abstract": null,
                        "LionCore-M3:2023.1:Concept-partition": null,
                    }))
                    expect_type($.containments, _ea.dictionary_literal({
                        "LionCore-M3:2023.1:Classifier-features": null,
                        "LionCore-M3:2023.1:Enumeration-literals": null,
                    }))

                    expect_type($.references, _ea.dictionary_literal({
                        "LionCore-M3:2023.1:Concept-extends": null,
                        "LionCore-M3:2023.1:Concept-implements": null,
                        "LionCore-M3:2023.1:Interface-extends": null,
                    }))
                    switch ($.classifier) {
                        case "LionCore-M3:2023.1:Concept":
                        case "LionCore-M3:2023.1:Interface":
                            {
                                return ['classifier', {
                                    'features': expect_property(
                                        $.containments,
                                        "LionCore-M3:2023.1:Classifier-features"
                                    ).map(($) => {

                                        expect_type($.properties, _ea.dictionary_literal({
                                            "LionCore-M3:2023.1:IKeyed-key": null,
                                            "LionCore-builtins:2023.1:LionCore-builtins-INamed-name": null,
                                            "LionCore-M3:2023.1:Feature-optional": null,
                                            "LionCore-M3:2023.1:Link-multiple": null,
                                        }))
                                        expect_type($.references, _ea.dictionary_literal({
                                            "LionCore-M3:2023.1:Link-type": null,
                                            "LionCore-M3:2023.1:Property-type": null,
                                        }))
                                        expect_type($.containments, _ea.dictionary_literal({
                                        }))

                                        //FIXME
                                        return {
                                            'key': expect_key($),
                                            'name': expect_name($),
                                            'optional': expect_property(
                                                $.properties,
                                                "LionCore-M3:2023.1:Feature-optional"
                                            ),
                                            'multiple': expect_optional_property(
                                                $.properties,
                                                "LionCore-M3:2023.1:Link-multiple"
                                            ),
                                            'property type': expect_optional_property(
                                                $.references,
                                                "LionCore-M3:2023.1:Property-type"
                                            ),
                                            'feature type': expect_optional_property(
                                                $.references,
                                                "LionCore-M3:2023.1:Link-type"
                                            ),

                                        }
                                    }),
                                    'type': _ea.block((): d_out.M3.entities.D._type.SG.classifier._type => {
                                        switch ($.classifier) {
                                            case "LionCore-M3:2023.1:Concept": {
                                                return ['concept', {
                                                    'abstract': expect_property(
                                                        $.properties,
                                                        "LionCore-M3:2023.1:Concept-abstract"
                                                    ),
                                                    'partition': expect_property(
                                                        $.properties,
                                                        "LionCore-M3:2023.1:Concept-partition"
                                                    ),
                                                    'extends': expect_property(
                                                        $.references,
                                                        "LionCore-M3:2023.1:Concept-extends"
                                                    ),
                                                    'implements': expect_property(
                                                        $.references,
                                                        "LionCore-M3:2023.1:Concept-implements"
                                                    ),
                                                }]
                                            }
                                            case "LionCore-M3:2023.1:Interface": {
                                                return ['interface', {
                                                    'extends': expect_property(
                                                        $.references,
                                                        "LionCore-M3:2023.1:Interface-extends"
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
                                "LionCore-M3:2023.1:Enumeration-literals"
                            ).map(($) => {
                                expect_type($.properties, _ea.dictionary_literal({
                                    "LionCore-M3:2023.1:IKeyed-key": null,
                                    "LionCore-builtins:2023.1:LionCore-builtins-INamed-name": null,
                                }))
                                expect_type($.references, _ea.dictionary_literal({
                                }))
                                expect_type($.containments, _ea.dictionary_literal({
                                }))
                                return {
                                    'key': expect_key($),
                                    'name': expect_name($),
                                }
                            })]]
                        }
                        default: _ea.panic(`unknown entity classifier: ${$.classifier}`)
                    }
                })
            }
        }),
        'dependencies': expect_property(
            tree['node tree'].references,
            "LionCore-M3:2023.1:Language-dependsOn"
        ).map(($) => {
            return {
                'resolveInfo': $.resolveInfo,
                'reference': $.reference
            }
        }),
    }
}