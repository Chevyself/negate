function startsWithIgnoreCase(string: string, prefix: string): boolean {
    return string.toLowerCase().startsWith(prefix.toLowerCase());
}

/**
 * Matches the casing from @param a to @param b. If @param a is shorter than @param b then the remaining characters
 * will cased with the latest character from @param a. If @param a is longer than @param b then the remaining characters
 * will be ignored.
 * 
 * @param a the string to match the casing from
 * @param b the string to match the casing to
 */
function matchCasing(a: string, b: string) {
    let result = "";
    for (let i = 0; i < b.length; i++) {
        const bChar = b.charAt(i);
        const aChar = i < a.length ? a.charAt(i) : a.charAt(a.length - 1);
        if (aChar === aChar.toUpperCase()) {
            result += bChar.toUpperCase();
        } else {
            result += bChar.toLowerCase();
        }
    }
    return result;
}

export {startsWithIgnoreCase, matchCasing}