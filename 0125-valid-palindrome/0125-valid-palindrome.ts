function isPalindrome(s: string): boolean {
    const text = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().trim();
    
    let front: number = 0;
    let back: number = text.length -1;
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