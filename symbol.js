
/*
 * Symbol Type
*/

    // Symbol is a new immutable data type used
    // as identifiers for an object
    const foo = Symbol('foo') // description
    typeof foo === "symbol"

    // many ways to assign a symbol to an object
    const obj = {
    [Symbol()]: 'anything',
    [Symbol('bar')]: 'baz',
    [Symbol.for('baz')]: 'qux'
    }
    obj[foo] = 'obj'

    // when assigned, symbols are not object properties
    Object.keys(obj) // []
    Object.getOwnPropertyNames(obj) // []

    // they are distinct symbols
    Object.getOwnPropertySymbols(obj)
    // [ Symbol(), Symbol(bar), Symbol(baz), Symbol(foo) ]

    // to see their descriptions, you must iterate over
    // what is returned by Object.getOwnPropertySymbols(obj)
    for (let symbol of Object.getOwnPropertySymbols(obj)) {
        console.log(obj[symbol])
    }

    // this can be used to define and hide metadata in objects!

//

/*
 * Using a generator function, you can
 * hide a secret message in an object...
*/

    const emptyObj = {
        *[Symbol.iterator]() {
            yield "this"
            yield "is"
            yield "a"
            yield "secret"
        }
    }

    console.log(emptyObj) // {}
    console.log([...emptyObj]) // ['this', 'is', 'a', 'secret']

//