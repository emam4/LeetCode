function twoSum(nums: number[], target: number): number[] {
    for(let i = 0 ; i < nums.length ; i++) {
        const find: number = target - nums[i];
        const index = nums.indexOf(find);
        if(index > -1 && index !== i) return [i,index]
    }
};