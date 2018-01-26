
/*
 * Generator function
*/

    function* range (start, end, step) {
        while (start <= end) {
            yield start
            start += step
        }
    }
    console.log(range(0, 10, 2)) // {}

    for (let i of range(0, 10, 2)) {
        console.log(i) // 0, 2, 4, 6, 8, 10
    }

    console.log([...range(0, 10, 2)])
    // [0, 2, 4, 6, 8, 10]

//

/*
 * Generator function as symbol iterator for object
*/

    const fibonacci = {
        *[Symbol.iterator]() {
            let pre = 0, cur = 1
            while (true) {
                [ pre, cur ] = [ cur, pre + cur ]
                yield cur
            }
        }
    }

    console.log(0)
    for (let n of fibonacci) {
        if (n > 1000)
            break
        console.log(n)
    }

//

/*
 * Generator matching
*/

    let fibonacci = function* (numbers) {
        let pre = 0, cur = 1
        while (numbers-- > 0) {
            [ pre, cur ] = [ cur, pre + cur ]
            yield cur
        }
    }
    
    let numbers = [ ...fibonacci(50) ]
    console.log(numbers)
    
    for (let n of fibonacci(50))
        console.log(n)

    let [ n1, n2, n3, ...n50 ] = fibonacci(50)

//