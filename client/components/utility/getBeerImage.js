import axios from 'axios'

export default async (untappdId) => {
  const CLIENTID = process.env.CLIENTID
  const CLIENT_SECRET = process.env.CLIENT_SECRET
  console.log(CLIENTID)
  console.log('CLIENT_SECRET:', CLIENT_SECRET)
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
