import axios from 'axios'

const deleteBeer = async(beer) => {
  const { id, } = beer
  await axios.delete(`/api/beers/${id}`)
}

export default deleteBeer
