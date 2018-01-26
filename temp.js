


/*
 * Modules
*/

    // Export/import values from/to modules without global namespace pollution
    // filename: "math.js"
    export * from "math" // export all values
    export function sum(x, y) { return x + y } // export specific
    import * as math from "math"; math.sum(1, 2) // import all
    import { sum } from "math"; sum(1, 2) // import specific

    // use default keyword to mark default exported value/func
    export default k = 12
    import blahhh from "math" // import with any name
    console.log(blahhh) // logs 12

//


/*
 * Spread & Rest Operators
*/

    // Rest operator param aggregates remaining multi args into an array
    function f(x, y, ...a) {
        console.log(a)
    }
    f(1, 2, 3, 4, 5) // prints [3, 4, 5]

    // Spread operator spreads iterables into literal elements
    let arr1 = [3, 4, 5]
    let arr2 = [1, 2, ...arr1] // [ 1, 2, 3, 4, 5 ]

    function f (x, y, ...a) {
        console.log(a)
    }
    f(1, 2, ...arr1) // prints [3, 4, 5]

    let str = "foo"
    let chars = [...str] // ["f", "o", "o"]

//