#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/algorithms/procedures/unguaranteed/transform_lionweb_2023_1_language_to_astn"

import * as d_resources from "../implementation/algorithms/procedures/unguaranteed/transform_lionweb_2023_1_language_to_astn"

_eb.run_main_procedure(
    ($r) => {
        return procedure({
            'procedures': {
                'write file': $r.commands['write file'],
            },
            'queries': {
                'read file': $r.queries['read file']
            }
        })
    },
)
