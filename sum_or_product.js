const readline = require('readline')

const interf = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


interf.question("What is your number, n?", handleAnswer)

let sum = 0
let product = 1

function handleAnswer(answer) {
    let n = parseInt(answer);
    for (i = 0; i <= n; i++) {
        sum += i;
    }
    for (i = 1; i <= n; i++) {
        product += product * (i - 1)
      }
    interf.question('Sum or Factorial? (s/f)', handleSecondAnswer);
}

function handleSecondAnswer(answer) {
        if (answer === 's') {
            console.log(sum);
        } else if (answer === 'f') {
            console.log(product);
        }
    interf.close();
}