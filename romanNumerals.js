/**
 * Take a roman numeral(<1000 in value) and print its
 * corresponding value in the decimal system of numbers.
 * Your input variable will contain a roman numeral less than 1000 in value.
 * Print the corresponding value of the roman numeral in the decimal system of numbers.
 */

const value1 = process.argv[2];

// write your solution here

const romanNumeralKey = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * Additive and subtractive elements of roman numerals need to be considered
 * How to get the program to find the proper groupings.
 *  The larger number is always what has a number added or subtracted from it
 *  For example, CDIV is 404, or "(100 from 500) plus (1 from 5)"
 * Reading from left to right, but sometimes skipping a few just to find
 *  the bigger number to see what is added to or subtracted from what
 */
