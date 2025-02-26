// backend/subtract.test.js
const subtract = require('./subtract');

test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('subtracts 0 - 0 to equal 0', () => {
    expect(subtract(0, 0)).toBe(0);
});

test('subtracts negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
});

test('subtracts a number from itself to equal 0', () => {
    expect(subtract(7, 7)).toBe(0);
});

test('subtracts a larger number from a smaller one', () => {
    expect(subtract(3, 5)).toBe(-2);
});
