/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum=0
    let carry=0
    let digit=0
    let sentinel=new ListNode()
    let ans=sentinel
    while(l1 || l2 || carry){
        sum= (!l1? 0 : l1.val) + (!l2 ?0 : l2.val) + carry
        carry=Math.floor(sum/10)
        digit=Math.floor(sum%10)
        let newnode=new ListNode(digit)
        sentinel.next=newnode
        l1=l1 && l1.next
        l2=l2 && l2.next
        sentinel=sentinel.next
    }
    return ans.next
};

// time complexity: O(max(m,n)) where m and n are the lengths of the two linked lists
// space complexity: O(max(m,n)) for the new linked list created to store the sum of the two numbers represented by the linked lists