class Solution {
    isAnagram(s, t) {
        // If lengths differ, they can't be anagrams
        if (s.length !== t.length) return false;

        // Sort both and compare
        let sigS = s.split('').sort().join('');
        let sigT = t.split('').sort().join('');

        return sigS === sigT;
    }
}