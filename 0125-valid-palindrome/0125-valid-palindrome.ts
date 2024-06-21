function isPalindrome(s: string): boolean {
    const text = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().trim();
    
    // if(s.length === 1 || s.length === 2) return true;
    // if(/^\s*$/.test(s)) return true;
    // if(text.length %2 === 0) return false;
    // if(text.length === 1) return true;
    
    let front: number = 0;              // 0  1  2  3
    let back: number = text.length -1;  // 5  4  3  2
    while(front < back) {
        if(text[front] !== text[back]) {
            return false;
            break;
        }
        front++;
        back--;
    }
    return true
};