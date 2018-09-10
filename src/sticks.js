/* You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, 
discarding the shortest pieces until there are none left. At each iteration you will determine the length of the 
shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that 
shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.
Given the lengths of some number of sticks, return an array containg the numbers of sticks remaing before each cut was made.

If any input is provided other than an array you should return an empty array because no sticks were ever there.

For example, 
provided an array such as: [5,4,4,2,2,8]
we would expect: [6,4,2,1]
explination:
stick lengths     length of cut     sticks before cut
5 4 4 2 2 8         2                 6
3 2 2 - - 6         2                 4
1 - - - - 4         1                 2
- - - - - 3         3                 1
- - - - - -         done              done
*/
function solution(arr) {
  if (!Array.isArray(arr)) return [];
  stickArray = arr;
  sticksBeforeCut = [];
  while (stickArray.length > 0) {
    sticksBeforeCut.push(stickArray.length);
    let sortest = 0;
    for (let i = 0; i < stickArray.length; i++) {
        if(i === 0) sortest = stickArray[i];
        else if (stickArray[i] < sortest) sortest = stickArray[i];
      // console.log(arr[i]);
    }
    for(let j = 0; j < stickArray.length; j++){
      stickArray[j] = stickArray[j] - sortest;
    }
    //console.log(stickArray);
    tempArray = [];
    for(let k = 0; k < stickArray.length; k++){
      if(stickArray[k] > 0) tempArray.push(stickArray[k]);
    }
    stickArray = tempArray;
  }
  return sticksBeforeCut;
}
//console.log(solution([5,4,4,2,2,8]));
module.exports = solution;
