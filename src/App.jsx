import React from 'react'
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
import GamesSection from './components/GamesSection';
import GamePreview from './components/GamePreview';
import LinksSection from './components/LinksSection'

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
          <GamesSection />
          <GamePreview />
          <LinksSection />
        </ScrollableWrapper>
      </main>

    </>



  )
}

export default App