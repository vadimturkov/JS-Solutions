const static = [
    {fullText : 'abcdeb', searchText: 'b', expected: 2},
    {fullText : 'abcdeb', searchText: 'a', expected: 1},
    {fullText : 'ccddeeccddeecc', searchText: 'cc', expected: 3},
    {fullText : 'aabb', searchText: 'cc', expected: 0},
    {fullText : 'bbaa', searchText: 'a', expected: 2},
    {fullText : 'abab', searchText: 'a', expected: 2},
    {fullText : 'abcdefdvbhibjkb', searchText: 'b', expected: 4},
    {fullText : 'abccded', searchText: 'cc', expected: 1},
    {fullText : 'abccded', searchText: 'd', expected: 2},
];

describe('Static tests', () =>
    static.forEach(testCase =>
        it(`For '${testCase.fullText}' and '${testCase.searchText}' it should be ${testCase.expected}`, () =>
            chai.assert.strictEqual(substringCount(testCase.fullText, testCase.searchText), testCase.expected)
        )
    )
);