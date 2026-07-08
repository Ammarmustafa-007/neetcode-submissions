class Solution {
    groupAnagrams(strs) {
        let chkana = new Map();

        for (let s of strs) {
            // 1. Create the Signature (The sorting happens here!)
            // We turn the string into an array, sort it, and join it.
            let key = s.split('').sort().join('');

            // 2. Check if we have seen this signature before
            if (!chkana.has(key)) {
                chkana.set(key, []); // Create a new drawer
            }

            // 3. Push the original word into the drawer
            chkana.get(key).push(s);
        }

        return Array.from(chkana.values());
    }
}