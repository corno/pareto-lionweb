import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_change_context from 'pareto-core/dist/_p_change_context'

//data types
import * as d_out from "../../../../../../interface/generated/liana/schemas/serialization_chunk/data"
import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_location from "astn-core/dist/interface/generated/liana/schemas/location/data"
import * as d_json_unmarshall from "pareto-json/dist/interface/to_be_generated/unmarshall"

//dependencies
// import * as r_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/refiners/unmarshalled/parse_tree"
import * as r_json_unmarshalled_from_astn_parse_tree from "pareto-json/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"
import * as t_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"



export const Serialization_Chunk = (
    $: d_in.Value,
    abort: _pi.Abort<d_json_unmarshall.Error>
): d_out.Serialization_Chunk => {
    /**
     * this transformation should eventually not be handwritten, but be done by json-to-astn;
     * a mapping has to be written. with that mapping, json-to-astn will need to do 2 things:
     * 1) generate the Serialization_Chunk schema, which is now handwritten (one time effort)
     * 2) unmarshall from JSON to Serialization_Chunk (for every serialization chunk)
     */
    return _p_change_context(
        r_json_unmarshalled_from_astn_parse_tree.Object_Static(
            $,
            abort,
            {
                'expected properties': _p.dictionary.literal({
                    "serializationFormatVersion": null,
                    "languages": null,
                    "nodes": null,
                })
            },
        ),
        ($) => ({
            'serializationFormatVersion': r_json_unmarshalled_from_astn_parse_tree.String(
                r_json_unmarshalled_from_astn_parse_tree.Property(
                    $,
                    abort,
                    {
                        'id': "serializationFormatVersion",
                    }
                ),
                abort,
            ),
            'languages': r_json_unmarshalled_from_astn_parse_tree.Array(
                r_json_unmarshalled_from_astn_parse_tree.Property(
                    $,
                    abort,
                    {
                        'id': "languages",
                    }
                ),
                abort,
            ).items.__l_map(
                ($) => _p_change_context(
                    r_json_unmarshalled_from_astn_parse_tree.Object_Static(
                        $.value,
                        abort,
                        {
                            'expected properties': _p.dictionary.literal({
                                "key": null,
                                "version": null,
                            })
                        }
                    ),
                    ($) => ({
                        'key': r_json_unmarshalled_from_astn_parse_tree.String(
                            r_json_unmarshalled_from_astn_parse_tree.Property(
                                $,
                                abort,
                                {
                                    'id': "key",
                                }
                            ),
                            abort,
                        ),
                        'version': r_json_unmarshalled_from_astn_parse_tree.String(
                            r_json_unmarshalled_from_astn_parse_tree.Property(
                                $,
                                abort,
                                {
                                    'id': "version",
                                }
                            ),
                            abort,
                        ),
                    })
                ),
            ),
            'nodes': _p_change_context(
                r_json_unmarshalled_from_astn_parse_tree.Array(
                    r_json_unmarshalled_from_astn_parse_tree.Property(
                        $,
                        abort,
                        {
                            'id': "nodes",
                        }
                    ),
                    abort,
                ),
                ($) => $.items.__l_map(
                    ($) => _p_change_context(
                        r_json_unmarshalled_from_astn_parse_tree.Object_Static(
                            $.value,
                            abort,
                            {
                                'expected properties': _p.dictionary.literal({
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
                        ($) => ({
                            'range': t_parse_tree_to_location.Value($.value),
                            'id': r_json_unmarshalled_from_astn_parse_tree.String(
                                r_json_unmarshalled_from_astn_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': "id",
                                    }
                                ),
                                abort,
                            ),
                            'classifier': Meta_Pointer(
                                r_json_unmarshalled_from_astn_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': "classifier",
                                    }
                                ),
                                abort,
                            ),
                            'parent': _p.optional.from.optional(
                                r_json_unmarshalled_from_astn_parse_tree.Optional_Null(
                                    r_json_unmarshalled_from_astn_parse_tree.Property(
                                        $,
                                        abort,
                                        {
                                            'id': "parent",
                                        }
                                    )),
                            ).map(
                                ($) => r_json_unmarshalled_from_astn_parse_tree.String(
                                    $,
                                    abort,
                                )
                            ),
                            'properties': r_json_unmarshalled_from_astn_parse_tree.Array(
                                r_json_unmarshalled_from_astn_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': "properties",
                                    }
                                ),
                                abort,
                            ).items.__l_map(
                                ($) => _p_change_context(
                                    r_json_unmarshalled_from_astn_parse_tree.Object_Static(
                                        $.value,
                                        abort,
                                        {
                                            'expected properties': _p.dictionary.literal({
                                                "property": null,
                                                "value": null,
                                            }),
                                        }
                                    ),
                                    ($) => ({
                                        'property': Meta_Pointer(
                                            r_json_unmarshalled_from_astn_parse_tree.Property(
                                                $,
                                                abort,
                                                {
                                                    'id': "property",
                                                }
                                            ),
                                            abort,
                                        ),
                                        'value': r_json_unmarshalled_from_astn_parse_tree.String(
                                            r_json_unmarshalled_from_astn_parse_tree.Property(
                                                $,
                                                abort,
                                                {
                                                    'id': "value",
                                                }
                                            ),
                                            abort,
                                        ),
                                    })
                                )
                            ),
                            'containments': r_json_unmarshalled_from_astn_parse_tree.Array(
                                r_json_unmarshalled_from_astn_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': "containments",
                                    }
                                ),
                                abort,
                            ).items.__l_map(
                                ($) => _p_change_context(
                                    r_json_unmarshalled_from_astn_parse_tree.Object_Static(
                                        $.value,
                                        abort,
                                        {
                                            'expected properties': _p.dictionary.literal({
                                                "containment": null,
                                                "children": null,
                                            }),
                                        }
                                    ),
                                    ($) => ({
                                        'containment': Meta_Pointer(
                                            r_json_unmarshalled_from_astn_parse_tree.Property(
                                                $,
                                                abort,
                                                {
                                                    'id': "containment",
                                                }
                                            ),
                                            abort,
                                        ),
                                        'children': r_json_unmarshalled_from_astn_parse_tree.Array(
                                            r_json_unmarshalled_from_astn_parse_tree.Property(
                                                $,
                                                abort,
                                                {
                                                    'id': "children",
                                                }
                                            ),
                                            abort,
                                        ).items.__l_map(
                                            ($) => r_json_unmarshalled_from_astn_parse_tree.String($.value, abort)
                                        ),
                                    })
                                ),
                            ),
                            'references': r_json_unmarshalled_from_astn_parse_tree.Array(
                                r_json_unmarshalled_from_astn_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': "references",
                                    }
                                ),
                                abort,
                            ).items.__l_map(
                                ($) => _p_change_context(
                                    r_json_unmarshalled_from_astn_parse_tree.Object_Static(
                                        $.value,
                                        abort,
                                        {
                                            'expected properties': _p.dictionary.literal({
                                                "reference": null,
                                                "targets": null,
                                            })
                                        }
                                    ),
                                    ($) => ({
                                        'reference': Meta_Pointer(
                                            r_json_unmarshalled_from_astn_parse_tree.Property(
                                                $,
                                                abort,
                                                {
                                                    'id': "reference",
                                                }
                                            ),
                                            abort,
                                        ),
                                        'targets': r_json_unmarshalled_from_astn_parse_tree.Array(
                                            r_json_unmarshalled_from_astn_parse_tree.Property(
                                                $,
                                                abort, {
                                                'id': "targets",
                                            }
                                            ),
                                            abort,
                                        ).items.__l_map(
                                            ($) => _p_change_context(
                                                r_json_unmarshalled_from_astn_parse_tree.Object_Static(
                                                    $.value,
                                                    abort,
                                                    {
                                                        'expected properties': _p.dictionary.literal({
                                                            "resolveInfo": null,
                                                            "reference": null,
                                                        })
                                                    }
                                                ),
                                                ($) => ({
                                                    'resolveInfo': r_json_unmarshalled_from_astn_parse_tree.String(
                                                        r_json_unmarshalled_from_astn_parse_tree.Property(
                                                            $,
                                                            abort,
                                                            {
                                                                'id': "resolveInfo",
                                                            }
                                                        ),
                                                        abort,
                                                    ),
                                                    'reference': _p.optional.from.optional(
                                                        r_json_unmarshalled_from_astn_parse_tree.Optional_Null(
                                                            r_json_unmarshalled_from_astn_parse_tree.Property(
                                                                $,
                                                                abort,
                                                                {
                                                                    'id': "reference",
                                                                }
                                                            ),
                                                        ),
                                                    ).map(
                                                        ($) => r_json_unmarshalled_from_astn_parse_tree.String($, abort)
                                                    ),
                                                })
                                            )
                                        ),
                                    })
                                ),
                            ),
                            'annotations': r_json_unmarshalled_from_astn_parse_tree.Array(
                                r_json_unmarshalled_from_astn_parse_tree.Property(
                                    $,
                                    abort,
                                    {
                                        'id': "annotations",
                                    }
                                ),
                                abort,
                            ).items.__l_map(
                                ($) => r_json_unmarshalled_from_astn_parse_tree.String($.value, abort)
                            ),
                        })
                    )),
            )
        }))
}

export const Meta_Pointer = (
    $: d_in.Value,
    abort: _pi.Abort<d_json_unmarshall.Error>
): d_out.Meta_Pointer => {
    return _p_change_context(
        r_json_unmarshalled_from_astn_parse_tree.Object_Static(
            $,
            abort,
            {
                'expected properties': _p.dictionary.literal({
                    "language": null,
                    "key": null,
                    "version": null,
                })
            },
        ),
        ($) => ({
            'language': r_json_unmarshalled_from_astn_parse_tree.String(
                r_json_unmarshalled_from_astn_parse_tree.Property(
                    $,
                    abort,
                    {
                        'id': "language",
                    }
                ),
                abort,
            ),
            'key': r_json_unmarshalled_from_astn_parse_tree.String(
                r_json_unmarshalled_from_astn_parse_tree.Property(
                    $,
                    abort,
                    {
                        'id': "key",
                    }
                ),
                abort
            ),
            'version': r_json_unmarshalled_from_astn_parse_tree.String(
                r_json_unmarshalled_from_astn_parse_tree.Property(
                    $,
                    abort,
                    {
                        'id': "version",
                    }
                ),
                abort,
            ),
        })
    )
}
