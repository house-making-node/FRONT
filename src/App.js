import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./component/header/Navbar";
import Main from "./component/main/Mainpage";
import Homeletter from "./component/sendletter/HomeLetter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/homeletter" element={<Homeletter />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}


export default App;
