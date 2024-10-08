import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/header/Navbar";
import MainPage from "./page/MainPage";
import InteriorConsultingPage from "./component/interiorconsult/InteriorConsultingPage";
import QuestionBoard from "./component/inquiry/questionBoard";
import PersonalBoard from "./component/inquiry/personalBoard";
import MyProject from "./component/mypage/myProject";
import Myscrap from "./component/mypage/scrap";
import ShareLetter from "./page/ShareLetter";
import ShareLetterPage from "./page/ShareLetterPage";
import ShareLetterComplete from "./page/ShareLetterComplete";
import ShareLetterStory from "./page/ShareLetterStory";
import ShareLetterSend from "./page/ShareLetterSend";
import ShareLetterSendComplete from "./page/ShareLetterSendComplete";
import HomeLetter from "./component/sendletter/HomeLetter";
import HomeLetterPage from "./component/sendletter/HomeLetterPage";
import HomeLetterComplete from "./component/sendletter/HomeLetterComplete";
import HomeLetterStory from "./component/sendletter/HomeLetterStory";
import HomeLetterSend from "./component/sendletter/HomeLetterSend";
import HomeLetterSendComplete from "./component/sendletter/HomeLetterSendComplete";
import Step1Page from "./component/consulting/step1Page";
import Step2Page from "./component/consulting/step2Page";
import Step3Page from "./component/consulting/step3Page";
import Step4Page from "./component/consulting/step4Page";
import ConsultLoading from "./component/consulting/consultLoading";
import GptAnswer from "./component/consulting/gptAnswer";
import KakaoLogin from "./component/interiorconsult/KakaoLogin";
import KakaoAgreement from "./component/interiorconsult/KakaoAgreement";
import KakaoWelcome from "./component/interiorconsult/KakaoWelcome";
import MemberHomeletter from "./component/sendletter/HomeLetterRegister";
import MemberShareletter from "./page/ShareLetterRegister";
import Terms from "./component/mypage/terms";
import Privacy from "./component/mypage/privacy";

const App = () => {
  const [scraps, setScraps] = useState([]);

  const addScrap = (scrap) => {
    setScraps([...scraps, scrap]);
  };

  return (
    <div className="max-w-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/consulting" element={<InteriorConsultingPage />} />
          <Route path="/faq" element={<QuestionBoard />} />
          {/* 로그인 후 새로운 컨설팅을 시작할 때 */}
          <Route path="/consulting/step1" element={<Step1Page />} />

          {/* 기존 컨설팅을 이어서 할 때 */}
          <Route
            path="/consulting/:consulting_id/step1"
            element={<Step1Page />}
          />
          <Route
            path="/consulting/:consulting_id/step2"
            element={<Step2Page />}
          />
          <Route
            path="/consulting/:consulting_id/step3"
            element={<Step3Page />}
          />
          <Route
            path="/consulting/:consulting_id/step4"
            element={<Step4Page />}
          />
          <Route
            path="/consulting/:consulting_id/consultLoading"
            element={<ConsultLoading />}
          />
          <Route
            path="/consulting/:consulting_id/gptAnswer"
            element={<GptAnswer />}
          />

          <Route path="/login" element={<KakaoLogin />} />
          <Route path="/agreement" element={<KakaoAgreement />} />
          <Route path="/welcome" element={<KakaoWelcome />} />

          <Route path="/question" element={<PersonalBoard />} />
          <Route path="/mypage" element={<MyProject />} />
          <Route path="/member-home-letter" element={<MemberHomeletter />} />
          <Route path="/member-share-letter" element={<MemberShareletter />} />
          <Route
            path="/myscrap/shareletter"
            element={<Myscrap scraps={scraps} />}
          />
          <Route
            path="/myscrap/homeletter"
            element={<Myscrap scraps={scraps} />}
          />
          <Route path="/share-letter-page" element={<ShareLetterPage />} />
          <Route path="/home-letter-page" element={<HomeLetterPage />} />
          <Route path="/shareletter" element={<ShareLetter />} />
          <Route path="/homeletter" element={<HomeLetter />} />
          <Route
            path="/share-letter-complete"
            element={<ShareLetterComplete />}
          />
          <Route
            path="/home-letter-complete"
            element={<HomeLetterComplete />}
          />
          {/* <Route
            path="/share-letter-story"
            element={<ShareLetterStory addScrap={addScrap} />}
          /> */}
          <Route
            path="/home-letter-story/:letter_id"
            element={<HomeLetterStory />}
          />
          <Route
            path="/share-letter-story/:letter_id"
            element={<ShareLetterStory />}
          />
          <Route path="/share-letter-send" element={<ShareLetterSend />} />
          <Route
            path="/share-letter-send-complete"
            element={<ShareLetterSendComplete />}
          />
          <Route path="/home-letter-send" element={<HomeLetterSend />} />
          <Route
            path="/home-letter-send-complete"
            element={<HomeLetterSendComplete />}
          />
          <Route
            path="/consulting/consultLoading"
            element={<ConsultLoading />}
          />

          <Route path="/term-of-service" element={<Terms />} />
          <Route path="/privacy-notice" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
