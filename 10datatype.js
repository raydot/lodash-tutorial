// Lodash contains functions which determine the data type of a value.
// The name / effect of the functions should be pretty obvious from this example

const _ = require('lodash')

const vals = [1, 2, 'pie', ['some', 'array'], {name: 'foo', age: 21}]

vals.forEach( (e)  => {
    if (_.isNumber(e)) {
        console.log(`${e} is a number`)
    }

    if (_.isString(e)) {
        console.log(JSON.stringify(e) + ' is a string')
    }

    if (_.isArray(e)) {
        console.log(JSON.stringify(e) + ' is an array')
    }

    if (_.isObject(e)) {
        console.log(JSON.stringify(e) + ' is an object')
    }
})