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
 * @return {number[][]}
 */

// iteration by queue
var levelOrder = function(root) {
    if(!root)return[]
    let q=[root]
    let ans=[]
    while(q.length){
        let levelsize=q.length
        let level=[]
        for(let i=0;i<levelsize;i++){
            let cur=q.shift()
            level.push(cur.val)
            cur.left&&q.push(cur.left)
            cur.right&&q.push(cur.right)
        }
        ans.push(level)
    }
    return ans
};
//time complexity: O(n)
//space complexity: O(n)

// by recursion
let ans=[]
    function traversal(cur, level){
        if (!cur) return;
        if (!ans[level]) ans[level] = [];
        ans[level].push(cur.val);
        traversal(cur.left, level + 1);
        traversal(cur.right, level + 1);
    }
    traversal(root,0)
    return ans