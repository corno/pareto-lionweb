
import * as _p from "pareto-core/dist/transformer"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/lioncore/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/lioncore/data"
export const ID: t_signatures.ID = ($) => $.__o_map(
    ($) => ({
        'key': _p_cc(
            $['key'], 
            ($) => $
        ),
        'id': _p_cc(
            $['id'], 
            ($) => $
        ),
    })
)
export const Raw_Reference: t_signatures.Raw_Reference = ($) => ({
    'resolveInfo': _p_cc(
        $['resolveInfo'], 
        ($) => $
    ),
    'reference': _p_cc(
        $['reference'], 
        ($) => $.__o_map(
            ($) => $
        )
    ),
})
export const M3: t_signatures.M3 = ($) => ({
    'id': _p_cc(
        $['id'], 
        ($) => ID(
            $
        )
    ),
    'version': _p_cc(
        $['version'], 
        ($) => $
    ),
    'dependencies': _p_cc(
        $['dependencies'], 
        ($) => $.__l_map(
            ($) => Raw_Reference(
                $
            )
        )
    ),
    'entities': _p_cc(
        $['entities'], 
        ($) => $.__d_map(
            ($,id) => ({
                'id': _p_cc(
                    $['id'], 
                    ($) => ID(
                        $
                    )
                ),
                'type': _p_cc(
                    $['type'], 
                    ($) => _p.decide.state(
                        $, 
                        ($): t_out.M3.entities.D.type_ => {
                            switch ($[0]) {
                                case 'classifier':
                                    return _p.ss(
                                        $, 
                                        ($) => ['classifier', ({
                                            'type': _p_cc(
                                                $['type'], 
                                                ($) => _p.decide.state(
                                                    $, 
                                                    ($): t_out.M3.entities.D.type_.classifier.type_ => {
                                                        switch ($[0]) {
                                                            case 'concept':
                                                                return _p.ss(
                                                                    $, 
                                                                    ($) => ['concept', ({
                                                                        'abstract': _p_cc(
                                                                            $['abstract'], 
                                                                            ($) => $
                                                                        ),
                                                                        'partition': _p_cc(
                                                                            $['partition'], 
                                                                            ($) => $
                                                                        ),
                                                                        'extends': _p_cc(
                                                                            $['extends'], 
                                                                            ($) => $.__o_map(
                                                                                ($) => Raw_Reference(
                                                                                    $
                                                                                )
                                                                            )
                                                                        ),
                                                                        'implements': _p_cc(
                                                                            $['implements'], 
                                                                            ($) => $.__l_map(
                                                                                ($) => Raw_Reference(
                                                                                    $
                                                                                )
                                                                            )
                                                                        ),
                                                                    })]
                                                                )
                                                            case 'interface':
                                                                return _p.ss(
                                                                    $, 
                                                                    ($) => ['interface', ({
                                                                        'extends': _p_cc(
                                                                            $['extends'], 
                                                                            ($) => $.__l_map(
                                                                                ($) => Raw_Reference(
                                                                                    $
                                                                                )
                                                                            )
                                                                        ),
                                                                    })]
                                                                )
                                                            default:
                                                                return _p.au(
                                                                    $[0]
                                                                )
                                                        }
                                                    }
                                                )
                                            ),
                                            'features': _p_cc(
                                                $['features'], 
                                                ($) => $.__d_map(
                                                    ($,id) => ({
                                                        'id': _p_cc(
                                                            $['id'], 
                                                            ($) => ID(
                                                                $
                                                            )
                                                        ),
                                                        'optional': _p_cc(
                                                            $['optional'], 
                                                            ($) => $
                                                        ),
                                                        'type': _p_cc(
                                                            $['type'], 
                                                            ($) => _p.decide.state(
                                                                $, 
                                                                ($): t_out.M3.entities.D.type_.classifier.features.D.type_ => {
                                                                    switch ($[0]) {
                                                                        case 'property':
                                                                            return _p.ss(
                                                                                $, 
                                                                                ($) => ['property', ({
                                                                                    'type': _p_cc(
                                                                                        $['type'], 
                                                                                        ($) => Raw_Reference(
                                                                                            $
                                                                                        )
                                                                                    ),
                                                                                })]
                                                                            )
                                                                        case 'link':
                                                                            return _p.ss(
                                                                                $, 
                                                                                ($) => ['link', ({
                                                                                    'multiple': _p_cc(
                                                                                        $['multiple'], 
                                                                                        ($) => $
                                                                                    ),
                                                                                    'type': _p_cc(
                                                                                        $['type'], 
                                                                                        ($) => Raw_Reference(
                                                                                            $
                                                                                        )
                                                                                    ),
                                                                                    'link type': _p_cc(
                                                                                        $['link type'], 
                                                                                        ($) => _p.decide.state(
                                                                                            $, 
                                                                                            ($): t_out.M3.entities.D.type_.classifier.features.D.type_.link.link_type => {
                                                                                                switch ($[0]) {
                                                                                                    case 'containment':
                                                                                                        return _p.ss(
                                                                                                            $, 
                                                                                                            ($) => ['containment', null]
                                                                                                        )
                                                                                                    case 'reference':
                                                                                                        return _p.ss(
                                                                                                            $, 
                                                                                                            ($) => ['reference', null]
                                                                                                        )
                                                                                                    default:
                                                                                                        return _p.au(
                                                                                                            $[0]
                                                                                                        )
                                                                                                }
                                                                                            }
                                                                                        )
                                                                                    ),
                                                                                })]
                                                                            )
                                                                        default:
                                                                            return _p.au(
                                                                                $[0]
                                                                            )
                                                                    }
                                                                }
                                                            )
                                                        ),
                                                    })
                                                )
                                            ),
                                        })]
                                    )
                                case 'datatype':
                                    return _p.ss(
                                        $, 
                                        ($) => ['datatype', _p.decide.state(
                                            $, 
                                            ($): t_out.M3.entities.D.type_.datatype => {
                                                switch ($[0]) {
                                                    case 'enumeration':
                                                        return _p.ss(
                                                            $, 
                                                            ($) => ['enumeration', $.__d_map(
                                                                ($,id) => ID(
                                                                    $
                                                                )
                                                            )]
                                                        )
                                                    default:
                                                        return _p.au(
                                                            $[0]
                                                        )
                                                }
                                            }
                                        )]
                                    )
                                default:
                                    return _p.au(
                                        $[0]
                                    )
                            }
                        }
                    )
                ),
            })
        )
    ),
})
