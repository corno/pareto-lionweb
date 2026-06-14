import * as pt from 'pareto-core/dist/assign'
import * as pi from 'pareto-core/dist/interface'
import p_change_context from 'pareto-core/dist/_p_change_context'

//data types
import * as d_out from "../../../../../../interface/generated/liana/schemas/serialization_chunk/data"
import * as d_in from "pareto-json/dist/interface/to_be_generated/json_with_parse_info"
import * as d_location from "astn-core/dist/interface/generated/liana/schemas/location/data"
import * as d_unmarshalled_from_json from "pareto-json/dist/interface/to_be_generated/unmarshalled_from_json"

//dependencies
// import * as r_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/refiners/unmarshalled/parse_tree"
import * as r_json_x_from_json from "pareto-json/dist/implementation/manual/refiners/json_x/json_with_parse_info"
import * as r_json_y_from_json from "pareto-json/dist/implementation/manual/refiners/json_y/json_with_parse_info"



export const Serialization_Chunk = (
    $: d_in.Value,
    abort: pi.Abort<d_unmarshalled_from_json.Error>
): d_out.Serialization_Chunk => {
    const value = $
    /**
     * this transformation should eventually not be handwritten, but be done by json-to-astn;
     * a mapping has to be written. with that mapping, json-to-astn will need to do 2 things:
     * 1) generate the Serialization_Chunk schema, which is now handwritten (one time effort)
     * 2) unmarshall from JSON to Serialization_Chunk (for every serialization chunk)
     */
    return p_change_context(
        r_json_x_from_json.Object_No_Unexpected_Properties_From_Value(
            $,
            abort,
            {
                'expected properties': pt.dictionary.literal({
                    "serializationFormatVersion": null,
                    "languages": null,
                    "nodes": null,
                })
            },
        ),
        ($): d_out.Serialization_Chunk => ({
            'range': $.range,
            'serializationFormatVersion': r_json_x_from_json.String(
                r_json_x_from_json.Property(
                    $,
                    abort,
                    {
                        'key': "serializationFormatVersion",
                    }
                ).value,
                abort,
            ).token.value,
            'languages': r_json_x_from_json.Array(
                r_json_x_from_json.Property(
                    $,
                    abort,
                    {
                        'key': "languages",
                    }
                ).value,
                abort,
            ).items.__l_map(
                ($) => p_change_context(
                    r_json_x_from_json.Object_No_Unexpected_Properties_From_Value(
                        $,
                        abort,
                        {
                            'expected properties': pt.dictionary.literal({
                                "key": null,
                                "version": null,
                            })
                        }
                    ),
                    ($) => ({
                        'key': r_json_x_from_json.String(
                            r_json_x_from_json.Property(
                                $,
                                abort,
                                {
                                    'key': "key",
                                }
                            ).value,
                            abort,
                        ).token.value,
                        'version': r_json_x_from_json.String(
                            r_json_x_from_json.Property(
                                $,
                                abort,
                                {
                                    'key': "version",
                                }
                            ).value,
                            abort,
                        ).token.value,
                    })
                ),
            ),
            'nodes': p_change_context(
                r_json_x_from_json.Array(
                    r_json_x_from_json.Property(
                        $,
                        abort,
                        {
                            'key': "nodes",
                        }
                    ).value,
                    abort,
                ),
                ($): d_out.Serialization_Chunk.nodes => $.items.__l_map(
                    ($) => p_change_context(
                        r_json_x_from_json.Object_No_Unexpected_Properties_From_Value(
                            $,
                            abort,
                            {
                                'expected properties': pt.dictionary.literal({
                                    "id": null,
                                    "classifier": null,
                                    "properties": null,
                                    "containments": null, //this one is missing
                                    "references": null, //this one is missing
                                    "annotations": null, //this one is missing
                                    "parent": null,
                                }),
                            }
                        ),
                        ($): d_out.Serialization_Chunk.nodes.L => ({
                            'range': $.range,
                            'id': r_json_x_from_json.String(
                                r_json_x_from_json.Property(
                                    $,
                                    abort,
                                    {
                                        'key': "id",
                                    }
                                ).value,
                                abort,
                            ).token.value,
                            'classifier': Meta_Pointer(
                                r_json_x_from_json.Property(
                                    $,
                                    abort,
                                    {
                                        'key': "classifier",
                                    }
                                ).value,
                                abort,
                            ),
                            'parent': pt.optional.from.optional(
                                r_json_x_from_json.Nullable_Value(
                                    r_json_x_from_json.Property(
                                        $,
                                        abort,
                                        {
                                            'key': "parent",
                                        }
                                    ).value
                                ),
                            ).map(
                                ($) => r_json_x_from_json.String(
                                    $,
                                    abort,
                                ).token.value
                            ),
                            'properties': r_json_x_from_json.Array(
                                r_json_x_from_json.Property(
                                    $,
                                    abort,
                                    {
                                        'key': "properties",
                                    }
                                ).value,
                                abort,
                            ).items.__l_map(
                                ($) => p_change_context(
                                    r_json_x_from_json.Object_No_Unexpected_Properties_From_Value(
                                        $,
                                        abort,
                                        {
                                            'expected properties': pt.dictionary.literal({
                                                "property": null,
                                                "value": null,
                                            }),
                                        }
                                    ),
                                    ($) => ({
                                        'property': Meta_Pointer(
                                            r_json_x_from_json.Property(
                                                $,
                                                abort,
                                                {
                                                    'key': "property",
                                                }
                                            ).value,
                                            abort,
                                        ),
                                        'value': r_json_x_from_json.String(
                                            r_json_x_from_json.Property(
                                                $,
                                                abort,
                                                {
                                                    'key': "value",
                                                }
                                            ).value,
                                            abort,
                                        ).token.value,
                                    })
                                )
                            ),
                            'containments': r_json_x_from_json.Array(
                                r_json_x_from_json.Property(
                                    $,
                                    abort,
                                    {
                                        'key': "containments",
                                    }
                                ).value,
                                abort,
                            ).items.__l_map(
                                ($) => p_change_context(
                                    r_json_x_from_json.Object_No_Unexpected_Properties_From_Value(
                                        $,
                                        abort,
                                        {
                                            'expected properties': pt.dictionary.literal({
                                                "containment": null,
                                                "children": null,
                                            }),
                                        }
                                    ),
                                    ($) => ({
                                        'containment': Meta_Pointer(
                                            r_json_x_from_json.Property(
                                                $,
                                                abort,
                                                {
                                                    'key': "containment",
                                                }
                                            ).value,
                                            abort,
                                        ),
                                        'children': r_json_x_from_json.Array(
                                            r_json_x_from_json.Property(
                                                $,
                                                abort,
                                                {
                                                    'key': "children",
                                                }
                                            ).value,
                                            abort,
                                        ).items.__l_map(
                                            ($) => r_json_x_from_json.String($, abort).token.value
                                        ),
                                    })
                                ),
                            ),
                            'references': r_json_x_from_json.Array(
                                r_json_x_from_json.Property(
                                    $,
                                    abort,
                                    {
                                        'key': "references",
                                    }
                                ).value,
                                abort,
                            ).items.__l_map(
                                ($): d_out.Serialization_Chunk.nodes.L.references.L => p_change_context(
                                    r_json_x_from_json.Object_No_Unexpected_Properties_From_Value(
                                        $,
                                        abort,
                                        {
                                            'expected properties': pt.dictionary.literal({
                                                "reference": null,
                                                "targets": null,
                                            })
                                        }
                                    ),
                                    ($): d_out.Serialization_Chunk.nodes.L.references.L => ({
                                        'reference': Meta_Pointer(
                                            r_json_x_from_json.Property(
                                                $,
                                                abort,
                                                {
                                                    'key': "reference",
                                                }
                                            ).value,
                                            abort,
                                        ),
                                        'targets': r_json_x_from_json.Array(
                                            r_json_x_from_json.Property(
                                                $,
                                                abort, {
                                                'key': "targets",
                                            }
                                            ).value,
                                            abort,
                                        ).items.__l_map(
                                            ($) => p_change_context(
                                                r_json_x_from_json.Object_No_Unexpected_Properties_From_Value(
                                                    $,
                                                    abort,
                                                    {
                                                        'expected properties': pt.dictionary.literal({
                                                            "resolveInfo": null,
                                                            "reference": null,
                                                        })
                                                    }
                                                ),
                                                ($) => ({
                                                    'resolveInfo': r_json_x_from_json.String(
                                                        r_json_x_from_json.Property(
                                                            $,
                                                            abort,
                                                            {
                                                                'key': "resolveInfo",
                                                            }
                                                        ).value,
                                                        abort,
                                                    ).token.value,
                                                    'reference': pt.optional.from.optional(
                                                        r_json_x_from_json.Nullable_Value(
                                                            r_json_x_from_json.Property(
                                                                $,
                                                                abort,
                                                                {
                                                                    'key': "reference",
                                                                }
                                                            ).value,
                                                        ),
                                                    ).map(
                                                        ($) => r_json_x_from_json.String($, abort).token.value
                                                    ),
                                                })
                                            )
                                        ),
                                    })
                                ),
                            ),
                            'annotations': r_json_x_from_json.Array(
                                r_json_x_from_json.Property(
                                    $,
                                    abort,
                                    {
                                        'key': "annotations",
                                    }
                                ).value,
                                abort,
                            ).items.__l_map(
                                ($) => r_json_x_from_json.String($, abort).token.value
                            ),
                        })
                    )),
            )
        }))
}

export const Meta_Pointer = (
    $: d_in.Value,
    abort: pi.Abort<d_unmarshalled_from_json.Error>
): d_out.Meta_Pointer => {
    return p_change_context(
        r_json_x_from_json.Object_No_Unexpected_Properties_From_Value(
            $,
            abort,
            {
                'expected properties': pt.dictionary.literal({
                    "language": null,
                    "key": null,
                    "version": null,
                })
            },
        ),
        ($) => ({
            'language': r_json_x_from_json.String(
                r_json_x_from_json.Property(
                    $,
                    abort,
                    {
                        'key': "language",
                    }
                ).value,
                abort,
            ).token.value,
            'key': r_json_x_from_json.String(
                r_json_x_from_json.Property(
                    $,
                    abort,
                    {
                        'key': "key",
                    }
                ).value,
                abort
            ).token.value,
            'version': r_json_x_from_json.String(
                r_json_x_from_json.Property(
                    $,
                    abort,
                    {
                        'key': "version",
                    }
                ).value,
                abort,
            ).token.value,
        })
    )
}
