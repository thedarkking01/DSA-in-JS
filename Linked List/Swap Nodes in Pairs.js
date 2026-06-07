// approch - 1 : iterative approach

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head||!head.next) return head
    let dummy=new ListNode()
    dummy.next=head
    let prev=dummy
    let cur=head
    let n=head.next
    while(cur && n){
        prev.next=n
        cur.next=n.next
        n.next=cur
        prev=cur
        cur=prev.next
        n=cur&&cur.next
    }
    return dummy.next
};
// time complexity: O(n) where n is the number of nodes in the linked list
// space complexity: O(1) 