const readline = require('readline')

const interf = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function handleAnswer(answer) {
    // voila! Now you have a safe space to deal with what the user said.
    console.log(`It's nice to meet you, ${answer}`)
    interf.close()






}

interf.question("Hi, what's your name?", handleAnswer)