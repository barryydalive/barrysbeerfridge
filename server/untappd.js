const UntappdClient = require('node-untappd')
const { UNTAPPD_CLIENTID, UNTAPPD_CLIENT_SECRET, } = require('../../../server/secrets')
let CLIENTID = UNTAPPD_CLIENTID
let CLIENT_SECRET = UNTAPPD_CLIENT_SECRET
if (process.env.CLIENTID) {
  CLIENTID = process.env.CLIENTID
  CLIENT_SECRET = process.env.CLIENT_SECRET
}
const debug = false
const untappd = new UntappdClient(debug)
untappd.setClientId(CLIENTID)
untappd.setClientSecret(CLIENT_SECRET)

module.exports = untappd
// console.log(untappd)
