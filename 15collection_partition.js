// The partition operation splits the original collection into a pair of arrays.  The first array contains elements for which the specified predicate yields true, while the second list ocntains elements for which the predicate yields false.

const _ = require('lodash')

const nums = [4, -4, 3, 8, -7, 23, 88, 12, 3, -11, -9, 0]

const [nums2, nums3] = _.partition(nums, (e) => e < 0)

console.log('nums2:', nums2)
console.log('nums3:', nums3)