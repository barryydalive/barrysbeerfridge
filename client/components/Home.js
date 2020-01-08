import React, { useEffect, } from 'react'
import axios from 'axios'
import BeerListItem from './BeerListItem'
import useBeers from '../hooks/useBeers'
import { BeerContext, } from '../context'
import { Fridge, } from './styled'

import { HashRouter as Router, Switch, Route, Link, } from 'react-router-dom'
import Search from './Search'

const Home = () => {
  // const [ beers, setBeers, ] = useState([])
  const [ beers, setBeers, ] = useBeers()
  console.log('beers:', beers)
  useEffect(() => {
    const getBeers = async () => {
      const res = await axios.get('/api/beers')
      setBeers(res.data)
    }
    getBeers()
  }, [ setBeers, ])

  return (
    <Router>
      <BeerContext.Provider value={{ beers, setBeers, }}>

        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'> Home</Link>
              </li>
              <li>
                <Link to='/search'>Search</Link>
              </li>
            </ul>
          </nav>

          <Switch>

            <Route exact path='/'>
              <Fridge>
                {beers.map(beer =>
                  <BeerListItem key={beer.name} beer={beer} />
                )}
              </Fridge>
              {/* Manual Component to Add A Beer Removed */}
            </Route>
            <Route exact path='/search' component={Search} />
            <Route>Oops wrong link!</Route>
          </Switch>

        </div>
      </BeerContext.Provider>
    </Router>
  )

}

export default Home
