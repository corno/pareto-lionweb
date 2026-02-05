import * as _pdev from 'pareto-core-dev'

import * as unmarshall_json from "./refinement"

import * as d_loc from "pareto-resources/dist/interface/generated/liana/schemas/list_of_characters/data"

// export const temp_json_unmarshall_should_be_done_extenally = ($: string) => {
//     return unmarshall_json.Serialization_Chunk(
//         temp_erd.parse_json($),
//         {
//             'expect_array': temp_erd.expect_array,
//             'expect_optional_null': temp_erd.expect_optional_null,
//             'expect_property': temp_erd.expect_property,
//             'expect_text': temp_erd.expect_text,
//             'expect_verbose_type': temp_erd.expect_verbose_type,
//         }
//     )

// }

export const temp_json_unmarshall_should_be_done_extenally = ($: d_loc.List_of_Characters) => _pdev.implement_me(`JSON unmarshall should be done externally`)