const anagrams = function(word) {
    // Base case
    if (word.length === 0) {
        return word;
    }
    // General case
    for (let i = 0; i < word.length; i++) {
        // Loop through each letter
        // Use letter as a prefix
        // Pass sliced version of string through function?
    };

}

let word = 'east';
// e
//  ast
//  ats
//  sat
//  sta
//  tas
//  tsa
console.log(anagrams(word));