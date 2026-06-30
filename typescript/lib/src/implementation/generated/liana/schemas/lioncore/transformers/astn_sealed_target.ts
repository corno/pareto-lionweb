
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State, assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>, assign: ($: OV) => B, otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string, assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/lioncore/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

import * as v_external_generic from "../../generic/transformers/astn_sealed_target"

export const M3: t_signatures.M3 = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "id": p_change_context(
            $['id'],
            ($) => v_external_generic.ID(
                $,
            ),
        ),
        "properties": p_change_context(
            $['properties'],
            ($) => ['group', ['verbose', p_.literal.dictionary(
                {
                    "version": p_change_context(
                        $['version'],
                        ($) => ['text', {
                            'delimiter': ['quote', null],
                            'value': $,
                        }],
                    ),
                },
            )]],
        ),
        "references": p_change_context(
            $['references'],
            ($) => ['group', ['verbose', p_.literal.dictionary(
                {
                    "dependencies": p_change_context(
                        $['dependencies'],
                        ($) => v_external_generic.References(
                            $,
                        ),
                    ),
                },
            )]],
        ),
        "containments": p_change_context(
            $['containments'],
            ($) => ['group', ['verbose', p_.literal.dictionary(
                {
                    "entities": p_change_context(
                        $['entities'],
                        ($) => ['dictionary', p_.from.dictionary($).map(
                            ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "id": p_change_context(
                                        $['id'],
                                        ($) => v_external_generic.ID(
                                            $,
                                        ),
                                    ),
                                    "classifier": p_change_context(
                                        $['classifier'],
                                        ($) => ['state', p_decide_state(
                                            $,
                                            ($): t_out.Value.state => {
                                                switch ($[0]) {
                                                    case 'Classifier':
                                                        return p_.option(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Classifier',
                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                    {
                                                                        "classifier": p_change_context(
                                                                            $['classifier'],
                                                                            ($) => ['state', p_decide_state(
                                                                                $,
                                                                                ($): t_out.Value.state => {
                                                                                    switch ($[0]) {
                                                                                        case 'Concept':
                                                                                            return p_.option(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'Concept',
                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                        {
                                                                                                            "properties": p_change_context(
                                                                                                                $['properties'],
                                                                                                                ($) => ['group', ['verbose', p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "abstract": p_change_context(
                                                                                                                            $['abstract'],
                                                                                                                            ($) => ['text', {
                                                                                                                                'delimiter': ['quote', null],
                                                                                                                                'value': $,
                                                                                                                            }],
                                                                                                                        ),
                                                                                                                        "partition": p_change_context(
                                                                                                                            $['partition'],
                                                                                                                            ($) => ['text', {
                                                                                                                                'delimiter': ['quote', null],
                                                                                                                                'value': $,
                                                                                                                            }],
                                                                                                                        ),
                                                                                                                    },
                                                                                                                )]],
                                                                                                            ),
                                                                                                            "references": p_change_context(
                                                                                                                $['references'],
                                                                                                                ($) => ['group', ['verbose', p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "extends": p_change_context(
                                                                                                                            $['extends'],
                                                                                                                            ($) => v_external_generic.Optional_Reference(
                                                                                                                                $,
                                                                                                                            ),
                                                                                                                        ),
                                                                                                                        "implements": p_change_context(
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
                                                                                            return p_.option(
                                                                                                $,
                                                                                                ($) => ({
                                                                                                    'option': 'Interface',
                                                                                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                        {
                                                                                                            "references": p_change_context(
                                                                                                                $['references'],
                                                                                                                ($) => ['group', ['verbose', p_.literal.dictionary(
                                                                                                                    {
                                                                                                                        "extends": p_change_context(
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
                                                                                            return p_.au(
                                                                                                $[0],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            )],
                                                                        ),
                                                                        "containments": p_change_context(
                                                                            $['containments'],
                                                                            ($) => ['group', ['verbose', p_.literal.dictionary(
                                                                                {
                                                                                    "features": p_change_context(
                                                                                        $['features'],
                                                                                        ($) => ['dictionary', p_.from.dictionary($).map(
                                                                                            ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                                                                                {
                                                                                                    "id": p_change_context(
                                                                                                        $['id'],
                                                                                                        ($) => v_external_generic.ID(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                    "classifier": p_change_context(
                                                                                                        $['classifier'],
                                                                                                        ($) => ['state', p_decide_state(
                                                                                                            $,
                                                                                                            ($): t_out.Value.state => {
                                                                                                                switch ($[0]) {
                                                                                                                    case 'Property':
                                                                                                                        return p_.option(
                                                                                                                            $,
                                                                                                                            ($) => ({
                                                                                                                                'option': 'Property',
                                                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                    {
                                                                                                                                        "references": p_change_context(
                                                                                                                                            $['references'],
                                                                                                                                            ($) => ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "type": p_change_context(
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
                                                                                                                        return p_.option(
                                                                                                                            $,
                                                                                                                            ($) => ({
                                                                                                                                'option': 'Link',
                                                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                    {
                                                                                                                                        "classifier": p_change_context(
                                                                                                                                            $['classifier'],
                                                                                                                                            ($) => ['state', p_decide_state(
                                                                                                                                                $,
                                                                                                                                                ($): t_out.Value.state => {
                                                                                                                                                    switch ($[0]) {
                                                                                                                                                        case 'Containment':
                                                                                                                                                            return p_.option(
                                                                                                                                                                $,
                                                                                                                                                                ($) => ({
                                                                                                                                                                    'option': 'Containment',
                                                                                                                                                                    'value': ['nothing', null],
                                                                                                                                                                }),
                                                                                                                                                            )
                                                                                                                                                        case 'Reference':
                                                                                                                                                            return p_.option(
                                                                                                                                                                $,
                                                                                                                                                                ($) => ({
                                                                                                                                                                    'option': 'Reference',
                                                                                                                                                                    'value': ['nothing', null],
                                                                                                                                                                }),
                                                                                                                                                            )
                                                                                                                                                        default:
                                                                                                                                                            return p_.au(
                                                                                                                                                                $[0],
                                                                                                                                                            )
                                                                                                                                                    }
                                                                                                                                                },
                                                                                                                                            )],
                                                                                                                                        ),
                                                                                                                                        "properties": p_change_context(
                                                                                                                                            $['properties'],
                                                                                                                                            ($) => ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "multiple": p_change_context(
                                                                                                                                                        $['multiple'],
                                                                                                                                                        ($) => ['text', {
                                                                                                                                                            'delimiter': ['quote', null],
                                                                                                                                                            'value': $,
                                                                                                                                                        }],
                                                                                                                                                    ),
                                                                                                                                                },
                                                                                                                                            )]],
                                                                                                                                        ),
                                                                                                                                        "references": p_change_context(
                                                                                                                                            $['references'],
                                                                                                                                            ($) => ['group', ['verbose', p_.literal.dictionary(
                                                                                                                                                {
                                                                                                                                                    "type": p_change_context(
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
                                                                                                                        return p_.au(
                                                                                                                            $[0],
                                                                                                                        )
                                                                                                                }
                                                                                                            },
                                                                                                        )],
                                                                                                    ),
                                                                                                    "properties": p_change_context(
                                                                                                        $['properties'],
                                                                                                        ($) => ['group', ['verbose', p_.literal.dictionary(
                                                                                                            {
                                                                                                                "optional": p_change_context(
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
                                                        return p_.option(
                                                            $,
                                                            ($) => ({
                                                                'option': 'Datatype',
                                                                'value': ['state', p_decide_state(
                                                                    $,
                                                                    ($): t_out.Value.state => {
                                                                        switch ($[0]) {
                                                                            case 'Enumeration':
                                                                                return p_.option(
                                                                                    $,
                                                                                    ($) => ({
                                                                                        'option': 'Enumeration',
                                                                                        'value': ['dictionary', p_.from.dictionary($).map(
                                                                                            ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
                                                                                                {
                                                                                                    "id": p_change_context(
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
                                                                                return p_.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                )],
                                                            }),
                                                        )
                                                    default:
                                                        return p_.au(
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
