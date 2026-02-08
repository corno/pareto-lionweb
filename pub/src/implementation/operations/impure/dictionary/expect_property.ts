import * as _pi from 'pareto-core/dist/interface'

import { Refinement_Error } from "../../../../interface/to_be_generated/refinement_error"

export const $$ = <T>(
    props: _pi.Dictionary<T>,
    prop_name: string,
    path: string,
    abort: _pi.Abort<Refinement_Error>
): T => props.__get_entry_deprecated(
    prop_name,
    {
        no_such_entry: () => abort(['missing property', { 'property': prop_name, 'path': path }])
    }
)