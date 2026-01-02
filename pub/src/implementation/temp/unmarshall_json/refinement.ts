import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as _praw from 'exupery-core-rawdata'

import * as d from "../../../interface/generated/pareto/schemas/serialization_chunk/data_types/source"

import * as h from "./helpers"



export const Serialization_Chunk = (
    $: _praw.Value,
    helpers: h.Helpers
): d.Serialization_Chunk => {
    /**
     * this transformation should eventually not be handwritten, but be done by json-to-astn;
     * a mapping has to be written. with that mapping, json-to-astn will need to do 2 things:
     * 1) generate the Serialization_Chunk schema, which is now handwritten (one time effort)
     * 2) unmarshall from JSON to Serialization_Chunk (for every serialization chunk)
     */
    return _pt.cc(helpers.expect_verbose_type($, _pt.dictionary_literal({
        'serializationFormatVersion': null,
        'languages': null,
        'nodes': null,
    })), ($) => ({
        'serializationFormatVersion': helpers.expect_text(helpers.expect_property($, 'serializationFormatVersion')),
        'languages': helpers.expect_array(helpers.expect_property($, 'languages')).map(($) => _pt.cc(helpers.expect_verbose_type($, _pt.dictionary_literal({
            'key': null,
            'version': null,
        })), ($) => ({
            'key': helpers.expect_text(helpers.expect_property($, 'key')),
            'version': helpers.expect_text(helpers.expect_property($, 'version')),
        }))),
        'nodes': helpers.expect_array(helpers.expect_property($, 'nodes')).map(($) => _pt.cc(helpers.expect_verbose_type($, _pt.dictionary_literal({
            'id': null,
            'classifier': null,
            'properties': null,
            'containments': null, //this one is missing
            'references': null, //this one is missing
            'annotations': null, //this one is missing
            'parent': null,
        })), ($) => ({
            'id': helpers.expect_text(helpers.expect_property($, 'id')),
            'classifier': Meta_Pointer(helpers.expect_property($, 'classifier'), helpers),
            'parent': helpers.expect_optional_null(helpers.expect_property($, 'parent')).map(($) => helpers.expect_text($)),
            'properties': helpers.expect_array(helpers.expect_property($, 'properties')).map(($) => _pt.cc(helpers.expect_verbose_type($, _pt.dictionary_literal({
                'property': null,
                'value': null,
            })), ($) => ({
                'property': Meta_Pointer(helpers.expect_property($, 'property'), helpers),
                'value': helpers.expect_text(helpers.expect_property($, 'value')),
            }))),
            'containments': helpers.expect_array(helpers.expect_property($, 'containments')).map(($) => _pt.cc(helpers.expect_verbose_type($, _pt.dictionary_literal({
                'containment': null,
                'children': null,
            })), ($) => ({
                'containment': Meta_Pointer(helpers.expect_property($, 'containment'), helpers),
                'children': helpers.expect_array(helpers.expect_property($, 'children')).map(($) => helpers.expect_text($)),
            }))),
            'references': helpers.expect_array(helpers.expect_property($, 'references')).map(($) => _pt.cc(helpers.expect_verbose_type($, _pt.dictionary_literal({
                'reference': null,
                'targets': null,
            })), ($) => ({
                'reference': Meta_Pointer(helpers.expect_property($, 'reference'), helpers),
                'targets': helpers.expect_array(helpers.expect_property($, 'targets')).map(($) => _pt.cc(helpers.expect_verbose_type($, _pt.dictionary_literal({
                    'resolveInfo': null,
                    'reference': null,
                })), ($) => ({
                    'resolveInfo': helpers.expect_text(helpers.expect_property($, 'resolveInfo')),
                    'reference': helpers.expect_optional_null(helpers.expect_property($, 'reference')).map(($) => helpers.expect_text($)),
                }))),
            }))),
            'annotations': helpers.expect_array(helpers.expect_property($, 'annotations')).map(($) => helpers.expect_text($)),
        }))),
    }))
}

export const Meta_Pointer = (
    $: _praw.Value,
    helpers: h.Helpers
): d.Meta_Pointer => {
    return _pt.cc(helpers.expect_verbose_type($, _pt.dictionary_literal({
        'language': null,
        'key': null,
        'version': null,
    })), ($) => ({
        'language': helpers.expect_text(helpers.expect_property($, 'language')),
        'key': helpers.expect_text(helpers.expect_property($, 'key')),
        'version': helpers.expect_text(helpers.expect_property($, 'version')),
    }))
}
