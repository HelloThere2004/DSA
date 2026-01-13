/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;       
    let curr = head;       
    
    while (curr !== null) {
        // 1. Store the next node to avoid losing reference
        // (Original: Create a temp variable to store the next node REF or Pointer)
        let tempNext = curr.next; 

        // 2. Reverse the link: point current node to previous node
        // (Original: Make the current node has the next pointer value become the previus node)
        curr.next = prev; 

        // 3. Move 'prev' pointer forward
        // (Original: The previous become the current node)
        prev = curr; 

        // 4. Move 'curr' pointer forward to the stored next node
        // (Original: The current move to the next Node by load the data from tempNext variable)
        curr = tempNext; 
    }
    
    // 'prev' is now the new head of the reversed list
    return prev;
};