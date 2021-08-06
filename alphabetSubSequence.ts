/*checl wheather the given string is a subsequence opf the plaintext alphabet.

Example
    * For S ='effg' or S ='cdce', the output should be alphabetSubSequence(s) = false
    * For S = "ace" or S ='bxz',  the output should be alphabetSubSequence(s) = true
    
Hints
    * Sizeproperty
    * charCodeAt()
Input/Ouput
    * [excution time limit] 5 seconds (ts)
    * [input] string s

Guaranted constraints:

2 <= s.length <= 15.

[output] boolean

true if the given string is a subsequence of the alphbet, false otherwise */



function alphabetSubSequence(s: string): boolean {
    const chars: string[] = s.split('');
    const charValues : number[] = [];

    chars.forEach((char: string) => {
        charValues.push(char.charCodeAt(0))
    });

    if (new Set(charValues).size !== charValues.length) {
        return false;
    };

    for (let i =0; i < charValues.length - 1; i++){
        if (charValues[i] >= charValues [i+1]) {
            return false;
        };
    }
    return true;

}

console.log(alphabetSubSequence('effg'));
console.log(alphabetSubSequence('cdce'));
console.log(alphabetSubSequence('ace'));
console.log(alphabetSubSequence('bxz'));
