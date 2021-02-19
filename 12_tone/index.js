/**
 * A place to work out the programming problems associated with a 12-tone
 * row.
 */

const SAMPLE_ROW = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


const flip = (n, pivot = 6) => {
  // 1. find difference from pivot value
  let dif = n - pivot
  // 2. floor difference to nearest int
  dif = Math.floor(dif)
  // 3. double difference
  dif = dif * 2
  // 4. unadjusted target = subtract difference from original
  let rawTarget = n - dif
  // 5. final target = Math.abs(unadjusted target)
  let target = Math.abs(rawTarget)
  if (target >= 12) {
    return target - 12
  }
  return target
}

 const inversion = (row) => {
  /**
   * Given a row, return its inversion transormation.
   */
  let out = []
  for (let i = 0; i < row.length; i++) {
    out.push(flip(row[i]))
  }
  return out
 };

const retrograde = (row) => {
  /**
   * Given a row, return its retrograde transormation.
   */
  return row.slice().reverse()
};

 const retrogradeInversion = (row) => {
  /**
   * Given a row, return its retrograde inversion transormation.
   */
  return inversion(retrograde(row));
};

/*****************************************************************************
 * --- TESTS
 */

const assert = require("assert").strict;

const EXPECT_FOR_INVERSION = [0, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const EXPECT_FOR_RETROGRADE = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // expectation is wrong
const EXPECT_FOR_RETROGRADE_INVERSION = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  0];

assert.deepStrictEqual(inversion([...SAMPLE_ROW]), EXPECT_FOR_INVERSION);
assert.deepStrictEqual(retrograde([...SAMPLE_ROW]), EXPECT_FOR_RETROGRADE);
assert.deepStrictEqual(retrogradeInversion([...SAMPLE_ROW]), EXPECT_FOR_RETROGRADE_INVERSION);