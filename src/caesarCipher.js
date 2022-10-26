function caesarCipher(string, key = 1) {
    string = String(string);

    return string
        .split('')
        .map((char) => {
            // If char is not a letter do nothing
            if (!char.match(/[a-z]/i)) return char;

            // CharCode for "A" = 65 and for "a" = 97
            const codeStartChar = char.match(/[A-Z]/) ? 65 : 97;
            // For each letter, sum key to charCode wrapping around 26 starting
            // from "A" or "a" if it is lowercase or uppercase, respectively
            // Then return char with resulting code
            return String.fromCharCode(
                ((char.charCodeAt() - codeStartChar + key) % 26) + codeStartChar
            );
        })
        .join('');
}

export default caesarCipher;
