import React from 'react';
import "./styles/App.scss"
import Navbar from "./components/UI/Navbar/Navbar";
import Main from "./pages/Main/Main";

function App() {
    return (
        <div>
          <Navbar/>
          <Main/>
        </div>
  );
}

export default App;
