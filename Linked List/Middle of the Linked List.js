
// approch 1: convert the ll to array and return the middle element
function middleNode(head) {
    let arr = [];
    let curr = head;
    while (curr) {
        arr.push(curr);
        curr = curr.next;
    }
    return arr[Math.floor(arr.length / 2)];
}

// approch 2: use two pointer slow and fast, when fast reaches the end, slow will be at the middle
function middleNode(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}