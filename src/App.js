import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/header/Navbar";
import MainPage from "./page/MainPage";
import QuestionBoard from "./component/inquiry/questionBoard";
import Step1Page from './component/consulting/step1Page';
import Step2Page from './component/consulting/step2Page';
import Step3Page from './component/consulting/step3Page';
import Step4Page from './component/consulting/step4Page';
import PersonalBoard from "./component/inquiry/personalBoard";
import MyProject from "./component/mypage/myProject";
import Myscrap from "./component/mypage/scrap";
import ShareLetterPage from './page/ShareLetterPage';
import ShareLetterComplete from './page/ShareLetterComplete';
import ShareLetterStory from './page/ShareLetterStory';
import ShareLetterSave from './page/ShareLetterSave';
import ShareLetterSend from './page/ShareLetterSend';
import ShareLetterSendComplete from './page/ShareLetterSendComplete';
import Main from "./component/main/Mainpage";
import Homeletter from "./component/sendletter/HomeLetter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/faq" element={<QuestionBoard />} />
          <Route path="/consulting/step1Page" element={<Step1Page />} />
          <Route path="/consulting/step2Page" element={<Step2Page />} />
          <Route path="/consulting/step3Page" element={<Step3Page />} />
          <Route path="/consulting/step4Page" element={<Step4Page />} />
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
          <Route path="/" element={<Main />} />
          <Route path="/homeletter" element={<Homeletter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;