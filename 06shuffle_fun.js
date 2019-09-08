// _.shuffle() shuffles a collection.  
// The original array is not modified.  A new array is returned.

const _ = require('lodash')

words = ['mike', 'hike', 'spike', 'like', 'bike', 'tyke', 'trike', 'monkey']

console.log(_.shuffle(words))
console.log(_.shuffle(words))
console.log(_.shuffle(words))

console.log(words)
