import React from 'react'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LandingPage from './components/LandingPage'
import ScrollableWrapper from './components/ScrollableWrapper'
import HistorySection from './components/HistorySection'
import GallaryCarousel from './components/GallaryCarousel'
import Vision from './components/Vision';
import Wrapper from './components/Wrapper';
import Roadmap from './components/Roadmap';
import RoadmapCards from './components/RoadmapCards';
import TokenomicsSection from './components/TokenomicsSection';
import Merchandise from './components/Merchandise';

const App = () => {


  return (
    <>
      <main>
        <LandingPage />
        <ScrollableWrapper>
          <HistorySection />
          {/* <GallaryCarousel />  needs work */}
          <Wrapper >
            <Vision />
            <Roadmap />
          </Wrapper>
          <RoadmapCards />
          <TokenomicsSection />
          <Merchandise />
        </ScrollableWrapper>
      </main>

    </>



  )
}

export default App