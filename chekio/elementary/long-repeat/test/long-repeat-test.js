const basic = [
    {
        "input": "sdsffffse",
        "answer": 4
    },
    {
        "input": "ddvvrwwwrggg",
        "answer": 3
    }
];

const extra = [
    {
        "input": "",
        "answer": 0
    },
    {
        "input": "abababaab",
        "answer": 2
    },
    {
        "input": "abababa",
        "answer": 1
    },
    {
        "input": "aa",
        "answer": 2
    }
];

const assert = chai.assert;

describe('Long repeat: Basic tests', function () {
    basic.forEach(testCase => {
        it(`For ${testCase['input']} should be ${testCase['answer']}`, function () {
            assert.equal(longRepeat(testCase['input']), testCase['answer']);
        });
    });
});

describe('Long repeat: Extra tests', function () {
    extra.forEach(testCase => {
        it(`For ${testCase['input']} should be ${testCase['answer']}`, function () {
            assert.equal(longRepeat(testCase['input']), testCase['answer']);
        });
    });
});
