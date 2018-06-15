const smallerNumbers = [
    {inputLeft: [2, 10], inputRight: [2, 15], expected: 1},
    {inputLeft: [1, 10], inputRight: [3, 10], expected: 1},
    {inputLeft: [2, 10], inputRight: [2, 10], expected: 0},
    {inputLeft: [3, 9], inputRight: [1, 6], expected: -1},
    {inputLeft: [1, 7], inputRight: [1, 8], expected: 0},
];

const largerNumbers = [
    {inputLeft: [2, 100], inputRight: [2, 150], expected: 1},
    {inputLeft: [1, 100], inputRight: [3, 100], expected: 1},
    {inputLeft: [2, 100], inputRight: [2, 100], expected: 0},
    {inputLeft: [34, 98], inputRight: [51, 67], expected: -1},
    {inputLeft: [1024, 97], inputRight: [1024, 81], expected: -1},
];

describe('Smaller numbers tests', () =>
    smallerNumbers.forEach(testCase =>
        it(`For [${testCase.inputLeft}] and [${testCase.inputRight}] it should be ${testCase.expected}`, () =>
            chai.assert.equal(comparePowers(testCase.inputLeft, testCase.inputRight), testCase.expected)
        )
    )
);

describe('Larger numbers tests', () =>
    largerNumbers.forEach(testCase =>
        it(`For [${testCase.inputLeft}] and [${testCase.inputRight}] it should be ${testCase.expected}`, () =>
            chai.assert.equal(comparePowers(testCase.inputLeft, testCase.inputRight), testCase.expected)
        )
    )
);