import React, { useState } from "react";

import styled from "styled-components";

import Editor from "./Editor";
import Preview from "./Preview";
import RawView from "./RawView";

function MarkdownEditor({ toggleEditor, toggleRaw }) {
  const [text, setText] = useState("# Type your Markdown here...");
  return (
    <div>
      <Container toggleEditor={toggleEditor}>
        {!toggleEditor ? <Editor text={text} setText={setText} /> : null}
        {!toggleRaw ? <Preview text={text} /> : <RawView text={text} />}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  ${props => (props.toggleEditor ? "justify-content: center" : null)}
`;

export default MarkdownEditor;
