import * as _p from 'pareto-core-refiner'
import * as _pi from 'pareto-core-interface'

import * as d_json from "../../../modules/json/interface/to_be_generated/json"

import * as d from "../../../interface/generated/pareto/schemas/serialization_chunk/data_types/source"

namespace helpers {

    export const expect_verbose_type = (
        $: d_json.Value,
        expectedTypes: _pi.Dictionary<null>,
    ): d_json.Value__object => _p.sg($, ($) => {
        switch ($[0]) {
            case 'object': return _p.ss($, ($) => {
                const obj = $
                expectedTypes.__d_map(($, key) => {
                    obj.__get_entry(
                        key,
                        ($) => _p.fixme_abort(`missing expected property: ${key}`),
                    )
                })
                return $
            })
            default: return _p.fixme_abort("expected an object")
        }
    })

    export const expect_property = (
        $: d_json.Value__object,
        propertyName: string,
    ): d_json.Value => $.__get_entry(
        propertyName,
        ($) => _p.fixme_abort(`missing expected property: ${propertyName}`),
    )

    export const expect_text = (
        $: d_json.Value,
    ): string => _p.sg($, ($) => {
        switch ($[0]) {
            case 'string': return _p.ss($, ($) => $)
            default: return _p.fixme_abort("expected a string")
        }
    })

    export const expect_array = (
        $: d_json.Value,
    ): d_json.Value__array => _p.sg($, ($) => {
        switch ($[0]) {
            case 'array': return _p.ss($, ($) => $)
            default: return _p.fixme_abort("expected an array")
        }
    })

    export const expect_optional_null = (
        $: d_json.Value,
    ): _pi.Optional_Value<d_json.Value> => _p.sg($, ($) => {
        switch ($[0]) {
            case 'null': return _p.ss($, ($) => _p.optional.not_set())
            default: return _p.optional.set($)
        }
    })
}

export const Serialization_Chunk = (
    $: d_json.Value,
): d.Serialization_Chunk => {
    /**
     * this transformation should eventually not be handwritten, but be done by json-to-astn;
     * a mapping has to be written. with that mapping, json-to-astn will need to do 2 things:
     * 1) generate the Serialization_Chunk schema, which is now handwritten (one time effort)
     * 2) unmarshall from JSON to Serialization_Chunk (for every serialization chunk)
     */
    return _p.deprecated_cc(helpers.expect_verbose_type($, _p.dictionary.literal({
        'serializationFormatVersion': null,
        'languages': null,
        'nodes': null,
    })), ($) => ({
        'serializationFormatVersion': helpers.expect_text(helpers.expect_property($, 'serializationFormatVersion')),
        'languages': helpers.expect_array(helpers.expect_property($, 'languages')).__l_map(($) => _p.deprecated_cc(helpers.expect_verbose_type($, _p.dictionary.literal({
            'key': null,
            'version': null,
        })), ($) => ({
            'key': helpers.expect_text(helpers.expect_property($, 'key')),
            'version': helpers.expect_text(helpers.expect_property($, 'version')),
        }))),
        'nodes': helpers.expect_array(helpers.expect_property($, 'nodes')).__l_map(($) => _p.deprecated_cc(helpers.expect_verbose_type($, _p.dictionary.literal({
            'id': null,
            'classifier': null,
            'properties': null,
            'containments': null, //this one is missing
            'references': null, //this one is missing
            'annotations': null, //this one is missing
            'parent': null,
        })), ($) => ({
            'id': helpers.expect_text(helpers.expect_property($, 'id')),
            'classifier': Meta_Pointer(helpers.expect_property($, 'classifier')),
            'parent': helpers.expect_optional_null(helpers.expect_property($, 'parent')).__o_map(($) => helpers.expect_text($)),
            'properties': helpers.expect_array(helpers.expect_property($, 'properties')).__l_map(($) => _p.deprecated_cc(helpers.expect_verbose_type($, _p.dictionary.literal({
                'property': null,
                'value': null,
            })), ($) => ({
                'property': Meta_Pointer(helpers.expect_property($, 'property')),
                'value': helpers.expect_text(helpers.expect_property($, 'value')),
            }))),
            'containments': helpers.expect_array(helpers.expect_property($, 'containments')).__l_map(($) => _p.deprecated_cc(helpers.expect_verbose_type($, _p.dictionary.literal({
                'containment': null,
                'children': null,
            })), ($) => ({
                'containment': Meta_Pointer(helpers.expect_property($, 'containment')),
                'children': helpers.expect_array(helpers.expect_property($, 'children')).__l_map(($) => helpers.expect_text($)),
            }))),
            'references': helpers.expect_array(helpers.expect_property($, 'references')).__l_map(($) => _p.deprecated_cc(helpers.expect_verbose_type($, _p.dictionary.literal({
                'reference': null,
                'targets': null,
            })), ($) => ({
                'reference': Meta_Pointer(helpers.expect_property($, 'reference')),
                'targets': helpers.expect_array(helpers.expect_property($, 'targets')).__l_map(($) => _p.deprecated_cc(helpers.expect_verbose_type($, _p.dictionary.literal({
                    'resolveInfo': null,
                    'reference': null,
                })), ($) => ({
                    'resolveInfo': helpers.expect_text(helpers.expect_property($, 'resolveInfo')),
                    'reference': helpers.expect_optional_null(helpers.expect_property($, 'reference')).__o_map(($) => helpers.expect_text($)),
                }))),
            }))),
            'annotations': helpers.expect_array(helpers.expect_property($, 'annotations')).__l_map(($) => helpers.expect_text($)),
        }))),
    }))
}

export const Meta_Pointer = (
    $: d_json.Value,
): d.Meta_Pointer => {
    return _p.deprecated_cc(
        helpers.expect_verbose_type($, _p.dictionary.literal({
            'language': null,
            'key': null,
            'version': null,
        })),
        ($) => ({
            'language': helpers.expect_text(helpers.expect_property($, 'language')),
            'key': helpers.expect_text(helpers.expect_property($, 'key')),
            'version': helpers.expect_text(helpers.expect_property($, 'version')),
        })
    )
}
