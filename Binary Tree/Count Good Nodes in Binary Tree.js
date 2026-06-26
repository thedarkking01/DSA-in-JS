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
 * @return {number}
 */
var goodNodes = function(root) {
    // top down 
    let ans=[]
    let traversal=(cur,maxseensofar)=>{
        if(cur.val>=maxseensofar){
            ans++
        }
        let curmax=Math.max(maxseensofar,cur.val)
        cur.left&&traversal(cur.left,curmax)
        cur.right&&traversal(cur.right,curmax)
    }
    traversal(root,-Infinity)
    return ans
};