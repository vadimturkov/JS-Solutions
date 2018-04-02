describe('Counter Test', () => {
    const counter = new Counter();

    it('initialization', () =>
        chai.assert.equal(counter.getValue(), 0, 'initial value must be 0')
    );
    it('increase', () => {
        counter.increase();
        chai.assert.equal(counter.getValue(), 1,
            'counter value must be increased by 1 each time increase() is called');
    });
    it('reset', () => {
        counter.reset();
        chai.assert.equal(counter.getValue(), 0, 'counter value must be 0 after reset');
    });
});