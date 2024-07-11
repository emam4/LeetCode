var lengthOfLongestSubstring = function(s) {
    let charSet = new Set();
    let l=0;
    let longestSub=0;
    for(let r = 0; r < s.length ; r++) {
        while(charSet.has(s[r])) {
            charSet.delete(s[l]);
            l+=1;
        }
        charSet.add(s[r]);
        longestSub = Math.max(longestSub,  r-l+1)
    }
    
    return longestSub;
};

