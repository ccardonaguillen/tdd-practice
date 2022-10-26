function capitalize(string) {
    if (typeof string != 'string') throw new TypeError();
    return string[0].toUpperCase() + string.slice(1);
}

export default capitalize;
