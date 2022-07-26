import Highlight, { defaultProps } from "prism-react-renderer";
import { ReactNode } from "react";

type HighLightProps = {
    children: React.ReactNode;
  };


const SyntaxHighlighter = ({ children }:HighLightProps):JSX.Element => {
  const code = children?.toString();

  if(!code){
    return <div></div>;
  }
  return (
    <Highlight {...defaultProps} code={code} language={"javascript"}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.slice(0, -1).map((line, i) => (
            <div {...getLineProps({ line, key: i })} key={i}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} key={key}/>
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default SyntaxHighlighter;