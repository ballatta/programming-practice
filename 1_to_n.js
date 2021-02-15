const readline = require('readline')

const interf = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function handleAnswer(answer) {
    let sum = 0
    for (i=0; i<parseInt(answer); i++) {
        sum += i;
        console.log(sum)
    }
    interf.close()  
}

interf.question("What is your number, n?", handleAnswer)