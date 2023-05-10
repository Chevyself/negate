function startsWithIgnoreCase(string: string, prefix: string): boolean {
    return string.toLowerCase().startsWith(prefix.toLowerCase());
}

export {startsWithIgnoreCase}