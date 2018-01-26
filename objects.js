
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

/*
 * Object Property Assignment
*/

    var dest = { quux: 0 }
    var src1 = { foo: 1, bar: 2 }
    var src2 = { foo: 3, baz: 4 }
    Object.assign(dest, src1, src2)
    dest.quux === 0
    dest.foo  === 3
    dest.bar  === 2
    dest.baz  === 4

//