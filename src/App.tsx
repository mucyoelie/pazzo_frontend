
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CcsProduct from "./pages/CcsProduct";
import Hero from "./pages/Hero";
import OpenupsProduct from "./pages/OpenupsProduct";
import LogsProduct from "./pages/LogsProduct";
//import Hero from "./pages/Hero";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-Manrope">
      {/* Render Navbar at the top */}
       <Router>
        <Navbar />
      <div className="w-full h-full overflow-x-hidden font-raleway">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/open-ups-product" element={<OpenupsProduct/>}/>
          <Route path="/ccs-product" element={<CcsProduct/>}/>
          <Route path="/logs-product" element={<LogsProduct/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
    </div>
  );
}
export default App;

