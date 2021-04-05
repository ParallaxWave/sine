//import Highlight from 'react-highlight';
//import { Highlight } from 'react-fast-highlight';
//import hljs from 'highlight.js/lib/highlight';
//hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
import { useState } from 'react';
//import ReactAce from 'react-ace-editor';
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-dark.css"; //Example style, you can use another


export default function CodeEditor(){
  const [code, setCode] = useState('const a = 0;');
  return(
    <>
      <div
        style={{
          border: 'none',
          outline: 'none',
          overflowY: 'scroll',
          position: 'absolute',
          left: '0%',
          height: '93%',
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          background: '#282c34'
        }}
        className="w-full lg:w-3/4"
      >
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        style={{
          borderWidth: 0,
          borderColor: 'white'
        }}
        className="border-0 border-none"
      />


                <div className="lg:row-span-1 bg-green-400" style={{ 
                  background: '#3b4252', 
                  bottom: 0, 
                  position: 'absolute',
                  left: 0,
                  right: '0%',
                  height: '20%'
                  }}>
            <div className="p-2">
                Output
            </div>
          </div>



    </div>
  </>
  );
}
