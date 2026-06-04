//approch 1: convert linked list to array and check if array is palindrome
function isPalindrome(head) {
    let arr = [];
    let temp = head;
    while (temp) {
        arr.push(temp.val);
        temp = temp.next;
    }
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] !== arr[right]) return false;
        left++;
        right--;
    }
    return true;
}
// time complexity: O(n)
// space complexity: O(n)

//approch 2: reverse the second half of the linked list and compare it with the first half
function isPalindrome(head) {
    // finding the middle
    let slow=fast=head
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
    }

    // reverse the second half
    let prev=null
    let cur=slow
    while(cur){
        tmp=cur.next
        cur.next=prev
        prev=cur
        cur=tmp
    }

    // checking for palindrome
    firstlist=head
    secondlist=prev
    while(secondlist){
        if(secondlist.val!=firstlist.val){
            return false
        }
        firstlist=firstlist.next
        secondlist=secondlist.next
    }
    return true
}
// time complexity: O(n)
// space complexity: O(1)