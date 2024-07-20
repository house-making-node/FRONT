import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/header/Navbar";
import MainPage from "./page/MainPage";
import QuestionBoard from "./component/inquiry/questionBoard";
import ShareLetterPage from './page/ShareLetterPage';
// import ShareLetterComplete from './page/ShareLetterComplete';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/faq" element={<QuestionBoard />} />
          <Route path="/shareletter" element={<ShareLetterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;