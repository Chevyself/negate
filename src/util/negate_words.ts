/**
 * Represents two words that are opposites of each other. One is the positive word, the other is the negative word.
 */
class WordPair {
    positive: string;
    negative: string;
    constructor(positive: string, negative: string) {
        this.positive = positive;
        this.negative = negative;
    }

    flip(word: string): string {
        if (word.toLowerCase() === this.positive) {
            return this.negative;
        } else if (word.toLowerCase() === this.negative) {
            return this.positive;
        } else {
            return word;
        }
    }
}

const wordPairs: WordPair[] = [
    new WordPair("si", "no"),
    new WordPair("amo", "odio"),
    new WordPair("siempre", "jamas"),
];

function getWordPair(word: string): WordPair | undefined {
    word = word.toLowerCase();
    for (const wordPair of wordPairs) {
        if (wordPair.positive === word || wordPair.negative === word) {
            return wordPair;
        }
    }
    return undefined;
}

export {wordPairs, WordPair, getWordPair}