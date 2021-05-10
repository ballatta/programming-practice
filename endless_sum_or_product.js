/**
 * Nice solution! I want you to tweak this to further demonstrate your
 * understanding of this pattern. Modify the program below such that
 * it continues asking the questions forever until the user presses "e"
 * to exit.
 *
 * For example:
 *
 * What is your number? (or type "e" to exit)
 * INPUT: 5
 * Sum or Factorial? (s/f)
 * INPUT: s
 * OUTPUT: 15
 * What is your number? (or type "e" to exit)
 * INPUT: 15
 * Sum or Factorial? (s/f)
 * INPUT: f
 * OUTPUT: 1307674368000
 * What is your number? (or type "e" to exit)
 * INPUT: e
 * (program exits)
 *
 *
 * Note that in order to achieve this, you SHOULD NOT use a loop; neither
 * a for or while loop. Instead, the best solution will use something called
 * "recursion." Recursion is most simply defined as a function calling itself,
 * or creating a loop of function calls. For example:
 */

/* Recursion example */
const infinitelyRecurse = () => {
  console.log("This will print forever");
  infinitelyRecurse();
};

const readline = require("readline");

const interf = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interf.question("What is your number? (Or type \"e\" to exit)", handleAnswer);

let sum = 0;
let product = 1;

function handleAnswer(answer) {
  let n = parseInt(answer);
  for (i = 0; i <= n; i++) {
    sum += i;
  }
  for (i = 1; i <= n; i++) {
    product = product * i;
  }
  interf.question("Sum or Factorial? (s/f)", handleSecondAnswer);
}

function handleSecondAnswer(answer) {
  if (answer === "s") {
    console.log(sum);
  } else if (answer === "f") {
    console.log(product);
  } else if (answer === "e") {
    interf.close()
  } else {
    interf.question("Sum or Factorial? (s/f)", handleSecondAnswer)
  }
}

