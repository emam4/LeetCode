function topKFrequent(nums: number[], k: number): number[] {
    let count = {}

    for(let i = 0 ; i < nums.length ; i++) {
        const curr = nums[i]
        if(count[curr]) count[curr]++
        else count[curr] = 1
    }

    const arrCount = Object.keys(count).map((key) => {
        return {
            value: key,
            count: count[key]
        }
    })

    console.log(arrCount)

    arrCount.sort((a, b) => b.count - a.count);


    let finalAns = []
    for(let i = 0 ; i < k ; i++) {
        const ele = arrCount.shift()
        finalAns.push(Number(ele.value))
    }
    return finalAns
};