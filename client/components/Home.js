import React, { useEffect, } from 'react'
import axios from 'axios'
import BeerListItem from './BeerListItem'
import useBeers from '../hooks/useBeers'
import { BeerContext, } from '../context'
import AddABeer from './AddABeer'
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
    <BeerContext.Provider value={{ beers, setBeers, }}>
      <ol>
        {beers.map(beer =>
          <BeerListItem key={beer.name} beer={beer} />
        )}
      </ol>
      <AddABeer />

    </BeerContext.Provider>
  )

}

export default Home
