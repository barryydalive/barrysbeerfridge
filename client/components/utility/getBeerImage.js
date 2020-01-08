import axios from 'axios'

const CLIENTID = process.env.CLIENTID
const CLIENT_SECRET = process.env.CLIENT_SECRET

export default async (untappdId) => {
  try {
    const res = await axios.get(`https://api.untappd.com/v4/beer/info/${untappdId}?client_id=${CLIENTID}&client_secret=${CLIENT_SECRET}`)
    const { beer, } = res.data.response
    console.log('res.data:', res.data.response)
    const newImg = beer.beer_label_hd
    console.log('newImg:', typeof newImg)
    return newImg
  } catch (err) {
    console.log(err)
  }
}
