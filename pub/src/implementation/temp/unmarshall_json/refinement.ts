import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'
import { _p_cc } from 'pareto-core/dist/change_context'

import * as d_json from "../../../modules/json/interface/to_be_generated/json"

import * as d from "../../../interface/generated/liana/schemas/serialization_chunk/data"

namespace helpers {

    export const expect_verbose_type = (
        $: d_json.Value,
        abort: _pi.Abort<string>,
        expectedTypes: _pi.Dictionary<null>,
    ): d_json.Value__object => _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'object': return _p.ss($, ($) => {
                const obj = $
                expectedTypes.__d_map(($, id) => {
                    obj.__get_entry(
                        id,
                        ($) => abort(`missing expected property: ${id}`),
                    )
                })
                return $
            })
            default: return abort("expected an object")
        }
    })

    export const expect_property = (
        $: d_json.Value__object,
        propertyName: string,
        abort: _pi.Abort<string>
    ): d_json.Value => $.__get_entry(
        propertyName,
        ($) => abort(`missing expected property: ${propertyName}`),
    )

    export const expect_text = (
        $: d_json.Value,
        abort: _pi.Abort<string>
    ): string => _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'string': return _p.ss($, ($) => $)
            default: return abort("expected a string")
        }
    })

    export const expect_array = (
        $: d_json.Value,
        abort: _pi.Abort<string>
    ): d_json.Value__array => _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'array': return _p.ss($, ($) => $)
            default: return abort("expected an array")
        }
    })

    export const expect_optional_null = (
        $: d_json.Value,
    ): _pi.Optional_Value<d_json.Value> => _p.decide.state($, ($) => {
        switch ($[0]) {
            case 'null': return _p.ss($, ($) => _p.optional.not_set())
            default: return _p.optional.set($)
        }
    })
}

export const Serialization_Chunk = (
    $: d_json.Value,
    abort: _pi.Abort<string>
): d.Serialization_Chunk => {
    /**
     * this transformation should eventually not be handwritten, but be done by json-to-astn;
     * a mapping has to be written. with that mapping, json-to-astn will need to do 2 things:
     * 1) generate the Serialization_Chunk schema, which is now handwritten (one time effort)
     * 2) unmarshall from JSON to Serialization_Chunk (for every serialization chunk)
     */
    return _p_cc(
        helpers.expect_verbose_type(
            $,
            abort,
            _p.dictionary.literal({
                "serializationFormatVersion": null,
                "languages": null,
                "nodes": null,
            }),
        ),
        ($) => ({
            'serializationFormatVersion': helpers.expect_text(
                helpers.expect_property(
                    $,
                    "serializationFormatVersion",
                    abort,
                ),
                abort,
            ),
            'languages': helpers.expect_array(
                helpers.expect_property(
                    $,
                    "languages",
                    abort
                ),
                abort,
            ).__l_map(
                ($) => _p_cc(
                    helpers.expect_verbose_type(
                        $,
                        abort,
                        _p.dictionary.literal({
                            "key": null,
                            "version": null,
                        })
                    ),
                    ($) => ({
                        'key': helpers.expect_text(
                            helpers.expect_property(
                                $,
                                "key",
                                abort
                            ),
                            abort,
                        ),
                        'version': helpers.expect_text(
                            helpers.expect_property(
                                $,
                                "version",
                                abort,
                            ),
                            abort,
                        ),
                    })
                ),
            ),
            'nodes': helpers.expect_array(
                helpers.expect_property(
                    $,
                    "nodes",
                    abort,
                ),
                abort,
            ).__l_map(($) => _p_cc(
                helpers.expect_verbose_type(
                    $,
                    abort,
                    _p.dictionary.literal({
                        "id": null,
                        "classifier": null,
                        "properties": null,
                        "containments": null, //this one is missing
                        "references": null, //this one is missing
                        "annotations": null, //this one is missing
                        "parent": null,
                    }),
                ),
                ($) => ({
                    'id': helpers.expect_text(
                        helpers.expect_property(
                            $,
                            "id",
                            abort
                        ),
                        abort,
                    ),
                    'classifier': Meta_Pointer(
                        helpers.expect_property(
                            $,
                            "classifier",
                            abort,
                        ),
                        abort,
                    ),
                    'parent': _p.optional.map(
                        helpers.expect_optional_null(
                            helpers.expect_property(
                                $,
                                "parent",
                                abort,
                            )),
                        ($) => helpers.expect_text(
                            $,
                            abort,
                        )
                    ),
                    'properties': helpers.expect_array(
                        helpers.expect_property(
                            $,
                            "properties",
                            abort,
                        ),
                        abort,
                    ).__l_map(
                        ($) => _p_cc(
                            helpers.expect_verbose_type(
                                $,
                                abort,
                                _p.dictionary.literal({
                                    "property": null,
                                    "value": null,
                                }),
                            ),
                            ($) => ({
                                'property': Meta_Pointer(
                                    helpers.expect_property(
                                        $,
                                        "property",
                                        abort,
                                    ),
                                    abort,
                                ),
                                'value': helpers.expect_text(
                                    helpers.expect_property(
                                        $,
                                        "value",
                                        abort,
                                    ),
                                    abort,
                                ),
                            })
                        )
                    ),
                    'containments': helpers.expect_array(
                        helpers.expect_property(
                            $,
                            "containments",
                            abort,
                        ),
                        abort,
                    ).__l_map(
                        ($) => _p_cc(
                            helpers.expect_verbose_type(
                                $,
                                abort,
                                _p.dictionary.literal({
                                    "containment": null,
                                    "children": null,
                                }),
                            ),
                            ($) => ({
                                'containment': Meta_Pointer(
                                    helpers.expect_property(
                                        $,
                                        "containment",
                                        abort
                                    ),
                                    abort,
                                ),
                                'children': helpers.expect_array(
                                    helpers.expect_property(
                                        $,
                                        "children",
                                        abort
                                    ),
                                    abort,
                                ).__l_map(
                                    ($) => helpers.expect_text($, abort)
                                ),
                            })
                        ),
                    ),
                    'references': helpers.expect_array(
                        helpers.expect_property(
                            $,
                            "references",
                            abort,
                        ),
                        abort,
                    ).__l_map(
                        ($) => _p_cc(
                            helpers.expect_verbose_type(
                                $,
                                abort,
                                _p.dictionary.literal({
                                    "reference": null,
                                    "targets": null,
                                })
                            ),
                            ($) => ({
                                'reference': Meta_Pointer(
                                    helpers.expect_property(
                                        $,
                                        "reference",
                                        abort,
                                    ),
                                    abort,
                                ),
                                'targets': helpers.expect_array(
                                    helpers.expect_property(
                                        $,
                                        "targets",
                                        abort,
                                    ),
                                    abort,
                                ).__l_map(
                                    ($) => _p_cc(
                                        helpers.expect_verbose_type(
                                            $,
                                            abort,
                                            _p.dictionary.literal({
                                                "resolveInfo": null,
                                                "reference": null,
                                            })
                                        ),
                                        ($) => ({
                                            'resolveInfo': helpers.expect_text(
                                                helpers.expect_property(
                                                    $,
                                                    "resolveInfo",
                                                    abort,
                                                ),
                                                abort,
                                            ),
                                            'reference': _p.optional.map(
                                                helpers.expect_optional_null(
                                                    helpers.expect_property(
                                                        $,
                                                        "reference",
                                                        abort,
                                                    ),
                                                ),
                                                ($) => helpers.expect_text($, abort)
                                            ),
                                        })
                                    )
                                ),
                            })
                        ),
                    ),
                    'annotations': helpers.expect_array(
                        helpers.expect_property(
                            $,
                            "annotations",
                            abort,
                        ),
                        abort,
                    ).__l_map(
                        ($) => helpers.expect_text($, abort)
                    ),
                }))),
        }))
}

export const Meta_Pointer = (
    $: d_json.Value,
    abort: _pi.Abort<string>
): d.Meta_Pointer => {
    return _p_cc(
        helpers.expect_verbose_type(
            $,
            abort,
            _p.dictionary.literal({
                "language": null,
                "key": null,
                "version": null,
            }),
        ),
        ($) => ({
            'language': helpers.expect_text(
                helpers.expect_property(
                    $,
                    "language",
                    abort,
                ),
                abort,
            ),
            'key': helpers.expect_text(
                helpers.expect_property(
                    $,
                    "key",
                    abort,
                ),
                abort
            ),
            'version': helpers.expect_text(
                helpers.expect_property(
                    $,
                    "version",
                    abort,
                ),
                abort,
            ),
        })
    )
}
