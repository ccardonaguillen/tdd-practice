import capitalize from './capitalize.js';

test('Lowercase', () => {
    expect(capitalize('test')).toBe('Test');
});

test('Capitalized', () => {
    expect(capitalize('Test')).toBe('Test');
});

test('All CAPS', () => {
    expect(capitalize('TEST')).toBe('TEST');
});

test('Several words', () => {
    expect(capitalize('this is a sentence')).toBe('This is a sentence');
});

test('Numbers + letters', () => {
    expect(capitalize('1234adas')).toBe('1234adas');
});

test('Symbols + letters', () => {
    expect(capitalize('#@!adas')).toBe('#@!adas');
});

test('Not a string', () => {
    expect(() => capitalize(1234)).toThrow(TypeError);
});
