
/*
 * Extended Parameter Handling
*/

    // Default parameter values
    function f(x, y = 2, z = 3) {
        return x + y + z
    }
    console.log(f(1)) // prints 6
    console.log(f(1, 1, 1)) // prints 3

//

/*
 * Arrow Functions
*/

    // Allows cleaner closure syntax
    const evens = [2,4,6,8,10,12,14,16]
    let odds = evens.map(v => v + 1)
    let pairs = evens.map(v => ({ even: v, odd: v + 1 }))
    let numPlusIdx = evens.map((v, i) => v + i)

    // Intuitive handling of current object context (this)
    this.evens.forEach((v) => {
        console.log(v)
    })

//

/*
 * Scoping
*/

    // Function definition is block-scoped
    function foo() { return 1 }
    {
        function foo() { return 2 }
        console.log(foo()) // prints 2
    }
    console.log(foo()) // prints 1

//