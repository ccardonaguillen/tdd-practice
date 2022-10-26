function calculator(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) throw new TypeError();

    const sum = () => num1 + num2;

    const sub = () => num1 - num2;

    const times = () => num1 * num2;

    const div = () => {
        if (num2 === 0) throw new Error('Dividing by zero');

        return num1 / num2;
    };

    return {
        sum,
        sub,
        div,
        times,
    };
}

export default calculator;
