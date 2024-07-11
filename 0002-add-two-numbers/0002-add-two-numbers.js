/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let newList = tail = new ListNode(0);
    let carry = 0;
    while(l1 || l2 || carry) {
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        let val;
        if(sum >= 10 ) {
            carry = 1;
            sum-=10
        } else { carry = 0 }
        // const val = sum % 10;
        // carry = Math.floor(sum / 10);
        
        tail.next = new ListNode(sum);
        tail = tail.next;
        
        l1 = l1?.next;
        l2 = l2?.next;
    }
    
    return newList.next
};