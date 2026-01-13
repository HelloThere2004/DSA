/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head)
    
    let firstPointer = dummy
    let secondPointer = dummy 

    for (let i = 0; i <= n; i++) {
        firstPointer = firstPointer.next
    }

    while (firstPointer !== null) {
        firstPointer = firstPointer.next
        secondPointer = secondPointer.next
    }

    secondPointer.next = secondPointer.next.next
    return dummy.next;
};