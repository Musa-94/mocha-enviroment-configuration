const { assert } = require('chai');
const Algorithms = require('../index.js');

describe('sum', () => {
    let algorithms;

    beforeEach(() => {
        algorithms = new Algorithms();
    });

    it('should return 4, when firstNum = 2, secondNum = 2', () => {
        const firstNum = 2;
        const secondNum = 2;
        const expected = 4;

        const actual = algorithms.sum(firstNum, secondNum);

        assert.deepEqual(actual, expected);
    });

    it('should return 8, when firstNumber = 2, secondNumber = 4', () => {
        const firstNum = 2;
        const secondNum = 4;
        const expected = 6;

        const actual = algorithms.sum(firstNum, secondNum);

        assert.deepEqual(actual, expected);
    });
});