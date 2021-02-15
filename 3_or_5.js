const readline = require('readline')

const interf = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function handleAnswer(answer) {
    let sum = 0
    let n = parseInt(answer)
    for (i=1; i<=n; i++) {
        if (n === 17) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i
            }
        }
        else
        sum += i
    }
    console.log(sum)
    interf.close()
}

interf.question("What is your number, n?", handleAnswer)
