import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/header/Navbar";
import Main from "./component/main/Mainpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
