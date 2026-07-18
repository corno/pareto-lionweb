import * as p_ from 'pareto-core/implementation/transformer'

import * as s_in from "../../../schemas/unexpected_content.js"
import * as s_out from "../../../schemas/paragraph.js"

import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"

export const Error: p_.Transformer<s_in.Error, s_out.Phrase> = ($) => sh.ph.composed([
    sh.ph.text("unexpected content:"),
    sh.ph.indent(
        sh.pg.sentences([
            sh.sentence([
                sh.ph.text("containments:"),
                Unexpected_Content($.containments, { 'classifier': $.node.classifier })
            ]),
            sh.sentence([
                sh.ph.text("properties:"),
                Unexpected_Content($.properties, { 'classifier': $.node.classifier })
            ]),
            sh.sentence([
                sh.ph.text("references:"),
                Unexpected_Content($.references, { 'classifier': $.node.classifier })
            ]),
        ])
    )
])


export const Unexpected_Content = (
    $: s_in.Unexpected_Content,
    $p: {
        'classifier': string
    }
): s_out.Phrase => p_.from.dictionary($.unexpected).on_has_entries(
    ($) => sh.ph.indent(
        sh.pg.sentences([
            sh.sentence([
                sh.ph.text("the following features are unexpected for '" + $p.classifier + "':"),
                sh.ph.indent(
                    sh.pg.sentences(p_.from.dictionary($).convert_to_list(
                        ($, id) => sh.sentence([
                            sh.ph.text("- "),
                            sh.ph.text(id),
                        ]))),
                )
            ])
        ]),
    ),
    () => sh.ph.nothing()

)