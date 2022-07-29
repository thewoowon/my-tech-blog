import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import './styles.css';

type codeProps = {
    code: string;
    language:string;
  };

export default function Code({ code,language }:codeProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className='Code'>
      <pre>
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}