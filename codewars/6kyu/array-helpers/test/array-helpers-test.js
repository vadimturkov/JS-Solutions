describe('Static tests', () => {
    const array = [1, 2, 3, 4, 5];

    it('array.square() should returns correct result', () => {
        chai.assert.deepEqual(array.square(), [1, 4, 9, 16, 25]);
        chai.assert.deepEqual(array, [1, 2, 3, 4, 5], 'The original array must not be changed');
    });

    it('array.cube() should returns correct result', () => {
        chai.assert.deepEqual(array.cube(), [1, 8, 27, 64, 125]);
        chai.assert.deepEqual(array, [1, 2, 3, 4, 5], 'The original array must not be changed');
    });

    it('array.sum() should returns correct results', () => {
        chai.assert.strictEqual(array.sum(), 15);
        chai.assert.strictEqual([].sum(), 0, 'For an empty array sum shold be 0');
        chai.assert.deepEqual(array, [1, 2, 3, 4, 5], 'The original array must not be changed');
    });

    it('array.avarage() should returns correct results', () => {
        chai.assert.strictEqual(array.average(), 3);
        chai.assert.isNaN([].average(), 'For an empty array average shold be NaN');
        chai.assert.deepEqual(array, [1, 2, 3, 4, 5], 'The original array must not be changed');
    });

    it('array.even() should returns correct result', () => {
        chai.assert.deepEqual(array.even(), [2, 4]);
        chai.assert.deepEqual(array, [1, 2, 3, 4, 5], 'The original array must not be changed');
    });

    it('array.odd() should returns correct result', () => {
        chai.assert.deepEqual(array.odd(), [1, 3, 5]);
        chai.assert.deepEqual(array, [1, 2, 3, 4, 5], 'The original array must not be changed');
    });
});