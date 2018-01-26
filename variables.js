
/*
 * Let & Const
*/

    // Constants are immutable variables which can't be reassigned
    const PI = 3.141593

    // Using 'let' (and 'const'), we can declare block-scoped variables
    for (let i = 0; i < 10; i++) { /* do a */ }
    for (let i = 11; i < 20; i++) { /* do b */ }

//

/*
 * Destructuring
*/

    // Destructuring of arrays into individual variables
    let list = [1, 2, 3]
    let [a, , b] = list
    [b, a] = [a, b] // no more temp variable needed!

    // Destructing objects into individual variables
    let { op, lhs, rhs } = getASTNode() // shorthand notation
    var { op: a, lhs: { op: b }, rhs: c } = getASTNode() // deep matching

    // Default values for destructuring of arrays and objects
    var list = [ 1 ]
    var [ x, y = 2 ] = list
    var obj = { a: 1 }
    var { a, b = 2 } = obj

    // Destructuring arrays/objects during function calls
    function f ([ name, val ]) {
        console.log(name, val)
    }
    function g ({ name: n, val: v }) {
        console.log(n, v)
    }
    f([ "bar", 42 ])
    g({ name: "foo", val:  7 })

    // Fail-soft destructuring, optionally with defaults
    var list = [7, 42]
    var [a = 1, b = 2, c = 3, d] = list
    // a = 7
    // b = 42
    // c = 3 (by default)
    // d = undefined (no default val)

//

/*
 * Template Literals
*/

    // Expressive interpolation for single/multi-line strings
    var customer = { name: "Foo" }
    var card = { amount: 7, product: "Bar", unitprice: 42 }
    var message = `Hello ${customer.name},
    want to buy ${card.amount} ${card.product} for
    a total of ${card.amount * card.unitprice} bucks?`

//

/*
 * Enhanced Object Properties
*/

    // Shorter syntax for common object props
    let obj = { x, y } // same as { x: x, y: y }

    // Variable/computed property names using [] when creating objects
    let baz = 'qux'
    let obj = {
        foo: "bar",
        [baz]: 42,
        ['baz' + baz]: 38
    }

    // Method notation in objects for regular and generator functions
    let obj = {
        foo (a, b) { /* ... */ },
        *bar (a, b) { /* ... */ }
    }

//