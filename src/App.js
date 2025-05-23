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
import CreativeMenuNavigation from "./components/CreativeMenuNavigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DynamicDropDown from "./components/DynamicDropDown";
import SeesawToggle from "./components/SeesawToggle";
import DynamicInputAnimation from "./components/DynamicInputAnimation";
import ScrollEffect from "./components/ScrollEffect";
import ClickableImage from "./components/ClickableImage";

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
          <Route path="/dynamic-dropdown" element={<DynamicDropDown />} />
          <Route
            path="/creative-navigation"
            element={<CreativeMenuNavigation />}
          />
          <Route path="/seesaw-toggle" element={<SeesawToggle />} />
          <Route
            path="/dynamic-input-animation"
            element={<DynamicInputAnimation />}
          />
          <Route path="/scroll-effect" element={<ScrollEffect />} />
          <Route path="/clickable-image" element={<ClickableImage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
