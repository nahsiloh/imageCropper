import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import CreatePage from "./pages/CreatePage/CreatePage";

function App() {
  return (
    <div className="App">
      <Header />
      <CreatePage />
    </div>
  );
}

export default App;
