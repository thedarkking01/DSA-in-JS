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
var rightSideView = function(root) {
    // by iterative
    if(!root) return []
    let q=[root]
    let ans=[]
    while(q.length){
        let levelsize=q.length
        for(let i=0;i<levelsize;i++){
            let cur=q.shift()
            // push the only first node that level of ans array
            i==0 && ans.push(cur.val)
            // push the children back in queue from right to left 
            cur.right && q.push(cur.right)
            cur.left && q.push(cur.left)
        }
    }
    return ans
};