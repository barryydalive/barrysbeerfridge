import React, { useEffect, useState, } from 'react'
import axios from 'axios'
import BeerListItem from './BeerListItem'
import useBeers from '../hooks/useBeers'
import { BeerContext, FridgeContext, } from '../context'
import { Fridge, Nav, Title, NavItem, NavText, NavLeft, NavRight, NavCenter, NavImage, } from './styled'

import { HashRouter as Router, Switch, Route, Link, } from 'react-router-dom'
import Search from './Search'
import SingleBeerModal from './SingleBeerModal'
import { Content, } from './styled/Content'

const Home = () => {
  // const [ beers, setBeers, ] = useState([])
  const [ beers, setBeers, ] = useBeers()
  const [ selectedBeer, setSelectedBeer, ] = useState({})
  const [ modalOpen, setModalOpen, ] = useState(false)

  useEffect(() => {
    const getBeers = async () => {
      const res = await axios.get('/api/beers')
      setBeers(res.data)
    }
    getBeers()
  }, [ setBeers, ])
  console.log('setModal:', modalOpen)
  return (
    <Router>
      <BeerContext.Provider value={{ beers,
        setBeers, }}>

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
          <Content>

            <Switch>

              <Route exact path='/'>
                <FridgeContext.Provider value={{ modalOpen,
                  setModalOpen,
                  selectedBeer,
                  setSelectedBeer, }}>
                  <Fridge>
                    {beers.map(beer =>
                      <BeerListItem
                        key={beer.name}
                        beer={beer}
                        onClick={() => { setModalOpen(true); setSelectedBeer(beer) }}
                      />

                    )}
                  </Fridge>
                  <SingleBeerModal setModalOpen={setModalOpen} modalOpen={modalOpen} beer={selectedBeer} />
                </FridgeContext.Provider>
              </Route>
              <Route exact path='/search' component={Search} />
              <Route>Oops wrong link!</Route>
            </Switch>
          </Content>

        </div>
      </BeerContext.Provider>
    </Router>
  )

}

export default Home
