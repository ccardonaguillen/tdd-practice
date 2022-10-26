function analyzeArray(array) {
    if (!Array.isArray(array)) throw new TypeError('Not an array');
    if (array.some((val) => typeof val !== 'number'))
        throw new TypeError('Array can only contain numbers');

    if (array.length === 0) throw new Error('Array is empty');

    return {
        average: array.reduce((prev, curr) => prev + curr, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    };
}

export default analyzeArray;
