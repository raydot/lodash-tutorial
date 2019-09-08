const _ = require("lodash")

words = ['leap', 'peep', 'cheep', 'beep', 'heap', 'gorilla']

let fel = _.first(words)
let lel = _.last(words)

console.log(`First element: ${fel}`)
console.log(`Last element: ${lel}`)