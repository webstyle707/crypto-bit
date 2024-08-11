import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
  return (
   <div>
    <div className="sticky top-0">
      <Header/>
    </div>
    <div>
      <Outlet/>
    </div>
    <div className="">
      <Footer/>
    </div>
   </div>
  );
}

export default App;
