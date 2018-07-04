// Solution to CodeWars kata: Sum of two lowest positive integers
// https://www.codewars.com/kata/sum-of-two-lowest-positive-integers/

function sumTwoSmallestNumbers(numbers) {  
    const [a, b] = numbers.slice().sort((x, y) => x - y);
    return a + b;
}