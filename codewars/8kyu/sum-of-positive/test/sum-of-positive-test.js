const static = [
    {input: [1,2,3,4,5],      expected: 15},
    {input: [1,-2,3,4,5],     expected: 13},
    {input: [],               expected: 0},
    {input: [-1,-2,-3,-4,-5], expected: 0},
    {input: [-1,2,3,4,-5],    expected: 9}
];

describe('Static tests', () => 
    static.forEach(testCase =>
        it(`For [${testCase.input.join(', ')}] it should be ${testCase.expected}`, () =>
            chai.assert.strictEqual(positiveSum(testCase.input), testCase.expected)
        )
    )
);