#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "../implementation/manual/commands/transform_lionweb_2024_1_language_to_astn"

import * as d_resources from "../implementation/manual/commands/transform_lionweb_2024_1_language_to_astn"

_pn.run_main_procedure(
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
