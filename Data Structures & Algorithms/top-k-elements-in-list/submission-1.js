class Solution {
    topKFrequent(nums, k) {
        let freqchk = new Map();

        for (let num of nums) {
            let currentcount = freqchk.get(num) || 0;
            freqchk.set(num, currentcount + 1);
        }

        // 1. Create the buckets (using <= to handle frequency equal to array length)
        let buckets = [];
        for (let i = 0; i <= nums.length; i++) {
            buckets.push([]);
        }

        // 2. Fill the buckets
        for (let [num, freq] of freqchk) {
            buckets[freq].push(num);
        }

        // 3. Collect the top K elements
        let result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i].length > 0) {
                // Add numbers from this frequency bucket to result
                result.push(...buckets[i]);
            }
            // Once we have K elements, we are done!
            if (result.length >= k) return result.slice(0, k);
        }
    }
}