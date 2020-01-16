import React from "react";
import styled from "styled-components";

function Header({ toggleEditor, toggleRaw, setToggleEditor, setToggleRaw }) {
  return (
    <HeaderContainer>
      <h1>Markdown Editor</h1>
      <div>
        <Button onClick={() => setToggleEditor(!toggleEditor)}>
          {!toggleEditor ? "Hide Editor" : "Show Editor"}
        </Button>
      </div>
      <div>
        <Button onClick={() => setToggleRaw(!toggleRaw)}>
          {!toggleRaw ? "View Raw Text" : "View Markdown"}
        </Button>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  padding: 0 10px;
  align-items: center;
  * {
    padding-left: 10px;
  }
`;

const Button = styled.h3`
  text-decoration: underline;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

export default Header;
