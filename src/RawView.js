import React from "react";
import styled from "styled-components";

function RawView({ text }) {
  return (
    <RawContainer>
      <div className="raw">
        <pre>{text}</pre>
      </div>
    </RawContainer>
  );
}

const RawContainer = styled.div`
  min-width: 70%;
  padding: 20px;
  display: flex;
  align-items: center;
  .raw {
    outline: 2px solid black;
    height: 80vh;
    width: 100%;
    padding: 0 10px;
    white-space: pre-wrap;
    overflow-y: scroll;
  }
`;

export default RawView;
