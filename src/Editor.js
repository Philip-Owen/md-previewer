import React from "react";
import styled from "styled-components";

function Editor({ text, setText }) {
  return (
    <EditorContainer>
      <EditorArea
        value={text}
        onChange={event => setText(event.target.value)}
      />
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
  min-width: 30%;
  padding: 20px;
  display: flex;
  align-items: center;
`;
const EditorArea = styled.textarea`
  font-size: 18px;
  resize: none;
  height: 80vh;
  width: 100%;
  outline: none;
  border: 2px solid black;
  padding: 0 10px;
`;

export default Editor;
