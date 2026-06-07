/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let sentinel=new ListNode()
    let start=sentinel
    while(list1&&list2){
        if(list1.val<=list2.val){
            sentinel.next=list1
            list1=list1.next
        }
        else{
            sentinel.next=list2
            list2=list2.next
        }
        sentinel=sentinel.next
    }
    // sentinel.next = list1 || list2;
    //or
    if(list1){
        sentinel.next=list1
    }
    else{
        sentinel.next=list2
    }

    return start.next
};
// time complexity: O(m+n) where m and n are the lengths of the two linked lists
// space complexity: O(1) since we are not using any extra space to store the merged linked list, we are just rearranging the existing nodes of the two linked lists.