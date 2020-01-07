import axios from 'axios'

const addBeer = async (beer) => {
  const res = await axios.post('/api/beers', beer)
  return res.data
}

export default addBeer
