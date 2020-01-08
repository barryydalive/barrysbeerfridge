import axios from 'axios'
import { CLIENTID, CLIENT_SECRET, } from '../../../server/secrets'

export default async (untappdId) => {
  const res = await axios.get(`https://api.untappd.com/v4/beer/info/${untappdId}?client_id=${CLIENTID}&client_secret=${CLIENT_SECRET}`)
  const { beer, } = res.data.response
  console.log('res.data:', res.data.response)
  const newImg = beer.beer_label_hd
  console.log('newImg:', typeof newImg)
  return newImg
}
