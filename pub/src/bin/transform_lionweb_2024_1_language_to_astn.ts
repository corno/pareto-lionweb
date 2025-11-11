#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/algorithms/procedures/unguaranteed/transform_lionweb_2024_1_language_to_astn"

import * as d_resources from "../implementation/algorithms/procedures/unguaranteed/transform_lionweb_2024_1_language_to_astn"

_eb.run_unguaranteed_main_procedure<d_resources.Resources>(
    ($r) => {
        return {
            'procedures': {
                'write file': $r.procedures['write file'],
            },
            'queries': {
                'read file': $r.queries['read file']
            }
        }
    },
    procedure
)
