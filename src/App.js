import React, { useState } from "react";

import Header from "./Header";
import PreviewEditor from "./MarkdownEditor";

function App() {
  const [toggleEditor, setToggleEditor] = useState(false);
  const [toggleRaw, setToggleRaw] = useState(false);

  return (
    <div className="App">
      <Header
        toggleEditor={toggleEditor}
        setToggleEditor={setToggleEditor}
        toggleRaw={toggleRaw}
        setToggleRaw={setToggleRaw}
      />
      <PreviewEditor toggleEditor={toggleEditor} toggleRaw={toggleRaw} />
    </div>
  );
}

export default App;
