/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let l3: ListNode = new ListNode(0, null);
    let dummy: ListNode = l3;
    let carry: number = 0;
    // 1 2 9 9 9 
    // 4 5 6
    while(l1 && l2) {
        let sum = l1.val + l2.val + carry; // 5
        if(sum >= 10) {
            sum-=10;
            carry=1;
        } else carry = 0;
        dummy.next = new ListNode(sum, null);
        l1 = l1.next;
        l2 = l2.next;
        dummy = dummy.next;
    } // 5  7  5
                         // carry = 1
    while(l1) {
        let sum = l1.val + carry;
        if(sum >= 10) {
            sum-=10;
            carry=1;
        } else carry = 0;
        dummy.next = new ListNode(sum);
        dummy = dummy.next;
        l1 = l1.next;
    }
    
    while(l2) {
        let sum = l2.val + carry;
        if(sum >= 10) {
            sum-=10;
            carry=1;
        } else carry = 0;
        dummy.next = new ListNode(sum);
        dummy = dummy.next;
        l2 = l2.next;
    }
    if(carry) dummy.next = new ListNode(carry);

    return l3.next;
};