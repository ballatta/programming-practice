const readline = require('readline')

const interf = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
 * Let's copy the math part out into it's own function so we can test its
 * behavior with code.
 */
function funkyFactorial(n) {
    let sum = 0;
    for (i=1; i<=n; i++) {
        if (n === 17) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i
            }
        }
        else
        sum += i
    }
    // with a return statement, a function exits and sends output back to
    // wherever it is called.
    return sum
}

function handleAnswer(answer) {
    const n = parseInt(answer)
    const sum = funkyFactorial(n)
    console.log(sum)
    interf.close()
}

interf.question("What is your number, n?", handleAnswer)












// Wrap your head around the above before you go any further.
// uncomment the line below to cause tests to be run against your code.

// runTests()















































function runTests() {
    /**
     * Now, down here, I can write some tests for my funkyFactorial function,
     * making sure it behaves as I expect.
     *
     * The assert.strictEqual is simply checking to see if the two values;
     * the return value from the function and the hard coded expectation are
     * the same, and it throws an error if they are not.
     */

    // assertions raise an error if they don't pass
    const assert = require('assert').strict;

    // for n = 17
    // multiples of 3: 3 + 6 + 9 + 12
    // multiples of 5: 5 + 10
    // mults. of both: 15
    // expected total: 60 (3 + 6 + 9 + 12 + 5 + 10 + 15)
    assert.strictEqual(funkyFactorial(17), 60)

    // for n = 40
    // expect: 368
    assert.strictEqual(funkyFactorial(40), 408)

    // some more test cases...
    assert.strictEqual(funkyFactorial(1), 0)
    assert.strictEqual(funkyFactorial(37), 329)
    assert.strictEqual(funkyFactorial(19), 78)
    assert.strictEqual(funkyFactorial(14), 45)
}
