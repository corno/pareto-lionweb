#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "lib/dist/implementation/manual/commands/transform_lionweb_2024_1_language_to_astn"

_pn.run_main_command(
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
