import {startsWithIgnoreCase, matchCasing} from './strings';
import {wordPairs, WordPair, getWordPair} from './negate_words';

/**
     * Flips positive sentences to negative. This only works on first person sentences, as it is not possible
     * to determine the subject of the sentence.
     * 
     * @param string the sentence to flip
     */
function flip(string: string): string {
    if (string.length === 0) return "";
    let flipped = string;
    // If the string starts with 'no' remove it
    if (startsWithIgnoreCase(flipped, "no ")) {
        flipped = flipped.substring(3);
    } else {
        flipped = "No " + flipped;
    }
    return flipped;
}

function flipSentence(sentence: string): string {
    if (sentence.length < 1) return "";
    // split sentence using spaces ' '
    const words = sentence.match(/[\w']+|[^\w\s]+/g);
    // loop through each word
    let result = "";
    if (words == null) {
        return sentence;
    }
    for (let i : number = 0; i < words.length; i++) {
        const word = words[i];
        // get word pair
        const wordPair = getWordPair(word);
        // if word pair exists
        if (wordPair !== undefined) {
            const flip = wordPair.flip(word);
            result += matchCasing(word, flip) + " ";
        } else {
            result += word + " ";
        }
    }
    return result;
}

export {flip, flipSentence}