import ProfileImage from "./ProfileImage";
import NavBar from "./NavBar";
import Content from "./Content";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="divide-y divide-blue-700 divide-opacity-50">
        <div className="container mx-auto w-1/2">
          <ProfileImage />
          <NavBar />
        </div>
        <div className="w-full">
          <Content />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
