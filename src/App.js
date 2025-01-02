import { BrowserRouter, Routes ,Route } from 'react-router';
import './App.css';
import DayNight from './components/DayNight';
import SearchSection from './components/SearchSection';
import CardGsap from './components/CardGsap';
import GsapSlider from './components/GsapSlider';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DayNight />} />
          <Route path="/card-gsap" element={<CardGsap/>} />
          <Route path="/search-section" element={<SearchSection/>} />
          <Route path="/gsap-slider" element={<GsapSlider/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
