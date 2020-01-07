import { useState, } from 'react'

const useBeers = () => {
  const [ beers, setBeers, ] = useState([])

  return [ beers, setBeers, ]
}
export default useBeers
