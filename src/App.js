import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/header/Navbar";
import MainPage from "./page/MainPage";
import QuestionBoard from "./component/inquiry/questionBoard";
import PersonalBoard from "./component/inquiry/personalBoard";
import MyProject from "./component/mypage/myProject";
import Myscrap from "./component/mypage/scrap";
import ShareLetterPage from './page/ShareLetterPage';
import ShareLetterComplete from './page/ShareLetterComplete';
import ShareLetterStory from './page/ShareLetterStory';
import ShareLetterSave from './page/ShareLetterSave';
import ShareLetterSend from './page/ShareLetterSend';
import ShareLetterSendComplete from './page/ShareLetterSendComplete';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/faq" element={<QuestionBoard />} />
          <Route path="/question" element={<PersonalBoard />} />
          <Route path="/mypage" element={<MyProject />} />
          <Route path="/myscrap/homeletter" element={<Myscrap />} />
          <Route path="/myscrap/shareletter" element={<Myscrap />} />
          <Route path="/shareletter" element={<ShareLetterPage />} />
          <Route path="/share-letter-complete" element={<ShareLetterComplete />} />
          <Route path="/share-letter-story" element={<ShareLetterStory />} />
          <Route path="/share-letter-send" element={<ShareLetterSend />} />
          <Route path="/share-letter-save" element={<ShareLetterSave />} />
          <Route path="/share-letter-send-complete" element={<ShareLetterSendComplete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;