// Approach 1: Hashmap
function hasCycle(head) {
    let seen = new Set();
    while (head) {
        if (seen.has(head)) return true;
        seen.add(head);
        head = head.next;
    }
    return false;
}
// time complexity: O(n)
// space complexity: O(n)

// Approach 2: Two Pointers (Floyd’s Tortoise and Hare Algorithm)
function hasCycle(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}
// time complexity: O(n)
// space complexity: O(1)