const multiply = require('./index');

test('multiplies 2', () => {
    expect(multiply(2)).toBe(4);
})

test('multiplies 10', () => {
    expect(multiply(10)).toBe(100);
})

test('multiplies 5', () => {
    expect(multiply(5)).toBe(25);
})
