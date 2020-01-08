import axios from 'axios'

export default async (untappdId) => {

  try {
    const res = await axios.get(`/api/untappd/${untappdId}`)
    const beer = res.data
    const newImg = beer.beer_label_hd
    return newImg
  } catch (err) {
    console.log(err)
  }
}
