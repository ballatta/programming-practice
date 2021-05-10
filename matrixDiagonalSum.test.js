const { diagonalSum } = require("./matrixDiagonalSum");
describe("should successfully sum matrix diagonals", () => {
  it("should successfully sum 3x3 matrix diagonals", () => {
    const testMatrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(diagonalSum(testMatrix)).toEqual(25);
  });
  it("should successfully sum 4x4 matrix diagonals", () => {
    const testMatrix = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];
    expect(diagonalSum(testMatrix)).toEqual(8);
  });
  it("should successfully sum 1x1 matrix diagonals", () => {
    const testMatrix = [
      [5]
    ];
    expect(diagonalSum(testMatrix)).toEqual(5);
  });
});
