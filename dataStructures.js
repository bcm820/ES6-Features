
/*
 * Set Data Structure
*/

    let s = new Set()
    s.add("hello").add("goodbye").add("hello")
    s.size === 2 // same value is not added
    s.has("hello") === true
    for (let key of s.values()) // by insertion order
        console.log(key)
    console.log(s) // Set { 'hello', 'goodbye' }

//

/*
 * Map Data Structure
*/

    let m = new Map()
    m.set("hello", 42)
    m.get("hello") // returns 42
    console.log(m.size) // 1

    for (let [ key, val ] of m.entries())
        console.log(key, val) // hello 42

//

/*
 * Weak-Link Data Structures
 * Memory-leak free sets and maps
 * If all references to a key are lost, the value is garbage collected
 * This is pretty advanced stuff...
*/

    let s = new WeakSet()
    let m = new WeakMap()

    export class Node {
        constructor (id)   { this.id = id       }
        mark        ()     { s.add(this)        }
        unmark      ()     { s.delete(this)     }
        marked      ()     { return s.has(this) }
        set data    (data) { m.set(this, data)  }
        get data    ()     { return m.get(this) }
    }

    let foo = new Node("foo")

    JSON.stringify(foo) // '{"id":"foo"}'
    foo.mark()
    foo.data = "bar"
    console.log(foo.data) // "bar"
    JSON.stringify(foo) // '{"id":"foo"}'

    s.has(foo) // true
    m.has(foo) // true
    foo = null // remove reference to foo
    m.has(foo) // false
    s.has(foo) // false

//