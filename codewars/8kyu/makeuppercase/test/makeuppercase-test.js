const basic = [
    {input: 'hello', expected: 'HELLO'},
    {input: 'hello world', expected: 'HELLO WORLD'},
    {input: 'hello world !', expected: 'HELLO WORLD !'},
    {input: 'heLlO wORLd !', expected: 'HELLO WORLD !'},
    {input: '1,2,3 hello world!', expected: '1,2,3 HELLO WORLD!'}
];

describe('Basic tests', () =>
    basic.forEach(testCase =>
        it(`For ${testCase.input} it should be ${testCase.expected}`, () =>
            chai.assert.equal(makeUpperCase(testCase.input), testCase.expected)
        )
    )
);

const letters = 'abcdefgh ijklmnopq rstuvwxyz ABCDEFGHIJ QLMNOPQRSTUVWXYZ 1234567890!';
describe('Random tests', () => {
    for (let i = 0; i < 95; i++) {
        let word = '';
        for (let j = 0; j < Math.floor(Math.random() * 99) + 1; j++) {
            word += letters[Math.floor(Math.random() * letters.length)];
        }

        it(`For ${word} it should be ${word.toUpperCase()}`, () =>
            chai.assert.equal(makeUpperCase(word), word.toUpperCase())
        );
    }
});