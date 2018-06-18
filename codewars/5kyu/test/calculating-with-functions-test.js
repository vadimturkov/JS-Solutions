describe('Simple static test', () => {
    it('7 * 5 = 35', () => chai.assert.equal(seven(times(five())), 35));
    it('4 + 9 = 13', () => chai.assert.equal(four(plus(nine())), 13));
    it('8 - 3 = 5', () => chai.assert.equal(eight(minus(three())), 5));
    it('6 / 2 = 3', () => chai.assert.equal(six(dividedBy(two())), 3));
});

const numberFunctions = {
    1: value => one(value),
    2: value => two(value),
    3: value => three(value),
    4: value => four(value),
    5: value => five(value),
    6: value => six(value),
    7: value => seven(value),
    8: value => eight(value),
    9: value => nine(value)
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

describe('Random Tests:', () => {
    describe('Addition', () => {
        for (let i = 0; i < 50; i++) {
            const left = getRandomInt(1, 10);
            const right = getRandomInt(1, 10);
            it(`${left} + ${right} = ${left + right}`, () => 
                chai.assert.equal(numberFunctions[left](plus(numberFunctions[right]())), left + right)
            );
        }
    });

    describe('Subtraction', () => {
        for (let i = 0; i < 50; i++) {
            const left = getRandomInt(1, 10);
            const right = getRandomInt(1, 10);
            it(`${left} - ${right} = ${left - right}`, () => 
                chai.assert.equal(numberFunctions[left](minus(numberFunctions[right]())), left - right)
            );
        }
    });

    describe('Multiplication', () => {
        for (let i = 0; i < 50; i++) {
            const left = getRandomInt(1, 10);
            const right = getRandomInt(1, 10);
            it(`${left} * ${right} = ${left * right}`, () => 
                chai.assert.equal(numberFunctions[left](times(numberFunctions[right]())), left * right)
            );
        }
    });

    describe('Division', () => {
        for (let i = 0; i < 50; i++) {
            const left = getRandomInt(1, 10);
            const right = getRandomInt(1, 10);
            it(`${left} / ${right} = ${Math.floor(left / right)}`, () => 
                chai.assert.equal(numberFunctions[left](dividedBy(numberFunctions[right]())), Math.floor(left / right))
            );
        }
    });
});