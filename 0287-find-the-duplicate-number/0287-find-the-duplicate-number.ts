function findDuplicate(nums: number[]): number {
    
    let numsSet = new Set();
    for(let i = 0; i < nums.length ; i++) {
        if(numsSet.has(nums[i])) return nums[i]
        else numsSet.add(nums[i]);
    }
};