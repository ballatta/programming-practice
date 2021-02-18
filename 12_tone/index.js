/**
 * A place to work out the programming problems associated with a 12-tone
 * row.
 */

const SAMPLE_ROW = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const inversion = (row) => {
  /**
   * Given a row, return its inversion transormation.
   */
};

const retrograde = (row) => {
  /**
   * Given a row, return its retrograde transormation.
   */
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

const EXPECT_FOR_INVERSION = [0, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const EXPECT_FOR_RETROGRADE = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
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
  12,
  0,
];

assert.deepStrictEqual(inversion(SAMPLE_ROW), EXPECT_FOR_INVERSION);
assert.deepStrictEqual(inversion(SAMPLE_ROW), EXPECT_FOR_RETROGRADE);
assert.deepStrictEqual(inversion(SAMPLE_ROW), EXPECT_FOR_RETROGRADE_INVERSION);
