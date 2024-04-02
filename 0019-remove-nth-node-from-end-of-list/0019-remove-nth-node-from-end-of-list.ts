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


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy: ListNode = new ListNode(0, head);
    let rPointer: ListNode = head;
    let lPointer: ListNode = dummy;
    // set the rPointer
    let counter: number = 0;
    let headHolder: ListNode = head;
    while (n > 0) {
        rPointer = rPointer.next;
        n -= 1;
    }
    
    while(rPointer) {
        rPointer = rPointer.next;
        lPointer = lPointer.next;
    }
    
    lPointer.next = lPointer.next.next;
    return dummy.next;
};