/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //Edge case: Empty list or single node that cannot have cycle
    if (!head || !head.next) {
        return false
    }

    let slow = head 
    let fast = head

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next //Fast pointer move forward 2 step per loop
        slow = slow.next //Slow pointer move forward 1 step per loop
        if (fast === slow) { //If they meet, a cycle exist -> return true
            return true
        }
    }

    return false
};