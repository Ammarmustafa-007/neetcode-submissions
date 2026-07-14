class Solution {
    encode(strs) {
        let encoded = "";
        for (let word of strs) {
            encoded += word.length + "#" + word;
        }
        return encoded;
    }

    decode(encoded_string) {
        let result = [];
        
        for (let i = 0; i < encoded_string.length; ) {

            let hashIndex = encoded_string.indexOf('#', i);
            
            let length = Number(encoded_string.substring(i, hashIndex));
            
            let wordStart = hashIndex + 1;
            
            let word = encoded_string.substring(wordStart, wordStart + length);
            result.push(word);
            
            i = wordStart + length;
        }
        
        return result;
    }
}