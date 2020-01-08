import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import styled from 'styled-components'
import './index.css'
import { Title, } from './components/styled'

const AppDiv = styled.div`
  background-color: navy;
  height:100%;
  background-repeat:repeat;
`

const App = () => {

  return (
    <AppDiv>
      <Title>Welcome to Barry's Beer Fridge</Title>
      <Home></Home>
    </AppDiv>

  )
}

ReactDOM.render(<App />, document.getElementById('app'))
