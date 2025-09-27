import StatusBar from "./components/StatusBar";
import Navbar from "./components/Navbar";
import Menu from "./components/menu";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full px-20 py-2 bg-[#FCDEE0] h-[3.688rem]"></div>
      <StatusBar />
      <Navbar />
      <Menu />
      <Slider />
    </div>
  );
}

export default App;
