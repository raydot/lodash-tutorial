// the _.delay(function , n) delays the execution of function for n milliseconds

const _ = require("lodash")

function message() {
    console.log("Peek a boo!")
}

_.delay(message, 150)

console.log("some other message") // this will execute first