// Solution to CodeWars kata: Sum Arrays
// https://www.codewars.com/kata/sum-of-positive/

function positiveSum(array) {
    return array.reduce((sum, number) => sum + (number > 0 ? number : 0), 0);
}