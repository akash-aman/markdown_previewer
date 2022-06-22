//-----------------------------------------------------
// PREFIX IS ADDDED IN OPTIONS TO AVOID VULNERABILITY :
//  <I>   'user-content-'
//-----------------------------------------------------

import { toc } from 'mdast-util-toc'

/**
 * Plugin to generate a Table of Contents (TOC).
 *
 * @type {import('unified').Plugin<[Options?]|void[], Root>}
 */
export default function remarkToc(options = { prefix: 'user-content-'}) {
    return (node) => {
        const result = toc(
            node,
            Object.assign({}, options, {
                heading: options.heading || 'toc|table[ -]of[ -]contents?'
            })
        )

        if (
            result.endIndex === null ||
            result.index === null ||
            result.index === -1 ||
            !result.map
        ) {
            return
        }

        node.children = [
            ...node.children.slice(0, result.index),
            result.map,
            ...node.children.slice(result.endIndex)
        ]
    }
}