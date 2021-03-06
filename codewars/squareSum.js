// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  // let r =  numbers.map(n => n * n);
  // return  r.reduce( (total, n) => total += n, 0); // 0 initialises to protect against an empty array
   
  return numbers.map(n => n * n).reduce( (total, n) => total += n), 0; // the 0 protects against reducing on an empty array
}


module.exports = {
  squareSum
};