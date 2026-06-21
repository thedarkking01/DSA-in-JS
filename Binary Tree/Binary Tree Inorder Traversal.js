/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// by recursion
var inorderTraversal = function(root) {
    let ans=[]
    function traversal(cur){
        if(!cur)return;
        traversal(cur.left)
        ans.push(cur.val)
        traversal(cur.right)
    }
    traversal(root)
    return ans
};

//by iteration
var inorderTraversal = function(root) {
    let ans=[]
    let stack=[]
    let cur=root
    while(cur||stack.length){
        while(cur){
            stack.push(cur)
            cur=cur.left
        }
        cur=stack.pop()
        ans.push(cur.val)
        cur=cur.right
    }
    return ans
};