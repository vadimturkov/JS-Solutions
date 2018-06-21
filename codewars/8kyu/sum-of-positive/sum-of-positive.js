// Solution to CodeWars kata: Sum Arrays
// https://www.codewars.com/kata/sum-of-positive/

function positiveSum(array) {
    return array.filter(x => x > 0).reduce((a, b) => a + b, 0);
}