/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var counter = 0;
    var pointer1 = head;
    while(pointer1.next !== null) {
        counter++;
        pointer1 = pointer1.next;
    }

    var elementToDeleteIndex = counter - n;
    if (elementToDeleteIndex < 0) {
        return head.next;
    }
    var pointer2 = head;

    for(var i = 0; i < elementToDeleteIndex ; i++) {
        pointer2 = pointer2.next;
    }
    
    if (pointer2.next !== null) {
        pointer2.next = pointer2.next.next;
    } else {
        pointer2.next = null;
    }
    return head;
};
