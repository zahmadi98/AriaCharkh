import StatusBar from "./components/StatusBar";
import Navbar from "./components/Navbar";
import Menu from "./components/menu";
import Slider from "./components/Slider";
import IconSection from "./components/miniIcons";
import AmazingOfferScroll from "./components/AmazingOfferScroll";
import Banner from './components/Banner.jsx'
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full px-20 py-2 bg-[#ED1A3B] md:bg-[#FCDEE0] h-[2.5rem] md:h-[3.688rem]"></div>
      <StatusBar />
      <Navbar />
      <Menu />
      <Slider />
      <IconSection />
      <AmazingOfferScroll />
      <Banner />
    </div>
  );
}

export default App;
