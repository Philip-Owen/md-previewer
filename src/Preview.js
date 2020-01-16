import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

function Preview({ text }) {
  return (
    <PreviewContainer>
      <ReactMarkdown className="markdown" source={text} />
    </PreviewContainer>
  );
}

const PreviewContainer = styled.div`
  min-width: 70%;
  padding: 20px;
  display: flex;
  align-items: center;
  .markdown {
    outline: 2px solid black;
    height: 80vh;
    width: 100%;
    padding: 0 10px;
    white-space: pre-wrap;
    overflow-y: scroll;
  }
  pre,
  code {
    background-color: lightgray;
  }
  pre {
    padding: 5px;
    width: fit-content;
  }
`;

export default Preview;
