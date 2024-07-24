import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/header/Navbar";
import MainPage from "./page/MainPage";
import QuestionBoard from "./component/inquiry/questionBoard";
import PersonalBoard from "./component/inquiry/personalBoard";
import MyProject from "./component/mypage/myProject";
import Myscrap from "./component/mypage/scrap";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
