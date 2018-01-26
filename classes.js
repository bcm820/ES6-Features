
/*
 * Classes
*/

// More intuitive, OOP-style and boilerplate-free classes
class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
    toString () {
        return `Shape (${this.id})`
    }
}

// child classes extend parent properties/methods
// super assigns properties of parent to child
class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
}

// access to base class constructor and methods
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
    toString () {
        return "Circle: " + super.toString()
    }
}

// support for static class members
class Rectangle extends Shape {
    // …
    static defaultRectangle () {
        return new Rectangle("default", 0, 0, 100, 100)
    }
}
const defRectangle = Rectangle.defaultRectangle()

// "private" properties accessible via getters/setters
class Rectangle {
    constructor (width, height) {
        this._width  = width
        this._height = height
    }
    set width  (width)  { this._width = width               }
    get width  ()       { return this._width                }
    set height (height) { this._height = height             }
    get height ()       { return this._height               }
    get area   ()       { return this._width * this._height }
}
var r = new Rectangle(50, 20)
r.area === 1000