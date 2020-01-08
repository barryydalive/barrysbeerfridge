import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import styled from 'styled-components'
import './index.css'

const AppDiv = styled.div`
  background-color: navy;
  height:100vh;
  background-size:cover;
  background-repeat:repeat;
`

const App = () => {

  return (
    <AppDiv>
      <h1>Welcome to Barry's Beer Fridge</h1>
      <Home></Home>
    </AppDiv>

  )
}

ReactDOM.render(<App />, document.getElementById('app'))
