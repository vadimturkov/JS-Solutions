const static = [
    {input: ['arp', 'live', 'strong'], expected: ['arp', 'live', 'strong']},
    {input: ['xyz', 'live', 'strong'], expected: ['live', 'strong']},
    {input: ['live', 'strong', 'arp'], expected: ['arp', 'live', 'strong']},
    {input: ['live', 'strong', ,'lyal', 'lysh', 'arp'], expected: ['arp', 'live', 'strong']},
    {input: ['tarp', 'mice', 'bull'], expected: []},
    {input: [], expected: []},
];

describe('Static tests', () => {
    static.forEach(testCase =>
        it(`For [${testCase.input.join(', ')}] it should be [${testCase.expected.join(', ')}]`, () =>
            chai.assert.deepEqual(inArray(testCase.input, ['lively', 'alive', 'harp', 'sharp', 'armstrong']), testCase.expected)
        )
    )
});