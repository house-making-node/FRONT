import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/header/Navbar";
import Main1 from "./component/main/main1";
import Main2 from "./component/main/main2";
import Main3 from "./component/main/main3";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Main1 />
        <Main2 />
        <Main3 />
      </BrowserRouter>
    </div>
  );
}

export default App;
