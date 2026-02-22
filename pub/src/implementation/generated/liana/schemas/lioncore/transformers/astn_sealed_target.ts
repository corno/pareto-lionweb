
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lioncore/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

import * as v_external_generic from "../../generic/transformers/astn_sealed_target"

export const M3: t_signatures.M3 = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "id": _p_change_context(
            $['id'],
            ($) => v_external_generic.ID(
                $,
            ),
        ),
        "properties": _p_change_context(
            $['properties'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    "version": _p_change_context(
                        $['version'],
                        ($) => ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    ),
                },
            )]],
        ),
        "references": _p_change_context(
            $['references'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    "dependencies": _p_change_context(
                        $['dependencies'],
                        ($) => v_external_generic.References(
                            $,
                        ),
                    ),
                },
            )]],
        ),
        "containments": _p_change_context(
            $['containments'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    "entities": _p_change_context(
                        $['entities'],
                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                            $,
                        ).map(
                            ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "id": _p_change_context(
                                        $['id'],
                                        ($) => v_external_generic.ID(
                                            $,
                                        ),
                                    ),
                                    "classifier": _p_change_context(
                                        $['classifier'],
                                        ($) => ['state', _p.decide.state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'Classifier':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Classifier',
                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                    {
                                                                        "classifier": _p_change_context(
                                                                            $['classifier'],
                                                                            ($) => ['state', _p.decide.state(
                                                                                $,
                                                                                ($): t_out.Value.state => {
                                                                                    switch ($[0]) {
                                                                                        case 'Concept':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'Concept',
                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                        {
                                                                                                            "properties": _p_change_context(
                                                                                                                $['properties'],
                                                                                                                ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "abstract": _p_change_context(
                                                                                                                            $['abstract'],
                                                                                                                            ($) => ['text', {
                                                                                                                                'delimiter': ['quote', null],
                                                                                                                                'value': $,
                                                                                                                            }],
                                                                                                                        ),
                                                                                                                        "partition": _p_change_context(
                                                                                                                            $['partition'],
                                                                                                                            ($) => ['text', {
                                                                                                                                'delimiter': ['quote', null],
                                                                                                                                'value': $,
                                                                                                                            }],
                                                                                                                        ),
                                                                                                                    },
                                                                                                                )]],
                                                                                                            ),
                                                                                                            "references": _p_change_context(
                                                                                                                $['references'],
                                                                                                                ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "extends": _p_change_context(
                                                                                                                            $['extends'],
                                                                                                                            ($) => v_external_generic.Optional_Reference(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        "implements": _p_change_context(
                                                                                                                            $['implements'],
                                                                                                                            ($) => v_external_generic.References(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    },
                                                                                                                )]],
                                                                                                            ),
                                                                                                        },
                                                                                                    )]],
                                                                                                }),
                                                                                            )
                                                                                        case 'Interface':
                                                                                            return _p.ss(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'Interface',
                                                                                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                        {
                                                                                                            "references": _p_change_context(
                                                                                                                $['references'],
                                                                                                                ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                                                                    {
                                                                                                                        "extends": _p_change_context(
                                                                                                                            $['extends'],
                                                                                                                            ($) => v_external_generic.References(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                    },
                                                                                                                )]],
                                                                                                            ),
                                                                                                        },
                                                                                                    )]],
                                                                                                }),
                                                                                            )
                                                                                        default:
                                                                                            return _p.au(
                                                                                                $[0],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            )],
                                                                        ),
                                                                        "containments": _p_change_context(
                                                                            $['containments'],
                                                                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                                {
                                                                                    "features": _p_change_context(
                                                                                        $['features'],
                                                                                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                                                            $,
                                                                                        ).map(
                                                                                            ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                                                                {
                                                                                                    "id": _p_change_context(
                                                                                                        $['id'],
                                                                                                        ($) => v_external_generic.ID(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                    "classifier": _p_change_context(
                                                                                                        $['classifier'],
                                                                                                        ($) => ['state', _p.decide.state(
                                                                                                            $,
                                                                                                            ($): t_out.Value.state => {
                                                                                                                switch ($[0]) {
                                                                                                                    case 'Property':
                                                                                                                        return _p.ss(
                                                                                                                            $,
                                                                                                                            ($) => ({
                                                                                                                                'option': 'Property',
                                                                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                                    {
                                                                                                                                        "references": _p_change_context(
                                                                                                                                            $['references'],
                                                                                                                                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "type": _p_change_context(
                                                                                                                                                        $['type'],
                                                                                                                                                        ($) => v_external_generic.Singular_Reference(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                },
                                                                                                                                            )]],
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                )]],
                                                                                                                            }),
                                                                                                                        )
                                                                                                                    case 'Link':
                                                                                                                        return _p.ss(
                                                                                                                            $,
                                                                                                                            ($) => ({
                                                                                                                                'option': 'Link',
                                                                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                                                    {
                                                                                                                                        "classifier": _p_change_context(
                                                                                                                                            $['classifier'],
                                                                                                                                            ($) => ['state', _p.decide.state(
                                                                                                                                                $,
                                                                                                                                                ($): t_out.Value.state => {
                                                                                                                                                    switch ($[0]) {
                                                                                                                                                        case 'Containment':
                                                                                                                                                            return _p.ss(
                                                                                                                                                                $,
                                                                                                                                                                ($) => ({
                                                                                                                                                                    'option': 'Containment',
                                                                                                                                                                    'value': ['nothing', null],
                                                                                                                                                                }),
                                                                                                                                                            )
                                                                                                                                                        case 'Reference':
                                                                                                                                                            return _p.ss(
                                                                                                                                                                $,
                                                                                                                                                                ($) => ({
                                                                                                                                                                    'option': 'Reference',
                                                                                                                                                                    'value': ['nothing', null],
                                                                                                                                                                }),
                                                                                                                                                            )
                                                                                                                                                        default:
                                                                                                                                                            return _p.au(
                                                                                                                                                                $[0],
                                                                                                                                                            )
                                                                                                                                                    }
                                                                                                                                                },
                                                                                                                                            )],
                                                                                                                                        ),
                                                                                                                                        "properties": _p_change_context(
                                                                                                                                            $['properties'],
                                                                                                                                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "multiple": _p_change_context(
                                                                                                                                                        $['multiple'],
                                                                                                                                                        ($) => ['text', {
                                                                                                                                                            'delimiter': ['quote', null],
                                                                                                                                                            'value': $,
                                                                                                                                                        }],
                                                                                                                                                    ),
                                                                                                                                                },
                                                                                                                                            )]],
                                                                                                                                        ),
                                                                                                                                        "references": _p_change_context(
                                                                                                                                            $['references'],
                                                                                                                                            ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                                                                                                {
                                                                                                                                                    "type": _p_change_context(
                                                                                                                                                        $['type'],
                                                                                                                                                        ($) => v_external_generic.Singular_Reference(
                                                                                                                                                            $,
                                                                                                                                                        ),
                                                                                                                                                    ),
                                                                                                                                                },
                                                                                                                                            )]],
                                                                                                                                        ),
                                                                                                                                    },
                                                                                                                                )]],
                                                                                                                            }),
                                                                                                                        )
                                                                                                                    default:
                                                                                                                        return _p.au(
                                                                                                                            $[0],
                                                                                                                        )
                                                                                                                }
                                                                                                            },
                                                                                                        )],
                                                                                                    ),
                                                                                                    "properties": _p_change_context(
                                                                                                        $['properties'],
                                                                                                        ($) => ['group', ['verbose', _p.dictionary.literal(
                                                                                                            {
                                                                                                                "optional": _p_change_context(
                                                                                                                    $['optional'],
                                                                                                                    ($) => ['text', {
                                                                                                                        'delimiter': ['quote', null],
                                                                                                                        'value': $,
                                                                                                                    }],
                                                                                                                ),
                                                                                                            },
                                                                                                        )]],
                                                                                                    ),
                                                                                                },
                                                                                            )]],
                                                                                        )],
                                                                                    ),
                                                                                },
                                                                            )]],
                                                                        ),
                                                                    },
                                                                )]],
                                                            }),
                                                        )
                                                    case 'Datatype':
                                                        return _p.ss(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Datatype',
                                                                'value': ['state', _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Value.state => {
                                                                        switch ($[0]) {
                                                                            case 'Enumeration':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ({
                                                                                        'option': 'Enumeration',
                                                                                        'value': ['dictionary', _p.dictionary.from.dictionary(
                                                                                            $,
                                                                                        ).map(
                                                                                            ($, id) => ['group', ['verbose', _p.dictionary.literal(
                                                                                                {
                                                                                                    "id": _p_change_context(
                                                                                                        $['id'],
                                                                                                        ($) => v_external_generic.ID(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                },
                                                                                            )]],
                                                                                        )],
                                                                                    }),
                                                                                )
                                                                            default:
                                                                                return _p.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0],
                                                        )
                                                }
                                            },
                                        )],
                                    ),
                                },
                            )]],
                        )],
                    ),
                },
            )]],
        ),
    },
)]]
