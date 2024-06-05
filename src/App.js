import React from 'react'

import Article from './components/article/Article'
import Brand from './components/brand/Brand'
import Cta from './components/cta/Cta'
import Feature from './components/feature/Feature'
import Navbar from './components/navbar/Navbar'
const App = () => {
  return (
    <div>
      <Article/>
      <Brand/>
      <Cta/>
      <Feature/>
      <Navbar/>
    </div>
  )
}

export default App
