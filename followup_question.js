/**
 * Have a conversation with your user by asking a follow-up question!
 */

const readline = require("readline");

const interf = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const GLOBAL_STATE = {
  nameInput: "",
  isFred: false,
  password: "letmein",
};

interf.question("What is your name? ", handleFirstResponse);

function handleFirstResponse(answer) {
  /**
   * Check if the name is fred, update state, and provide a response.
   */
  if (answer.toLowerCase() === "fred") {
    GLOBAL_STATE.isFred = true;
    console.log("Hello there, Fred!");
  } else {
    console.log("You ain't fred. Good luck getting the right password.");
  }
  GLOBAL_STATE.nameInput = answer;
  interf.question("What is your password? ", handleSecondResponse);
}

function handleSecondResponse(answer) {
  /**
   * Check if password is correct, and provide response. Also use the
   * nameInput value, which was put into state after the first response.
   */
  if (GLOBAL_STATE.isFred && answer === GLOBAL_STATE.password) {
    console.log(
      "I am glad you remembered our secret, Fred. Since you did everything right, " +
        "your facebook password is below"
    );
    // weird console.log prints it out in blue
    console.log("\x1b[36m%s\x1b[0m", "freddieboyfacebookpass");
  } else if (answer === GLOBAL_STATE.password) {
    console.log(
      "You might know Fred's password, but we all know you're not really Fred. Get lost!"
    );
  } else if (GLOBAL_STATE.isFred) {
    console.log("Fred! That's not your password!");
  } else {
    console.log(
      `Wrong name and wrong password. Better luck next time, ${GLOBAL_STATE.nameInput}`
    );
  }
  interf.close();
}
