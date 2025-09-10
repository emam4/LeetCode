function groupAnagrams(strs: string[]): string[][] {
    let map: Record<string: string[]> = {}
    for(let i = 0 ; i < strs.length ; i++) {
        const sortedStr = strs[i].split('').sort().join('')
        if(!map[sortedStr]) map[sortedStr] = []
        map[sortedStr].push(strs[i])
    }
    return Object.values(map)
}