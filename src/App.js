import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import DayNight from "./components/DayNight";
import SearchSection from "./components/SearchSection";
import CardGsap from "./components/CardGsap";
import GsapSlider from "./components/GsapSlider";
import ToggleButton from "./components/ToggleButton";
import GsapCardAnimations from "./components/GsapCardAnimations";
import BallAnimation from "./components/BallAnimation";
import Cards from "./components/Cards";
import Roadmap from "./view/Roadmap";
import BackToTop from "./components/BackToTop";
import JumpingBallOnStick from "./components/JumpingBallOnStick";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DayNight />} />
          <Route path="/card-gsap" element={<CardGsap />} />
          <Route path="/search-section" element={<SearchSection />} />
          <Route path="/gsap-slider" element={<GsapSlider />} />
          <Route path="/gsap-roadmap" element={<Roadmap />} />
          <Route path="/toggle-btn" element={<ToggleButton />} />
          <Route
            path="/gsap-card-animations"
            element={<GsapCardAnimations />}
          />
          <Route path="/ball-animations" element={<BallAnimation />} />
          <Route path="/card" element={<Cards />} />
          <Route path="/back-to-top" element={<BackToTop />} />
          <Route path="/jump-ball-on-stick" element={<JumpingBallOnStick />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
