import * as _erd from 'exupery-core-rawdata'
import * as _ea from 'exupery-core-alg'
import * as d from './types/LionWeb_serialization_format'

export const Serialization_Chunk = ($: _erd.Value): d.Serialization_Chunk => {
    return _ea.cc(_erd.expect_verbose_type($, _ea.dictionary_literal({
        'serializationFormatVersion': null,
        'languages': null,
        'nodes': null,
    })), ($) => ({
        'serializationFormatVersion': _erd.expect_text(_erd.expect_property($, 'serializationFormatVersion')),
        'languages': _erd.expect_array(_erd.expect_property($, 'languages')).map(($) => _ea.cc(_erd.expect_verbose_type($, _ea.dictionary_literal({
            'key': null,
            'version': null,
        })), ($) => ({
            'key': _erd.expect_text(_erd.expect_property($, 'key')),
            'version': _erd.expect_text(_erd.expect_property($, 'version')),
        }))),
        'nodes': _erd.expect_array(_erd.expect_property($, 'nodes')).map(($) => _ea.cc(_erd.expect_verbose_type($, _ea.dictionary_literal({
            'id': null,
            'classifier': null,
            'properties': null,
            'containments': null, //this one is missing
            'references': null, //this one is missing
            'annotations': null, //this one is missing
            'parent': null,
        })), ($) => ({
            'id': _erd.expect_text(_erd.expect_property($, 'id')),
            'classifier': Meta_Pointer(_erd.expect_property($, 'classifier')),
            'parent': _erd.expect_optional_null(_erd.expect_property($, 'parent')).map(($) => _erd.expect_text($)),
            'properties': _erd.expect_array(_erd.expect_property($, 'properties')).map(($) => _ea.cc(_erd.expect_verbose_type($, _ea.dictionary_literal({
                'property': null,
                'value': null,
            })), ($) => ({
                'property': Meta_Pointer(_erd.expect_property($, 'property')),
                'value': _erd.expect_text(_erd.expect_property($, 'value')),
            }))),
            'containments': _erd.expect_array(_erd.expect_property($, 'containments')).map(($) => _ea.cc(_erd.expect_verbose_type($, _ea.dictionary_literal({
                'containment': null,
                'children': null,
            })), ($) => ({
                'containment': Meta_Pointer(_erd.expect_property($, 'containment')),
                'children': _erd.expect_array(_erd.expect_property($, 'children')).map(($) => _erd.expect_text($)),
            }))),
            'references': _erd.expect_array(_erd.expect_property($, 'references')).map(($) => _ea.cc(_erd.expect_verbose_type($, _ea.dictionary_literal({
                'reference': null,
                'targets': null,
            })), ($) => ({
                'reference': Meta_Pointer(_erd.expect_property($, 'reference')),
                'targets': _erd.expect_array(_erd.expect_property($, 'targets')).map(($) => _ea.cc(_erd.expect_verbose_type($, _ea.dictionary_literal({
                    'resolveInfo': null,
                    'reference': null,
                })), ($) => ({
                    'resolveInfo': _erd.expect_text(_erd.expect_property($, 'resolveInfo')),
                    'reference': _erd.expect_text(_erd.expect_property($, 'reference')),
                }))),
            }))),
            'annotations': _erd.expect_array(_erd.expect_property($, 'annotations')).map(($) => _erd.expect_text($)),
        }))),
    }))
}

export const Meta_Pointer = ($: _erd.Value): d.Meta_Pointer => {
    return _ea.cc(_erd.expect_verbose_type($, _ea.dictionary_literal({
        'language': null,
        'key': null,
        'version': null,
    })), ($) => ({
        'language': _erd.expect_text(_erd.expect_property($, 'language')),
        'key': _erd.expect_text(_erd.expect_property($, 'key')),
        'version': _erd.expect_text(_erd.expect_property($, 'version')),
    }))
}
