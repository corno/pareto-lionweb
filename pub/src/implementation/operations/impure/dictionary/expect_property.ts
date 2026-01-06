import * as _pi from 'pareto-core-interface'

import { Refinement_Error } from "../../../../interface/to_be_generated/refinement_error"

export const $$ = <T>(
    props: _pi.Dictionary<T>,
    prop_name: string,
    path: string,
    abort: _pi.Abort<Refinement_Error>
): T => props.__get_possible_entry(prop_name).transform(
    ($) => $,
    () => abort(['missing property', { 'property': prop_name, 'path': path }])
)