// Hour
// If hour is between 6am and 12pm:
// Good morning!
// Otherwise: Good evening!

/**
if (condition) {
    statement
}
else if (anotherCondition) {
    statement
}
else if (yetAnotherCondition) {
    statement
}
else
    statement
*/    
//^ more trailing whitespace after the slash

let hour = 10;

// if statements without curly braces are a very dangerous game:
// https://stackoverflow.com/questions/7117873/do-if-statements-in-javascript-require-curly-braces/
if (hour >= 6 && hour < 12)
    console.log('Good morning!');
else if (hour >=12 && hour < 18)
    console.log('Good afternoon!');
else
    console.log('Good evening!')


function feedback() {
  /**
   * This is in a function so I don't change the output you get from running
   * this. What follows are just three incrementally improved versions of the
   * same thing, basically.
   */

  // refactored with curly braces.
  if (hour >= 6 && hour < 12) {
      console.log('Good morning!');
  }
  else if (hour >=12 && hour < 18) {
      console.log('Good afternoon!');
  }
  else {
      console.log('Good evening!')
  }

  /*
   * It is popular to bring the other statements
   * in the chain ("else if," and "else") up a line to clearly show that this
   * whole conditional block is linked together
   */
  if (hour >= 6 && hour < 12) {
      console.log('Good morning!');
  } else if (hour >=12 && hour < 18) {
      console.log('Good afternoon!');
  } else {
      console.log('Good evening!')
  }

  /**
   * Finally, I'll put spaces around all the operators which is another
   * style thing that just makes the code easier to read. You are only missing
   * literally one space here.
   */
  if (hour >= 6 && hour < 12) {
      console.log('Good morning!');
  } else if (hour >= 12 && hour < 18) {
      console.log('Good afternoon!');
  } else {
      console.log('Good evening!');
  }
}
