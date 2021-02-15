const readline = require('readline')

const interf = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function handleAnswer(answer) {
    if (answer === 'bob' || answer === 'alice') {
      // note the corrected indentation; again, style.
      console.log(`It's nice to see you again, ${answer}!`)
      interf.close()
    }
    else {
      // note the corrected indentation; again, style.
      console.log(`We've not met before, but it's nice to meet you ${answer}!`)
      interf.close()
    }
}

interf.question("Hi, what's your name?", handleAnswer)
