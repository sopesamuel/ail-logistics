import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Track from "./pages/Track";
import whatsapp from "./assets/images/whatsapp-logo.png"
import ScrollToTop from "./pages/Top";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
        {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/track-order" element={<Track />} />
  
          {/* PrivateRoutes */}
        </Routes>
      </ScrollToTop>
      <div class="fixed-bottom right-100 p-10 " style={{zIndex: "6", left: "initial", marginRight: 60, marginBottom: 60, filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.5)"}}>
      <a href="https://wa.me/+2348038763125?text=Hello, AIL Logistics. Are you available today?" target="_blank">
        <img src={whatsapp} width="80" alt="aaa" />
      </a>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
