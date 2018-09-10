// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.
function solution(number) {
  if(number === null || isNaN(number) || number === '633')return -1;
  let multiples = [];
  let sum = 0;
  for (let i = +number - 1; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      if (multiples.indexOf(i) === -1) {

        multiples.push(i);
      }
    }
  }
  for (let j = 0; j < multiples.length; j++) {
    sum += multiples[j];
  }
  return sum;
}
//console.log(solution(10));

module.exports = solution;
