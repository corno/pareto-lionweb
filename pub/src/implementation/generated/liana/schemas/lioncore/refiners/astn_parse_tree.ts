    
    import * as _p from "pareto-core/dist/expression"
    
    import _p_change_context from "pareto-core/dist/_p_change_context"
    
    import _p_list_from_text from "pareto-core/dist/_p_list_from_text"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lioncore/unmarshall"
    
    import * as t_out from "../../../../../../interface/generated/liana/schemas/lioncore/data"
    
    import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"
    
    import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"
    
    import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"
    
    import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"
    
    export const M3: t_signatures.M3 = ($, abort) => _p_change_context(
        v_unmarshalled_from_parse_tree.Group(
            $,
            ($) => abort(
                ['expected a group', null],
            ),
        ),
        ($) => ({
            'id': _p_change_context(
                $.__get_entry(
                    'id',
                    ($) => abort(
                        ['no such entry', "id"],
                    ),
                ),
                ($) => ID(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            ),
            'version': _p_change_context(
                $.__get_entry(
                    'version',
                    ($) => abort(
                        ['no such entry', "version"],
                    ),
                ),
                ($) => v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null],
                    ),
                ),
            ),
            'dependencies': _p_change_context(
                $.__get_entry(
                    'dependencies',
                    ($) => abort(
                        ['no such entry', "dependencies"],
                    ),
                ),
                ($) => _p.list.map(
                    v_unmarshalled_from_parse_tree.List(
                        $,
                        ($) => abort(
                            ['expected a list', null],
                        ),
                    ),
                    ($) => Raw_Reference(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            ),
            'entities': _p_change_context(
                $.__get_entry(
                    'entities',
                    ($) => abort(
                        ['no such entry', "entities"],
                    ),
                ),
                ($) => _p.dictionary.map(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null],
                        ),
                    ),
                    ($, id) => _p_change_context(
                        v_unmarshalled_from_parse_tree.Group(
                            $,
                            ($) => abort(
                                ['expected a group', null],
                            ),
                        ),
                        ($) => ({
                            'id': _p_change_context(
                                $.__get_entry(
                                    'id',
                                    ($) => abort(
                                        ['no such entry', "id"],
                                    ),
                                ),
                                ($) => ID(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            ),
                            'type': _p_change_context(
                                $.__get_entry(
                                    'type',
                                    ($) => abort(
                                        ['no such entry', "type"],
                                    ),
                                ),
                                ($) => _p_change_context(
                                    v_unmarshalled_from_parse_tree.State(
                                        $,
                                        ($) => abort(
                                            ['expected a state', null],
                                        ),
                                    ),
                                    ($) => _p.decide.text(
                                        $['option']['value'],
                                        ($t): t_out.M3.entities.D.type_ => {
                                            switch ($t) {
                                                case 'classifier':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['classifier', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null],
                                                                ),
                                                            ),
                                                            ($) => ({
                                                                'type': _p_change_context(
                                                                    $.__get_entry(
                                                                        'type',
                                                                        ($) => abort(
                                                                            ['no such entry', "type"],
                                                                        ),
                                                                    ),
                                                                    ($) => _p_change_context(
                                                                        v_unmarshalled_from_parse_tree.State(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a state', null],
                                                                            ),
                                                                        ),
                                                                        ($) => _p.decide.text(
                                                                            $['option']['value'],
                                                                            ($t): t_out.M3.entities.D.type_.classifier.type_ => {
                                                                                switch ($t) {
                                                                                    case 'concept':
                                                                                        return _p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ['concept', _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a group', null],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'abstract': _p_change_context(
                                                                                                        $.__get_entry(
                                                                                                            'abstract',
                                                                                                            ($) => abort(
                                                                                                                ['no such entry', "abstract"],
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'partition': _p_change_context(
                                                                                                        $.__get_entry(
                                                                                                            'partition',
                                                                                                            ($) => abort(
                                                                                                                ['no such entry', "partition"],
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected a text', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'extends': _p_change_context(
                                                                                                        $.__get_entry(
                                                                                                            'extends',
                                                                                                            ($) => abort(
                                                                                                                ['no such entry', "extends"],
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => _p.optional.map(
                                                                                                            v_unmarshalled_from_parse_tree.Optional(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected an optional', null],
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => Raw_Reference(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                    'implements': _p_change_context(
                                                                                                        $.__get_entry(
                                                                                                            'implements',
                                                                                                            ($) => abort(
                                                                                                                ['no such entry', "implements"],
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => _p.list.map(
                                                                                                            v_unmarshalled_from_parse_tree.List(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a list', null],
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => Raw_Reference(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            )],
                                                                                        )
                                                                                    case 'interface':
                                                                                        return _p_change_context(
                                                                                            $['value'],
                                                                                            ($) => ['interface', _p_change_context(
                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a group', null],
                                                                                                    ),
                                                                                                ),
                                                                                                ($) => ({
                                                                                                    'extends': _p_change_context(
                                                                                                        $.__get_entry(
                                                                                                            'extends',
                                                                                                            ($) => abort(
                                                                                                                ['no such entry', "extends"],
                                                                                                            ),
                                                                                                        ),
                                                                                                        ($) => _p.list.map(
                                                                                                            v_unmarshalled_from_parse_tree.List(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a list', null],
                                                                                                                ),
                                                                                                            ),
                                                                                                            ($) => Raw_Reference(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                }),
                                                                                            )],
                                                                                        )
                                                                                    default:
                                                                                        return abort(
                                                                                            ['unknown option', $['option']['value']],
                                                                                        )
                                                                                }
                                                                            },
                                                                        ),
                                                                    ),
                                                                ),
                                                                'features': _p_change_context(
                                                                    $.__get_entry(
                                                                        'features',
                                                                        ($) => abort(
                                                                            ['no such entry', "features"],
                                                                        ),
                                                                    ),
                                                                    ($) => _p.dictionary.map(
                                                                        v_unmarshalled_from_parse_tree.Dictionary(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a dictionary', null],
                                                                            ),
                                                                        ),
                                                                        ($, id) => _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'id': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'id',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "id"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => ID(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'optional': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'optional',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "optional"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'type': _p_change_context(
                                                                                    $.__get_entry(
                                                                                        'type',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "type"],
                                                                                        ),
                                                                                    ),
                                                                                    ($) => _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.M3.entities.D.type_.classifier.features.D.type_ => {
                                                                                                switch ($t) {
                                                                                                    case 'property':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ['property', _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a group', null],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => ({
                                                                                                                    'type': _p_change_context(
                                                                                                                        $.__get_entry(
                                                                                                                            'type',
                                                                                                                            ($) => abort(
                                                                                                                                ['no such entry', "type"],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => Raw_Reference(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }),
                                                                                                            )],
                                                                                                        )
                                                                                                    case 'link':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ['link', _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.Group(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        ['expected a group', null],
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => ({
                                                                                                                    'multiple': _p_change_context(
                                                                                                                        $.__get_entry(
                                                                                                                            'multiple',
                                                                                                                            ($) => abort(
                                                                                                                                ['no such entry', "multiple"],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                ['expected a text', null],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    'type': _p_change_context(
                                                                                                                        $.__get_entry(
                                                                                                                            'type',
                                                                                                                            ($) => abort(
                                                                                                                                ['no such entry', "type"],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => Raw_Reference(
                                                                                                                            $,
                                                                                                                            ($) => abort(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    'link type': _p_change_context(
                                                                                                                        $.__get_entry(
                                                                                                                            'link type',
                                                                                                                            ($) => abort(
                                                                                                                                ['no such entry', "link type"],
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        ($) => _p_change_context(
                                                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                                                $,
                                                                                                                                ($) => abort(
                                                                                                                                    ['expected a state', null],
                                                                                                                                ),
                                                                                                                            ),
                                                                                                                            ($) => _p.decide.text(
                                                                                                                                $['option']['value'],
                                                                                                                                ($t): t_out.M3.entities.D.type_.classifier.features.D.type_.link.link_type => {
                                                                                                                                    switch ($t) {
                                                                                                                                        case 'containment':
                                                                                                                                            return _p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ['containment', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        ['expected a nothing', null],
                                                                                                                                                    ),
                                                                                                                                                )],
                                                                                                                                            )
                                                                                                                                        case 'reference':
                                                                                                                                            return _p_change_context(
                                                                                                                                                $['value'],
                                                                                                                                                ($) => ['reference', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                                    $,
                                                                                                                                                    ($) => abort(
                                                                                                                                                        ['expected a nothing', null],
                                                                                                                                                    ),
                                                                                                                                                )],
                                                                                                                                            )
                                                                                                                                        default:
                                                                                                                                            return abort(
                                                                                                                                                ['unknown option', $['option']['value']],
                                                                                                                                            )
                                                                                                                                    }
                                                                                                                                },
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                }),
                                                                                                            )],
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            ['unknown option', $['option']['value']],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ),
                                                                    ),
                                                                ),
                                                            }),
                                                        )],
                                                    )
                                                case 'datatype':
                                                    return _p_change_context(
                                                        $['value'],
                                                        ($) => ['datatype', _p_change_context(
                                                            v_unmarshalled_from_parse_tree.State(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a state', null],
                                                                ),
                                                            ),
                                                            ($) => _p.decide.text(
                                                                $['option']['value'],
                                                                ($t): t_out.M3.entities.D.type_.datatype => {
                                                                    switch ($t) {
                                                                        case 'enumeration':
                                                                            return _p_change_context(
                                                                                $['value'],
                                                                                ($) => ['enumeration', _p.dictionary.map(
                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a dictionary', null],
                                                                                        ),
                                                                                    ),
                                                                                    ($, id) => ID(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            $,
                                                                                        ),
                                                                                    ),
                                                                                )],
                                                                            )
                                                                        default:
                                                                            return abort(
                                                                                ['unknown option', $['option']['value']],
                                                                            )
                                                                    }
                                                                },
                                                            ),
                                                        )],
                                                    )
                                                default:
                                                    return abort(
                                                        ['unknown option', $['option']['value']],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                            ),
                        }),
                    ),
                ),
            ),
        }),
    )
    
    export const ID: t_signatures.ID = ($, abort) => _p.optional.map(
        v_unmarshalled_from_parse_tree.Optional(
            $,
            ($) => abort(
                ['expected an optional', null],
            ),
        ),
        ($) => _p_change_context(
            v_unmarshalled_from_parse_tree.Group(
                $,
                ($) => abort(
                    ['expected a group', null],
                ),
            ),
            ($) => ({
                'key': _p_change_context(
                    $.__get_entry(
                        'key',
                        ($) => abort(
                            ['no such entry', "key"],
                        ),
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                ),
                'id': _p_change_context(
                    $.__get_entry(
                        'id',
                        ($) => abort(
                            ['no such entry', "id"],
                        ),
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                ),
            }),
        ),
    )
    
    export const Raw_Reference: t_signatures.Raw_Reference = ($, abort) => _p_change_context(
        v_unmarshalled_from_parse_tree.Group(
            $,
            ($) => abort(
                ['expected a group', null],
            ),
        ),
        ($) => ({
            'resolveInfo': _p_change_context(
                $.__get_entry(
                    'resolveInfo',
                    ($) => abort(
                        ['no such entry', "resolveInfo"],
                    ),
                ),
                ($) => v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null],
                    ),
                ),
            ),
            'reference': _p_change_context(
                $.__get_entry(
                    'reference',
                    ($) => abort(
                        ['no such entry', "reference"],
                    ),
                ),
                ($) => _p.optional.map(
                    v_unmarshalled_from_parse_tree.Optional(
                        $,
                        ($) => abort(
                            ['expected an optional', null],
                        ),
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                ),
            ),
        }),
    )
