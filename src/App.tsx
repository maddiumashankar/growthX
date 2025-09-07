import React from 'react'
import ElevateAnimation from './components/ElevateAnimation'
import './App.css'

function App() {
  return (
    <div className="app">
      <ElevateAnimation 
        autoplay={true}
        onAnimationComplete={() => console.log('Animation completed!')}
      />
    </div>
  )
}

export default App
