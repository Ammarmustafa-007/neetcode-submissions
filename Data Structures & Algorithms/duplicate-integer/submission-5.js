class Solution {
    hasDuplicate(nums) {
        for (var i = 0; i < nums.length; i++) {
            var a = nums[i];

            for (var f = i + 1; f < nums.length; f++) {
                var b = nums[f];

                if (a == b) {
                    return true;
                }
            }
        } 
        return false;
    }
}