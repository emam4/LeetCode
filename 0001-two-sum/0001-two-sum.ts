function twoSum(nums: number[], target: number): number[] {
    let indexing = {}

    for(let i = 0 ; i < nums.length ; i++) {
        indexing[`${nums[i]}`] = i
    }

    for(let i = 0 ; i < nums.length ; i++) {
        const myTarget = target - nums[i]
        const indexed = indexing[myTarget]
        if(i === indexed) continue
        if(typeof indexed === 'number') return [i , indexed]
    }
};