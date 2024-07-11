/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slowP = head;
    let fastP = head;
    
    while(fastP && fastP.next) {
        fastP = fastP.next.next;
        slowP = slowP.next;
        if(fastP === slowP) return true
    }
    
    return false;
};