const static = [
    {input: ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'], expected: ['WEST']},
    {input: ['NORTH','SOUTH','SOUTH','EAST','WEST','NORTH'], expected: []},
    {input: ['NORTH','SOUTH','SOUTH','EAST','WEST','NORTH','NORTH'], expected: ['NORTH']},
    {input: ['EAST', 'EAST', 'WEST', 'NORTH', 'WEST', 'EAST', 'EAST', 'SOUTH', 'NORTH', 'WEST'], expected: ['EAST', 'NORTH']},
    {input: ['NORTH', 'EAST', 'NORTH', 'EAST', 'WEST', 'WEST', 'EAST', 'EAST', 'WEST', 'SOUTH'], expected: ['NORTH', 'EAST']},
    {input: ['NORTH', 'WEST', 'SOUTH', 'EAST'], expected: ['NORTH', 'WEST', 'SOUTH', 'EAST']}
];

describe('Static tests', () =>
    static.forEach(testCase =>
        it(`For ${testCase.input.join(', ')} it should be ${testCase.expected.join(', ')}`, () =>
            chai.assert.deepEqual(directionsReduction(testCase.input), testCase.expected)
        )
    )
);