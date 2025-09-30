import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ اضافه شد
import StatusBar from "./components/StatusBar";
import Navbar from "./components/Navbar";
import Menu from "./components/menu";
import Slider from "./components/Slider";
import IconSection from "./components/miniIcons";
import AmazingOfferScroll from "./components/AmazingOfferScroll";
import Banner from './components/Banner.jsx';
import BigIcons from './components/BigIcons.jsx';

function AboutPage() {
  return <div className="p-10 text-xl">این صفحه درباره ما است</div>;
}
function ContactPage() {
  return <div className="p-10 text-xl">این صفحه تماس با ما است</div>;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <div className="w-full px-20 py-2 bg-[#ED1A3B] md:bg-[#FCDEE0] h-[2.5rem] md:h-[3.688rem]"></div>
        <StatusBar />
        <Navbar />
        <Menu />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <IconSection />
                <AmazingOfferScroll />
                <Banner />
                <BigIcons />
                <Banner />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />   
          <Route path="/contact" element={<ContactPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
