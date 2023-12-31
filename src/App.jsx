import React from 'react'
import SideBar from './components/SideBar'
import MainContainer from './components/MainContainer'
import Wrapper from './assets/wrappers/AppLayout'


const App = () => {
  return (
    <Wrapper>
      <SideBar/>
      <MainContainer />
    </Wrapper>
  )
}

export default App
