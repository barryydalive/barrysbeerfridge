import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
const App = () => {

  return (
    <div>
      <h1>Welcome to Barry's Beer Fridge</h1>
      <Home></Home>
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('app'))
