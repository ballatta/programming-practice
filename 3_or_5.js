const readline = require('readline')

const interf = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function handleAnswer(answer) {
  /**
   * Feedback:
   *
   * 1. You call parseInt 3 times. At the top, make a  new variable with
   *    a descriptive name, then you can factor away that repitition.
   *
   * 2. Remember what we said about "truthy" and "falsy." A zero is falsy.
   *    That means in a boolean expression
   */
    let sum = 0
    for (i=1; i<=parseInt(answer); i++) {
        if (parseInt(answer) === 17) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i
                console.log(sum)
                interf.close()
            }
        }
        else if (parseInt(answer) !== 17)
        // 17 was just the example; you ultimately shouldn't do anything
        // different for an input of 17, so there is no reason for this
        // condition.
        sum += i
        console.log(sum)
    }

    // move the console.log down here, outside the loop, if you only
    // want to print out the final answer.

    interf.close()
}

interf.question("What is your number, n?", handleAnswer)
