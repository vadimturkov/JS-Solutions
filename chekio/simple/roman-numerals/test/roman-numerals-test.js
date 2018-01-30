const basic = [
    {
        "input": 1,
        "answer": "I"
    },
    {
        "input": 10,
        "answer": "X"
    },
    {
        "input": 50,
        "answer": "L"
    },
    {
        "input": 100,
        "answer": "C"
    },
    {
        "input": 500,
        "answer": "D"
    },
    {
        "input": 1000,
        "answer": "M"
    },
    {
        "input": 3999,
        "answer": "MMMCMXCIX"
    },
    {
        "input": 99,
        "answer": "XCIX"
    },
    {
        "input": 88,
        "answer": "LXXXVIII"
    },
    {
        "input": 587,
        "answer": "DLXXXVII"
    },
    {
        "input": 2387,
        "answer": "MMCCCLXXXVII"
    },
    {
        "input": 3888,
        "answer": "MMMDCCCLXXXVIII"
    },
    {
        "input": 76,
        "answer": "LXXVI"
    },
    {
        "input": 6,
        "answer": "VI"
    },
    {
        "input": 13,
        "answer": "XIII"
    },
    {
        "input": 44,
        "answer": "XLIV"
    }
];

const extra = [
    {
        "input": 164,
        "answer": "CLXIV"
    },
    {
        "input": 3810,
        "answer": "MMMDCCCX"
    },
    {
        "input": 1256,
        "answer": "MCCLVI"
    },
    {
        "input": 473,
        "answer": "CDLXXIII"
    },
    {
        "input": 817,
        "answer": "DCCCXVII"
    },
    {
        "input": 3766,
        "answer": "MMMDCCLXVI"
    },
    {
        "input": 663,
        "answer": "DCLXIII"
    },
    {
        "input": 2318,
        "answer": "MMCCCXVIII"
    },
    {
        "input": 2346,
        "answer": "MMCCCXLVI"
    },
    {
        "input": 602,
        "answer": "DCII"
    },
    {
        "input": 452,
        "answer": "CDLII"
    },
    {
        "input": 1605,
        "answer": "MDCV"
    },
    {
        "input": 3465,
        "answer": "MMMCDLXV"
    },
    {
        "input": 834,
        "answer": "DCCCXXXIV"
    },
    {
        "input": 1558,
        "answer": "MDLVIII"
    },
    {
        "input": 1373,
        "answer": "MCCCLXXIII"
    },
    {
        "input": 3828,
        "answer": "MMMDCCCXXVIII"
    },
    {
        "input": 378,
        "answer": "CCCLXXVIII"
    },
    {
        "input": 3155,
        "answer": "MMMCLV"
    },
    {
        "input": 2900,
        "answer": "MMCM"
    },
    {
        "input": 2075,
        "answer": "MMLXXV"
    },
    {
        "input": 579,
        "answer": "DLXXIX"
    },
    {
        "input": 3914,
        "answer": "MMMCMXIV"
    },
    {
        "input": 1403,
        "answer": "MCDIII"
    },
    {
        "input": 2407,
        "answer": "MMCDVII"
    },
    {
        "input": 716,
        "answer": "DCCXVI"
    },
    {
        "input": 1047,
        "answer": "MXLVII"
    },
    {
        "input": 571,
        "answer": "DLXXI"
    },
    {
        "input": 1131,
        "answer": "MCXXXI"
    },
    {
        "input": 777,
        "answer": "DCCLXXVII"
    },
    {
        "input": 3272,
        "answer": "MMMCCLXXII"
    },
    {
        "input": 2257,
        "answer": "MMCCLVII"
    },
    {
        "input": 3072,
        "answer": "MMMLXXII"
    }
];

const assert = chai.assert;

describe('Most wanted letter: Basic tests', function () {
    basic.forEach(testCase => {
        it(`For ${testCase['input']} should be ${testCase['answer']}`, function () {
            assert.equal(romanNumerals(testCase['input']), testCase['answer']);
        });
    });
});

describe('Most wanted letter: Extra tests', function () {
    extra.forEach(testCase => {
        it(`For ${testCase['input']} should be ${testCase['answer']}`, function () {
            assert.equal(romanNumerals(testCase['input']), testCase['answer']);
        });
    });
});