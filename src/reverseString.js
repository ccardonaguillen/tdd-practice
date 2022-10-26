function reverseString(string) {
    if (typeof string != 'string') throw new TypeError();

    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }

    return reversed;
}

export default reverseString;
