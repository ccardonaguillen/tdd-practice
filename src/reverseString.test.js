import reverseString from './reverseString.js';

test('Only letters', () => {
    expect(reverseString('asdf')).toBe('fdsa');
});

test('Letters + numbers', () => {
    expect(reverseString('asd123fgh')).toBe('hgf321dsa');
});

test('Several words', () => {
    expect(reverseString('this is a test')).toBe('tset a si siht');
});

test('Not a string', () => {
    expect(() => reverseString(1234)).toThrow(TypeError);
});
