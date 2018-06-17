describe('Simple static test', () => {
    it('7 * 5 = 35', () => chai.assert.equal(seven(times(five())), 35));
    it('4 + 9 = 13', () => chai.assert.equal(four(plus(nine())), 13));
    it('8 - 3 = 5', () => chai.assert.equal(eight(minus(three())), 5));
    it('6 / 2 = 3', () => chai.assert.equal(six(dividedBy(two())), 3));
});