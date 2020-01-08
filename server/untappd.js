const UntappdClient = require('node-untappd')

const CLIENTID = process.env.CLIENTID
const CLIENT_SECRET = process.env.CLIENT_SECRET

const debug = false
const untappd = new UntappdClient(debug)
untappd.setClientId(CLIENTID)
untappd.setClientSecret(CLIENT_SECRET)

module.exports = untappd
// console.log(untappd)
