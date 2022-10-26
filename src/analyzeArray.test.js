import analyzeArray from './analyzeArray.js';

test('Standard case', () => {
    expect(analyzeArray([1, 2, 3, 4])).toEqual({ average: 2.5, min: 1, max: 4, length: 4 });
});

test('One element', () => {
    expect(analyzeArray([1])).toEqual({ average: 1, min: 1, max: 1, length: 1 });
});

test('Empty array', () => {
    expect(() => analyzeArray([])).toThrow('Array is empty');
});

test('Contains not numbers', () => {
    expect(() => analyzeArray([1, 2, 3, 'a'])).toThrow(TypeError);
});

test('Not an array', () => {
    expect(() => analyzeArray('123a')).toThrow(TypeError);
});
