//-----------------------------------------------------
// SANATIZATION DEFAULT SCHEMA IS MODIFIED TO SUPPORT :
//  <I>     RehypeKatex & Remark Katex
//  <II>    RehypePrism ( ReactSyntaxHighlighter )
//-----------------------------------------------------


import { sanitize as hastUtilSanitize } from 'hast-util-sanitize'

/**
 * Plugin to sanitize HTML.
 *
 * @type {import('unified').Plugin<[Options?] | Array<void>, Root, Root>}
 */

const defaultSchema = {
    strip: ['script','input'],
    clobberPrefix: 'user-content-',
    clobber: ['name', 'id'],
    ancestors: {
        tbody: ['table'],
        tfoot: ['table'],
        thead: ['table'],
        td: ['table'],
        th: ['table'],
        tr: ['table']
    },
    protocols: {
        href: ['http', 'https', 'mailto', 'xmpp', 'irc', 'ircs'],
        cite: ['http', 'https'],
        src: ['http', 'https'],
        longDesc: ['http', 'https']
    },
    tagNames: [
        'h1', 'h2', 'h3', 'h4',
        'h5', 'h6', 'br', 'b',
        'i', 'strong', 'em', 'a',
        'pre', 'code', 'img', 'tt',
        'div', 'ins', 'del', 'sup',
        'sub', 'p', 'ol', 'ul',
        'table', 'thead', 'tbody', 'tfoot',
        'blockquote', 'dl', 'dt', 'dd',
        'kbd', 'q', 'samp', 'var',
        'hr', 'ruby', 'rt', 'rp',
        'li', 'tr', 'td', 'th',
        's', 'strike', 'summary', 'details',
        'caption', 'figure', 'figcaption', 'abbr',
        'bdo', 'cite', 'dfn', 'mark',
        'small', 'span', 'time', 'wbr',
        'input', 'multicode','svg','path'
    ],
    attributes: {
        a: ['href'],
        img: ['src', 'longDesc'],
        input: [[Array], [Array]],
        li: [[Array]],
        div: ['itemScope', 'itemType', 'className', 'math', 'math-display'],
        span: ['className', 'math', 'math-inline'],
        code: ['className', 'language-js', 'language-css', 'language-md'],
        blockquote: ['cite'],
        del: ['cite'],
        ins: ['cite'],
        q: ['cite'],
        '*': [
            'abbr', 'accept', 'acceptCharset', 'accessKey',
            'action', 'align', 'alt', 'ariaDescribedBy',
            'ariaHidden', 'ariaLabel', 'ariaLabelledBy', 'axis',
            'border', 'cellPadding', 'cellSpacing', 'char',
            'charOff', 'charSet', 'checked', 'clear',
            'cols', 'colSpan', 'color', 'compact',
            'coords', 'dateTime', 'dir', 'disabled',
            'encType', 'htmlFor', 'frame', 'headers',
            'height', 'hrefLang', 'hSpace', 'isMap',
            'id', 'label', 'lang', 'maxLength',
            'media', 'method', 'multiple', 'name',
            'noHref', 'noShade', 'noWrap', 'open',
            'prompt', 'readOnly', 'rel', 'rev',
            'rows', 'rowSpan', 'rules', 'scope',
            'selected', 'shape', 'size', 'span',
            'start', 'summary', 'tabIndex', 'target',
            'title', 'type', 'useMap', 'vAlign',
            'value', 'vSpace', 'width', 'itemProp', 'style', 'd', 'viewBox', 'preserveAspectRatio','xmlns'
        ]
    },
    required: { input: { type: 'checkbox', disabled: true } }


}

export default function rehypeSanitize(options = defaultSchema) {
    // @ts-expect-error: assume input `root` matches output root.
    return (tree) => hastUtilSanitize(tree, options)
}

export { defaultSchema } from 'hast-util-sanitize'