import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import * as _pdev from 'pareto-core-dev'

//data types
import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_function from "../../../../interface/to_be_generated/unmarshall"

import * as d_astn_unmarshalled from "astn-core/dist/interface/to_be_generated/unmarshalled"

//dependencies
import * as r_astn_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/refiners/unmarshalled/parse_tree"

export const Array = (
    $: d_in.Value,
    abort: _pi.Abort<d_function.Error>,
) => r_astn_unmarshalled_from_parse_tree.List(
    $,
    ($) => abort(['astn', $]),
)

export const Boolean = (
    $: d_in.Value,
    abort: _pi.Abort<d_function.Error>,
): boolean => {
    const value = $
    return _p.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'concrete': return _p.ss($, ($): boolean => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'text': return _p.ss($, ($) => {
                        const text_value = $
                        return _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'undelimited': return _p.ss($, ($) => text_value.value === "true"
                                    ? true
                                    : text_value.value === "false"
                                        ? false
                                        : abort(['json', ['not a boolean', null]])
                                )
                                default: return abort(['json', ['not a boolean', null]])
                            }
                        })
                    })
                    default: return abort(['json', ['not a boolean', null]])
                }
            }))
            default: return abort(['json', ['not a boolean', null]])
        }
    })
}

export const Null = (
    $: d_in.Value,
    abort: _pi.Abort<d_function.Error>,
): null => {
    const value = $
    return _p.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'concrete': return _p.ss($, ($): null => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'text': return _p.ss($, ($) => {
                        const text_value = $
                        return _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'undelimited': return _p.ss($, ($) => text_value.value === "null"
                                    ? null
                                    : abort(['json', ['not a null', null]])
                                )
                                default: return abort(['json', ['not a null', null]])
                            }
                        })
                    })
                    default: return abort(['json', ['not a null', null]])
                }
            }))
            default: return abort(['json', ['not a null', null]])
        }
    })
}

export const Number = (
    $: d_in.Value,
    abort: _pi.Abort<d_function.Error>,
): number => {
    const value = $
    return _p.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'concrete': return _p.ss($, ($) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'text': return _p.ss($, ($) => {
                        const text_value = $
                        return _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'undelimited': return _p.ss($, ($) => _pdev.implement_me(`parse number from text: ${text_value.value}`))
                                default: return abort(['json', ['not a number', null]])
                            }
                        })
                    })
                    default: return abort(['json', ['not a number', null]])
                }
            }))
            default: return abort(['json', ['not a number', null]])
        }
    })
}

export const Object = (
    $: d_in.Value,
    abort: _pi.Abort<d_function.Error>,
) => {
    const properties = r_astn_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(['astn', $]),
    )

    return properties
}

export const Object_Static = (
    $: d_in.Value,
    abort: _pi.Abort<d_function.Error>,
    $p: {
        'expected properties': _pi.Dictionary<null>
    }
) => {
    const dictionary = r_astn_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(['astn', $]),
    )

    const unexpected_properties = _p.dictionary.from.dictionary(
        _p.dictionary.from.dictionary(
            dictionary.entries,
        ).join(
            $p['expected properties'],
            ($, other, id): _pi.Optional_Value<null> => _p.decide.optional(
                other,
                () => _p.optional.literal.not_set(),
                () => _p.optional.literal.set(null)
            )
        )
    ).filter(
        ($) => $
    )

    if (unexpected_properties.__get_number_of_entries() > 0) {
        return abort(['json', ['unexpected properties', unexpected_properties]])
    }

    return dictionary
}

export const Optional_Null = (
    $: d_in.Value,
): _pi.Optional_Value<d_in.Value> => {
    const value = $
    return _p.decide.state($.type, ($) => {
        switch ($[0]) {
            case 'concrete': return _p.ss($, ($) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'text': return _p.ss($, ($) => {
                        const text_value = $
                        return _p.decide.state($.type, ($) => {
                            switch ($[0]) {
                                case 'undelimited': return _p.ss($, ($) => text_value.value === "null"
                                    ? _p.optional.literal.not_set()
                                    : _p.optional.literal.set(value)
                                )
                                default: return _p.optional.literal.set(value)
                            }
                        })
                    })
                    default: return _p.optional.literal.set(value)
                }
            }))
            default: return _p.optional.literal.set(value)
        }
    })
}

export const Property = (
    $: d_astn_unmarshalled.Dictionary,
    abort: _pi.Abort<d_function.Error>,
    $p: {
        'id': string
    }
) => $.entries.__get_entry_deprecated(
    $p.id,
    {
        no_such_entry: ($) => abort(['json', ['missing property', $p.id]])
    }
).value.__decide(
    ($) => $.value,
    () => abort(['json', ['missing property', $p.id]])
)

export const String = (
    $: d_in.Value,
    abort: _pi.Abort<d_function.Error>,
) => {
    const xxx = r_astn_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(['astn', $]),
    )
    if (xxx.type[0] !== 'quoted') {
        return abort(['json', ['not a string', null]])
    }
    return xxx.value
}

