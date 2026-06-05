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

//approch 1: calculate the length of the linked list and find the position of the node to be removed from the start of the linked list
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

//approch 2: use two pointers to find the node to be removed in one pass
var removeNthFromEnd = function(head, n) {
    let sentinel=new ListNode()
    sentinel.next=head
    let second=sentinel
    let first=sentinel
    // move the fast pointer n steps ahead
    for(let i=0;i<n;i++){
        first=first.next
    }
    // move the slow and fast pointers together until the fast pointer reaches the end
    while(first.next){
        second=second.next
        first=first.next
    }
    second.next=second.next.next
    return sentinel.next
};
// time complexity: O(n) where n is the number of nodes in the linked list
// space complexity: O(1)
