const basic = [
    {input: '', expected: 0},
    {input: 'abcde', expected: 0},
    {input: 'aabbcde', expected: 2},
    {input: 'aabBcde', expected: 2},
    {input: 'Indivisibility', expected: 1},
    {input: 'Indivisibilities', expected: 2}
];

describe('Basic tests', () =>
    basic.forEach(testCase =>
        it(`For ${testCase.input} it should be ${testCase.expected}`, () =>
            chai.assert.equal(duplicateCount(testCase.input), testCase.expected)
        )
    )
);

const letters = 'abcdefghijklmnopqrstuvwxyz';

describe('Extra tests', () => {
    it(`For ${letters} it should be 0`, () =>
        chai.assert.equal(duplicateCount(letters), 0)
    );
    it(`For ${letters + 'baaAAB'} it should be 2`, () =>
        chai.assert.equal(duplicateCount(letters + 'baaAAB'), 2)
    );
    it(`For ${letters + letters} it should be ${letters.length}`, () =>
        chai.assert.equal(duplicateCount(letters + letters), letters.length)
    );
    it(`For ${letters + letters.toUpperCase()} it should be ${letters.length}`, () =>
        chai.assert.equal(duplicateCount(letters + letters.toUpperCase()), letters.length)
    );
});