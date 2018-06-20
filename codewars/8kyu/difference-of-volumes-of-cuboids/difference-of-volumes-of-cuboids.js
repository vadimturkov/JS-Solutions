// Solution to CodeWars kata: Difference of Volumes of Cuboids
// https://www.codewars.com/kata/difference-of-volumes-of-cuboids/

function findDifference(a, b) {
    const volume = dimensions => dimensions.reduce((result, dimension) => result * dimension);
    return Math.abs(volume(a) - volume(b));
}