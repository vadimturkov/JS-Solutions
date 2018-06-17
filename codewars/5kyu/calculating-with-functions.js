const number = (value, op) => op ? op(value) : value;

const zero = op => number(0, op);
const one = op => number(1, op);
const two = op => number(2, op);
const three = op => number(3, op);
const four = op => number(4, op);
const five = op => number(5, op);
const six = op => number(6, op);
const seven = op => number(7, op);
const eight = op => number(8, op);
const nine = op => number(9, op);

const plus = right => left => left + right;
const minus = right => left => left - right;
const times = right => left => left * right;
const dividedBy = right => left => left / right;