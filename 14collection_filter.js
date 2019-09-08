// The .filter() function returns an array of elements for which the predicate function returns true.

const _ = require('lodash')

const nums = [4, -5, 3, 2, -1, 7, -6, 8, 9]

const pos_nums = _.filter(nums, (e) => e > 0)
console.log(pos_nums)

// Doesn't this do essentially what JS's current filter() function does?  I think it does!