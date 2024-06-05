import React from 'react'

import Article from './components/article/Article'
import Brand from './components/brand/Brand'
import Cta from './components/cta/Cta'
import Feature from './components/feature/Feature'
import Navbar from './components/navbar/Navbar'
import Blog from './container/blog/Blog'
import Features from './container/features/Features'
import Footer from './container/footer/Footer'
import Header from './container/header/Header'
import Possibility from './container/possibility/Possibility'
import WhatGPT3 from './container/whatGPT3/WhatGPT3'
const App = () => {
  return (
    <div>
      <Article/>
      <Brand/>
      <Cta/>
      <Feature/>
      <Navbar/>

      <Blog/>
      <Features/>
      <Footer/>
      <Header/>
      <Possibility/>
      <WhatGPT3/>

    </div>
  )
}

export default App
