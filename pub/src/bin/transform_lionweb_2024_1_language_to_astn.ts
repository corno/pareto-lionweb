#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/algorithms/procedures/unguaranteed/transform_lionweb_2024_1_language_to_astn"

import * as d_resources from "../implementation/algorithms/procedures/unguaranteed/transform_lionweb_2024_1_language_to_astn"

_eb.run_main_procedure(
    ($r) => {
        return procedure(
            {
                'write file': $r.commands['write file'],
            },
            {
                'read file': $r.queries['read file']
            },
        )
    },
)
