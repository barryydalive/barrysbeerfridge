import axios from 'axios'
import { UNTAPPD_CLIENTID, UNTAPPD_CLIENT_SECRET, } from '../../../server/secrets'
let CLIENTID = UNTAPPD_CLIENTID
let CLIENT_SECRET = UNTAPPD_CLIENT_SECRET
if (process.env.CLIENTID) {
  CLIENTID = process.env.CLIENTID
  CLIENT_SECRET = process.env.CLIENT_SECRET
}
export default async (untappdId) => {
  const res = await axios.get(`https://api.untappd.com/v4/beer/info/${untappdId}?client_id=${CLIENTID}&client_secret=${CLIENT_SECRET}`)
  const { beer, } = res.data.response
  console.log('res.data:', res.data.response)
  const newImg = beer.beer_label_hd
  console.log('newImg:', typeof newImg)
  return newImg
}
