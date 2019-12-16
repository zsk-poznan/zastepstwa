import React from "react";

import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div style={{ maxWidth: "500px" }}>
          <Button>Test</Button>
          <Button>Test</Button>
          <Button>Test</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
