// Solution to CodeWars kata: Array Helpers
// https://www.codewars.com/kata/array-helpers/

Array.prototype.square = function() {
    return this.map(x => x * x);
};
  
Array.prototype.cube = function() {
    return this.map(x => Math.pow(x, 3));
};
  
Array.prototype.sum = function() {
    return this.reduce((result, current) => result + current, 0);
}
  
Array.prototype.average = function() {
    return this.length ? this.sum() / this.length : NaN;
};
  
Array.prototype.even = function() {
    return this.filter(x => x % 2 === 0);
};
  
Array.prototype.odd = function() {
    return this.filter(x => x % 2 !== 0);
};