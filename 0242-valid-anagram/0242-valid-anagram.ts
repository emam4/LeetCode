function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    if (s === t) return true;

    const sTable = {}
    for (let i = 0; i < s.length; i++) {
        if(sTable[s[i]]) sTable[s[i]]++
        else sTable[s[i]] = 1
    }


    for (let i = 0; i < t.length; i++) {
        if(sTable[t[i]]) sTable[t[i]]--
        if(sTable[t[i]] === 0) delete sTable[t[i]]
    }

    if(Object.keys(sTable).length) return false
    return true;

};