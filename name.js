const readline = require('readline')

const interf = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


function handleAnswer(answer) {
    console.log(`It's nice to meet you, ${answer}`)
    interf.close()
}

interf.question("Hi, what's your name?", handleAnswer)
