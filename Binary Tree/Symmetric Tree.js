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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // by recursive - bottom up
    let ismirror=(left,right)=>{
        // if leaf ,return true
        if(!left && !right) return true
        if(!left || !right) return false
        return left.val===right.val && 
               ismirror(left.left,right.right)&&
               ismirror(left.right,right.left) 
    }
    return ismirror(root.left,root.right)

    //by iterative 
    let q=[root.left,root.right]
    while(q.length){
        p1=q.shift()
        p2=q.shift()
        if(!p1 && !p2) continue
        if(!p1 || !p2) return false
        if(p1.val!=p2.val) return false
        q.push(p1.left,p2.right)
        q.push(p1.right,p2.left)
    }
    return true
};