/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root) return root
    let traversal=(cur)=>{
        if(cur.left){
            cur.left.next=cur.right
        }
        if(cur.right && cur.next){
            cur.right.next=cur.next.left
        }
        cur.left&&traversal(cur.left)
        cur.right&&traversal(cur.right)
    }
    traversal(root)
    return root
};