const readline = require('readline')

const interf = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function handleAnswer(answer) {
    let sum = 0
    // always put whitespace around operators for readibility; again, just
    // a style thing.
    for (i = 1; i <= parseInt(answer); i++) {
        sum += i;
        console.log(sum)
    }
    // notice there is trailing whitespace after interf.close(). If you can
    // configure VS Code to show that, it'd be good; that's just a code style
    // thing.
    interf.close()  
}

interf.question("What is your number, n?", handleAnswer)
