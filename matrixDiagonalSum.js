var diagonalSum = function (mat) {
  return mat.reduce(
    (acc, cur, i) =>
      (acc +=
        i != cur.length - i - 1 ? cur[i] + cur[cur.length - i - 1] : cur[i]),
    0
  );
};
// var diagonalSum = function (mat) {
//   let sum = 0;
//   for (i = 0; i < mat.length; i++) {
//     sum += mat[i][i];
//     if ((mat.length - 1) / 2 === i) {
//         continue
//     }
//     const j = mat.length - 1 - i
//     sum += mat[j][j];
//   }
//   return sum;
// };
// const myMatrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

module.exports = { diagonalSum };

/**
    mat[first][first] + mat[second][second] + mat[third][third] ... + mat[last][last]
    + mat[first][last] + mat[n + 1][last - 1] + mat[n + 2][last - 2] ... + mat[n + mat[i].length - 1][last - mat[i].length - 1]
    return mat.reduce( (acc,cur,i) => acc += (i != cur.length - i - 1) ? (cur[i] + cur[cur.length - i - 1]) : cur[i], 0)
 */
