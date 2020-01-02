import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import AddABeer from './components/AddABeer'
const App = () => {

  return (
    <div>
      <h1>Welcome to Barry's Beer Fridge</h1>
      <Home></Home>
      <AddABeer />
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('app'))
