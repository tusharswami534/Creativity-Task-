import { BrowserRouter, Routes ,Route } from 'react-router';
import './App.css';
import DayNight from './components/DayNight';
import SearchSection from './components/SearchSection';
import CardGsap from './components/CardGsap';
import GsapSlider from './components/GsapSlider';
import GsapRoadMap from './components/GsapRoadMap';
import ToggleButton from './components/ToggleButton';
import GsapCardAnimations from './components/GsapCardAnimations';
import BallAnimation from './components/BallAnimation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DayNight />} />
          <Route path="/card-gsap" element={<CardGsap/>} />
          <Route path="/search-section" element={<SearchSection/>} />
          <Route path="/gsap-slider" element={<GsapSlider/>} />
          <Route path="/gsap-roadmap" element={<GsapRoadMap/>} />
          <Route path="/toggle-btn" element={<ToggleButton/>} />
          <Route path="/gsap-card-animations" element={<GsapCardAnimations/>} />
          <Route path="/ball-animations" element={<BallAnimation/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
