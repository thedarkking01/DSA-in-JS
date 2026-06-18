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
    let n=0
    let pA=headA
    while(pA){
        ++n
        pA=pA.next
    }

    let m=0
    let pB=headB
    while(pB){
        ++m
        pB=pB.next
    }

    let diff=Math.abs(n-m)

    // i want this - first list to small , second ll to large
    if(n>m){
        tmp=headA
        headA=headB
        headB=tmp
    }

    for(let i=0;i<diff;i++){
        headB=headB.next
    }

    pA=headA
    pB=headB
    while(pA!=pB){
        pA=pA.next
        pB=pB.next
    }
    return pA
};