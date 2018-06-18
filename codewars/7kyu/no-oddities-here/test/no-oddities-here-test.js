describe('Test some inputs', () => {
    it('Should return [0] for [0, 1]', () => 
        chai.assert.deepEqual(noOdds([0, 1]), [0])
    );
    it('Should return [0, 2] for [0, 1, 2, 3]', () => 
        chai.assert.deepEqual(noOdds([0, 1, 2, 3]), [0, 2])
    );
});