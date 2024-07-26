import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/header/Navbar";
import MainPage from "./page/MainPage";
import QuestionBoard from "./component/inquiry/questionBoard";
import Step1Page from './component/consulting/step1Page';
import Step2Page from './component/consulting/step2Page';
import Step3Page from './component/consulting/step3Page';
import Step4Page from './component/consulting/step4Page';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
