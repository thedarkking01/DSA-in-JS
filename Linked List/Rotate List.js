/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head||!head.next) return head

    let length=0
    let cur=head
    // calculate the length of the linked list
    while(cur){
        cur=cur.next
        length++
    }
    // if k is greater than the length of the linked list, we can rotate the linked list k%length times
    let s=f=head;
    k=k%length
    for(let i=0;i<k;i++){
        f=f.next
    }
    // move the fast pointer k steps ahead of the slow pointer, and then move both pointers until the fast pointer reaches the end of the linked list. At this point, the slow pointer will be at the new head of the rotated linked list.
    while(f.next){
        s=s.next
        f=f.next
    }

    // rotate the linked list by making the next pointer of the last node point to the head of the linked list, and then making the next pointer of the slow pointer point to null to mark the end of the rotated linked list.
    f.next=head
    let newhead=s.next
    s.next=null
    return newhead
};