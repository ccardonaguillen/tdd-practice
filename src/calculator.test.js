import calculator from './calculator.js';

test('Sum', () => {
    expect(calculator(1, 2).sum()).toBe(3);
});

test('Sum negative result', () => {
    expect(calculator(-2, 1).sum()).toBe(-1);
});

test('Subtract', () => {
    expect(calculator(3, 2).sub()).toBe(1);
});

test('Subtract negative result', () => {
    expect(calculator(2, 3).sub()).toBe(-1);
});

test('Multiply', () => {
    expect(calculator(3, 2).times()).toBe(6);
});

test('Multiply negative result', () => {
    expect(calculator(-3, 2).times()).toBe(-6);
});

test('Divide', () => {
    expect(calculator(4, 2).div()).toBe(2);
});

test('Divide decimal result', () => {
    expect(calculator(3, 2).div()).toBe(1.5);
});

test('Divide by zero', () => {
    expect(() => calculator(2, 0).div()).toThrow('Dividing by zero');
});

test('Not numbers', () => {
    expect(() => calculator('a', 1).sum()).toThrow(TypeError);
});
