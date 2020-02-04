import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import styled from 'styled-components'
import './index.css'
import { Title, } from './components/styled'
import { screen, secondary, } from './components/styled/colors'

import { createGlobalStyle, } from 'styled-components'
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
  a{
    text-decoration:none;
  }
`

const AppDiv = styled.div`
  background-color: ${secondary};
  min-height:100vh;
  background-repeat:repeat;
`

const App = () => {

  return (
    <AppDiv>
      <GlobalStyles />
      <Home></Home>
    </AppDiv>

  )
}

ReactDOM.render(<App />, document.getElementById('app'))
