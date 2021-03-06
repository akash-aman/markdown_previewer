import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Editor from "@monaco-editor/react";
import oceanicNext from 'monaco-themes/themes/Oceanic Next.json'
//------------------------------------------------------------------------
// Added necessary plugins : 
//  - remarkGfm for github markdown flavour
//  - rehypeRaw for support of fully custom component mapping
//  - remarkMath & rehypeKatex for maths expression support
//  - we also have support for mermaid with code component
//------------------------------------------------------------------------
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import remarkMath from 'remark-math'       //'../plugins/remarkMath'
import rehypeKatex from 'rehype-katex'     //'../plugins/rehypeKatex'
//------------------------------------------------------------------------
// Options were not working with already existing plugins
// So modified and used with custom options provided by dependency plugin 
//------------------------------------------------------------------------
import remarkToc from '../plugins/remarkToc'
import rehypeSanitize from '../plugins/rehypeSanitize'
//------------------------------------------------------------------------
// Supported fully custom component with mapping
// Also supports mapping to existing component
//--------------------------------------------------------- 
import MultiCode from '../components/MultiCode'
import CodeBlock from '../components/CodeBlock'

import data from '../data/data'
import { defineTheme } from '../plugins/theme';
import SEO from '../components/SEO';



const Index = () => {

  const [markdownText, setMarkdownText] = React.useState(data.data)
  const component = {
    multicode: MultiCode,
    code: CodeBlock
  }

  const [theme, setTheme] = useState()

  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  return (

    <><SEO />
      <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          margin: "0 2rem 0 2rem",
        }}
      >
        <div className="textarea">
          <Editor
            height="85vh"
            width={`100%`}


            spellCheck="false"
            language={"markdown"}
            value={markdownText}
            theme={"oceanic-next"}
            defaultValue="// some comment"
            onChange={(e) => e ? setMarkdownText(e) : null}
          />
        </div>
        <div className='render'>
          <ReactMarkdown

            children={markdownText}
            components={component}

            remarkPlugins={[remarkMath, remarkToc, remarkGfm]}
            rehypePlugins={[rehypeKatex, rehypeSlug, rehypeRaw, rehypeSanitize]}

          />
        </div>
      </div>
    </>
  )
}

export default Index
