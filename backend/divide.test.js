// division.test.js
const divide = require('./divide');

test('divides 10 by 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('divides a number by 1 to return the same number', () => {
    expect(divide(7, 1)).toBe(7);
});

test('divides 0 by any number to equal 0', () => {
    expect(divide(0, 5)).toBe(0);
});

test('divides negative numbers correctly', () => {
    expect(divide(-10, 2)).toBe(-5);
    expect(divide(10, -2)).toBe(-5);
    expect(divide(-10, -2)).toBe(5);
});

test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});

test('divides floating point numbers correctly', () => {
    expect(divide(7.5, 2.5)).toBe(3);
    expect(divide(1, 3)).toBeCloseTo(0.3333, 4); // Comparaison avec précision
});
