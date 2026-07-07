#!/usr/bin/env -S node --enable-source-maps

import * as p_h from 'pareto-host-nodejs/index'

import * as rs_filesystem_unrestricted from "pareto-resource-filesystem-unrestricted/index"
import * as rs_stream from "pareto-resource-stream/index"

import { $$ as procedure } from "lib/implementation/manual/commands/transform_lionweb_2024_1_language_to_astn"

p_h.run_main_command(
    () => {
        return procedure(
            null,
            {
                'read file': rs_filesystem_unrestricted.$.queries['read file']
            },
            {
                'write file': rs_filesystem_unrestricted.$.commands['write file'],
                'log error': rs_stream.$.commands['log error'],
            },
        )
    },
)
