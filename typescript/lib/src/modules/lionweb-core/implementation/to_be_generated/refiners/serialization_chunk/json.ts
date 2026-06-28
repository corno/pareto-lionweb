import * as p_ from 'pareto-core/dist/implementation/refiner'
import * as p_i from 'pareto-core/dist/interface/refiner'
import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

//data types
import * as d_out from "../../../../../../interface/generated/liana/schemas/serialization_chunk/data"
import * as d_in from "pareto-json/dist/interface/data/json_with_parse_info"
import * as d_unmarshalled_from_json from "pareto-json/dist/interface/data/unmarshalled_from_json"

//dependencies
// import * as r_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/refiners/unmarshalled/parse_tree"
import * as r_json_x_from_json from "pareto-json/dist/implementation/manual/refiners/json_x/json_with_parse_info"



export const Serialization_Chunk: p_i.Refiner<
    d_out.Serialization_Chunk,
    d_unmarshalled_from_json.Error,
    d_in.Value
> = (
    $,
    abort
) => {
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
                    'expected properties': p_.literal.dictionary({
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
                'languages': p_.from.list(r_json_x_from_json.Array(
                        r_json_x_from_json.Property(
                            $,
                            abort,
                            {
                                'key': "languages",
                            }
                        ).value,
                        abort,
                    ).items
                ).map(
                    ($) => p_change_context(
                        r_json_x_from_json.Object_No_Unexpected_Properties_From_Value(
                            $,
                            abort,
                            {
                                'expected properties': p_.literal.dictionary({
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
                    ($): d_out.Serialization_Chunk.nodes => p_.from.list($.items).map(
                        ($) => p_change_context(
                            r_json_x_from_json.Object_No_Unexpected_Properties_From_Value(
                                $,
                                abort,
                                {
                                    'expected properties': p_.literal.dictionary({
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
                                'parent': p_.from.optional(r_json_x_from_json.Nullable_Value(
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
                                'properties': p_.from.list(r_json_x_from_json.Array(
                                        r_json_x_from_json.Property(
                                            $,
                                            abort,
                                            {
                                                'key': "properties",
                                            }
                                        ).value,
                                        abort,
                                    ).items
                                ).map(
                                    ($) => p_change_context(
                                        r_json_x_from_json.Object_No_Unexpected_Properties_From_Value(
                                            $,
                                            abort,
                                            {
                                                'expected properties': p_.literal.dictionary({
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
                                'containments': p_.from.list(r_json_x_from_json.Array(
                                        r_json_x_from_json.Property(
                                            $,
                                            abort,
                                            {
                                                'key': "containments",
                                            }
                                        ).value,
                                        abort,
                                    ).items
                                ).map(
                                    ($) => p_change_context(
                                        r_json_x_from_json.Object_No_Unexpected_Properties_From_Value(
                                            $,
                                            abort,
                                            {
                                                'expected properties': p_.literal.dictionary({
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
                                            'children': p_.from.list(r_json_x_from_json.Array(
                                                    r_json_x_from_json.Property(
                                                        $,
                                                        abort,
                                                        {
                                                            'key': "children",
                                                        }
                                                    ).value,
                                                    abort,
                                                ).items
                                            ).map(
                                                ($) => r_json_x_from_json.String($, abort).token.value
                                            ),
                                        })
                                    ),
                                ),
                                'references': p_.from.list(r_json_x_from_json.Array(
                                        r_json_x_from_json.Property(
                                            $,
                                            abort,
                                            {
                                                'key': "references",
                                            }
                                        ).value,
                                        abort,
                                    ).items
                                ).map(
                                    ($): d_out.Serialization_Chunk.nodes.L.references.L => p_change_context(
                                        r_json_x_from_json.Object_No_Unexpected_Properties_From_Value(
                                            $,
                                            abort,
                                            {
                                                'expected properties': p_.literal.dictionary({
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
                                            'targets': p_.from.list(r_json_x_from_json.Array(
                                                    r_json_x_from_json.Property(
                                                        $,
                                                        abort, {
                                                        'key': "targets",
                                                    }
                                                    ).value,
                                                    abort,
                                                ).items
                                            ).map(
                                                ($) => p_change_context(
                                                    r_json_x_from_json.Object_No_Unexpected_Properties_From_Value(
                                                        $,
                                                        abort,
                                                        {
                                                            'expected properties': p_.literal.dictionary({
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
                                                        'reference': p_.from.optional(r_json_x_from_json.Nullable_Value(
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
                                'annotations': p_.from.list(r_json_x_from_json.Array(
                                        r_json_x_from_json.Property(
                                            $,
                                            abort,
                                            {
                                                'key': "annotations",
                                            }
                                        ).value,
                                        abort,
                                    ).items
                                ).map(
                                    ($) => r_json_x_from_json.String($, abort).token.value
                                ),
                            })
                        )),
                )
            }))
    }

export const Meta_Pointer: p_i.Refiner<
    d_out.Meta_Pointer,
    d_unmarshalled_from_json.Error,
    d_in.Value
> = (
    $,
    abort
) => {
        return p_change_context(
            r_json_x_from_json.Object_No_Unexpected_Properties_From_Value(
                $,
                abort,
                {
                    'expected properties': p_.literal.dictionary({
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
