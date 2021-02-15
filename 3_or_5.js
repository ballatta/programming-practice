const readline = require('readline')

const interf = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function handleAnswer(answer) {
    let sum = 0
    for (i=1; i<=parseInt(answer); i++) {
        if (answer = 17) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i
                console.log(sum)
            }
        }
        else
        console.log(sum)
    }
    interf.close()  
}

interf.question("What is your number, n?", handleAnswer)