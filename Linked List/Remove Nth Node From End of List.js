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
    let sentinel=new ListNode()
    sentinel.next=head
    let length=0
    // calculate the length of the linked list
    while(head){
        head=head.next
        length++
    }
    // find the position of the node to be removed from the start of the linked list
    let prev=sentinel
    let prevpos=length-n
    for(let i=0;i<prevpos;i++){
        prev=prev.next
    }
    prev.next=prev.next.next
    return sentinel.next
};
// time complexity: O(n) where n is the number of nodes in the linked list
// space complexity: O(1)