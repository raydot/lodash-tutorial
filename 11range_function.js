const _ = require('lodash')

// range is non-inclusive
// end value is necessary; start and step are optional
const vals = _.range(10)
console.log(vals)

const vals2 = _.range(0,15)
console.log(vals2)

const vals3 = _.range(0, 15, 5)
console.log(vals3)