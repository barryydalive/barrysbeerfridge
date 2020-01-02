import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import BeerListItem from './BeerListItem'

const Home = () => {
  const [ beers, setBeers, ] = useState([])

  useEffect(() => {
    const getBeers = async () => {
      const res = await axios.get('/api/beers')
      setBeers(res.data)
    }
    getBeers()
  }, [])

  return (
    <ol>
      {beers.map(beer =>
        <BeerListItem key={beer.name} beer={beer} />
      )}
    </ol>
  )

}

export default Home
