class Solution {
    twoSum(nums, target) {

       var sumchk = new Map();
        
        for (var i=0;i<nums.length ;i++){
            
            var currentval=nums[i];
            
            var tofind = target-currentval;

            if (sumchk.has(tofind)){
                return [sumchk.get(tofind),i];
            }

            sumchk.set(currentval , i)
        }
    
    }
}
