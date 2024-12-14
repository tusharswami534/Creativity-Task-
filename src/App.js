import { BrowserRouter, Routes ,Route } from 'react-router';
import './App.css';
import DayNight from './components/DayNight';
import SearchSection from './components/SearchSection';
import CardGsap from './components/CardGsap';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DayNight />} />
          <Route path="/card-gsap" element={<CardGsap/>} />
          <Route path="/search-section" element={<SearchSection/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
