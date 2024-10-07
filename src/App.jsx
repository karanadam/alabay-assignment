import React from 'react'
import LandingPage from './components/LandingPage'
import ScrollableWrapper from './components/ScrollableWrapper'
import HistorySection from './components/HistorySection'

const App = () => {
  return (
    <>
      <LandingPage />
      <ScrollableWrapper>
        <HistorySection />
      </ScrollableWrapper>
    </>

  )
}

export default App