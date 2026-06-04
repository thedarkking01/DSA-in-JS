/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    //put all headB nodes in set
    let list=new Set()
    while(headB){
        list.add(headB)
        headB=headB.next
    }

    //check for each element of headA if they are present in set
    while(headA){
        if(list.has(headA)){
            return headA
        }
        headA=headA.next
    }
    return null
};

// time= o(n+m) where n and m are the lengths of the two linked lists
// space= o(n) where n is the length of the second linked list