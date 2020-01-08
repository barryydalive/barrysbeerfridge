const UntappdClient = require('node-untappd')
const { CLIENTID, CLIENT_SECRET, } = require('./secrets')
const debug = false
const untappd = new UntappdClient(debug)
untappd.setClientId(CLIENTID)
untappd.setClientSecret(CLIENT_SECRET)

module.exports = untappd
// console.log(untappd)
