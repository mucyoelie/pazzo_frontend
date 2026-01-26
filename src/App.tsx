
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CcsProduct from "./pages/CcsProduct";
import OpenupsProduct from "./pages/OpenupsProduct";
import LogsProduct from "./pages/LogsProduct";
//import Hero from "./pages/Hero";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      {/* Render Navbar at the top */}
       <Router>
        <Navbar />
      <div className="w-full h-full overflow-x-hidden font-raleway">
        <Routes>
          <Route path="/" element={<OpenupsProduct />} />
          <Route path="/open-ups-product" element={<OpenupsProduct/>}/>
          <Route path="/ccs-product" element={<CcsProduct/>}/>
          <Route path="/logs-product" element={<LogsProduct/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  );
}
export default App;

