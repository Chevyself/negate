import {startsWithIgnoreCase} from './strings';

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

export {flip}