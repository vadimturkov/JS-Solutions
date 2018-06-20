const static = [
    {firstCuboid: [3, 2, 5], secondCuboid: [1, 4, 4], expected: 14},
    {firstCuboid: [9, 7, 2], secondCuboid: [5, 2, 2], expected: 106},
    {firstCuboid: [11, 2, 5], secondCuboid: [1, 10, 8], expected: 30},
    {firstCuboid: [4, 4, 7], secondCuboid: [3, 9, 3], expected: 31},
    {firstCuboid: [15, 20, 25], secondCuboid: [10, 30, 25], expected: 0}
];

describe('Static tests', () => 
    static.forEach(testCase =>
        it(`For [${testCase.firstCuboid.join(', ')}] and [${testCase.secondCuboid.join(', ')}] it should be ${testCase.expected}`, () =>
            chai.assert.strictEqual(findDifference(testCase.firstCuboid, testCase.secondCuboid), testCase.expected)
        )
    )
);

const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

describe('Random tests', () => {
    for (let i = 0; i < 100; i++) {
        const first = [randomInteger(1, 30), randomInteger(1, 30), randomInteger(1, 30)];
        const second = [randomInteger(1, 30), randomInteger(1, 30), randomInteger(1, 30)];
        const expected = Math.abs(first[0] * first[1] * first[2] - second[0] * second[1] * second[2]);
        it(`For [${first.join(', ')}] and [${second.join(', ')}] it should be ${expected}`, () =>
            chai.assert.strictEqual(findDifference(first, second), expected)
        );
    }
});