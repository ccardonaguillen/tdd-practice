import caesarCipher from './caesarCipher.js';

test('All letters key=1', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('All letters key=13', () => {
    expect(caesarCipher('abc', 13)).toBe('nop');
});

test('Uppercase', () => {
    expect(caesarCipher('ABC', 1)).toBe('BCD');
});

test('Mixed case', () => {
    expect(caesarCipher('AbC')).toBe('BcD');
});

test('Lowercase wrapping key=3', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Uppercase wrapping key=3', () => {
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
});

test('Several words', () => {
    expect(caesarCipher('this is a sentence', 1)).toBe('uijt jt b tfoufodf');
});

test('Numbers and symbols', () => {
    expect(caesarCipher('abc123 @#def456', 1)).toBe('bcd123 @#efg456');
});
