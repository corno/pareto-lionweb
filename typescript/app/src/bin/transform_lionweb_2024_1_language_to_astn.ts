#!/usr/bin/env -S node --enable-source-maps

import * as p_h from 'pareto-host-nodejs/index'

import { $$ as procedure } from "lib/implementation/manual/commands/transform_lionweb_2024_1_language_to_astn"

p_h.run_main_command(
    ($r) => {
        return procedure(
            null,
            {
                'read file': $r['filesystem unrestricted'].queries['read file']
            },
            {
                'write file': $r['filesystem unrestricted'].commands['write file'],
                'log error': $r.stream.commands['log error'],
            },
        )
    },
)
