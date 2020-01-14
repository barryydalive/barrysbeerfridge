import axios from 'axios'

const drinkABeer = async (beer) => {
  try {
    beer.amount--
    const { amount, } = beer
    const { data, } = await axios.put(`/api/beers/${beer.id}`, { amount, })
    return data
  } catch (err) {
    console.log(err)
  }
}

export default drinkABeer
