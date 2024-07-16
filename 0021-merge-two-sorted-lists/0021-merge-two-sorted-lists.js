/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function(list1, list2) {
//     let newList = tail = new ListNode();
    
//     while(list1 && list2) {
//         const is2Greater = list2.val >= list1.val;
//         const is2Less = list2.val < list1.val;

//         if(is2Greater) {
//             tail.next = list1;
//             list1 = list1.next
//         }
        
//         if(is2Less) {
//             tail.next = list2;
//             list2 = list2.next
//         }
        
//         tail = tail.next
//     }
    
//     tail.next = list1 || list2;

//     return newList.next;
// };




var mergeTwoLists = function(l1, l2) {
        let newList = tail = new ListNode();
        while(l1 && l2) {
            let diff = l2.val - l1.val;
            if(diff >= 0) { // l2 greater
                tail.next =l1;
                l1 = l1.next
            }
            
            if(diff < 0) { // l2 greater
                tail.next =l2;
                l2 = l2.next
            }
            tail = tail.next;
        }
    tail.next = l1 || l2

    return newList.next;
}








