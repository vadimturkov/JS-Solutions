describe('Static test', () => {
    it('Empty array should return 0', () => 
        chai.assert.strictEqual(sum([]), 0)
    );

    it('One number in array should be that number', () => {
        chai.assert.strictEqual(sum([5]), 5);
        chai.assert.strictEqual(sum([1251]), 1251);
    });

    it('One negative number in array should be that number', () => {
        chai.assert.strictEqual(sum([-1]), -1);
        chai.assert.strictEqual(sum([-51]), -51);
    });

    it('Multiple numbers should sum to correct total', () => 
        chai.assert.strictEqual(sum([1, 5.2, 4, 0]), 10.2)
    );

    it('Multiple numbers with negatives should sum to correct total', () => 
        chai.assert.strictEqual(sum([1, 5.2, 4, 0, -1]), 9.2)
    );
});

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

describe('Random tests', () => {
    it('One number in array should be that number', () => {
        for (let i = 0; i < 5; i++) {
            const randomNumber = getRandomInt(0, 10000);
            chai.assert.strictEqual(sum([randomNumber]), randomNumber);
        }
    });

    it('One negative number in array should be that number', () => {
        for (let i = 0; i < 5; i++) {
            const randomNumber = -1 * getRandomInt(0, 10000);
            chai.assert.strictEqual(sum([randomNumber]), randomNumber);
        }
    });

    it('Multiple numbers should sum to correct total', () => {
        const input = [];
        let expectedSum = 0;

        for (let i = 0; i < 5; i++) {
            const randomNumber = getRandomInt(0, 10000);
            input.push(randomNumber);
            expectedSum += randomNumber;
        }

        chai.assert.strictEqual(sum(input), expectedSum);
    });

    it('Multiple numbers with negatives should sum to correct total', () => {
        const input = [];
        let expectedSum = 0;

        for (let i = 0; i < 5; i++) {
            const randomNumber = getRandomInt(0, 10000);
            input.push(randomNumber);
            expectedSum += randomNumber;
        }

        for (let i = 0; i < 5; i++) {
            const randomNumber = -1 * getRandomInt(0, 10000);
            input.push(randomNumber);
            expectedSum += randomNumber;
        }

        chai.assert.strictEqual(sum(input), expectedSum);
    });
});