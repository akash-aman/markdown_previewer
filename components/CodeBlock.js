import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// scss is written in main 
import Mermaid from './Mermaid'

const CodeBlock = ({ node, inline, className, children, ...props }) => {

    const match = /language-(\w+)/.exec(className || '')
    //const language = className.replace(/language-/, "")
    return !inline && match ? (
        match[1] == "mmd"
            ? <Mermaid
                data={children[0]}/>
            : <SyntaxHighlighter 
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                PreTag="div"
                {...props}
            />
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    )
}

export default CodeBlock;

