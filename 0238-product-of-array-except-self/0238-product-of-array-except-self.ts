function productExceptSelf(nums: number[]): number[] { // [1,2,3,4]
    let rightPord = []                                 //  0,1,2,3
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) rightPord.push(1) // [1, 1, 1*2, 6]
        else {
            rightPord.push(rightPord[i - 1] * nums[i - 1])
        }
    }
    console.log(rightPord)

    let leftProd = []

    for (let i = nums.length-1; i >= 0; i--) {
        if (i === nums.length-1) leftProd[i] = 1
        else {
            leftProd[i] = leftProd[i+1] * nums[i+1]
        }
    }

    console.log(leftProd)

    let finalAns = []
    for (let i = 0; i < nums.length; i++) {
        finalAns.push(rightPord[i]*leftProd[i])
    }

    return finalAns

};