import React, { useEffect, } from 'react'
import axios from 'axios'
import BeerListItem from './BeerListItem'
import useBeers from '../hooks/useBeers'
import { BeerContext, } from '../context'
import { Fridge, Nav, Title, NavItem, NavText, NavLeft, NavRight, NavCenter, NavImage, } from './styled'

import { HashRouter as Router, Switch, Route, Link, } from 'react-router-dom'
import Search from './Search'

const Home = () => {
  // const [ beers, setBeers, ] = useState([])
  const [ beers, setBeers, ] = useBeers()
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
          <Nav>

            <NavLeft>
              <Link to='/'><NavImage src={'/memoji.png'} /></Link>
            </NavLeft>

            <NavCenter>
              <Title>Welcome to Barry's Beer Fridge</Title>
            </NavCenter>

            <NavRight>
              <NavItem>
                <Link to='/search'><NavText>Add a Beer</NavText></Link>
              </NavItem>
            </NavRight>

          </Nav>

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
