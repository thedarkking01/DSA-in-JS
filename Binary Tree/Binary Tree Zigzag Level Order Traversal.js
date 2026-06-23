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
var zigzagLevelOrder = function(root) {
    // by iterative
    if(!root) return []
    let q=[root]
    let level=0
    let ans=[]
    while(q.length){
        let levelarr=[]
        let levelsize=q.length
        for(let i=0;i<levelsize;i++){
            let cur=q.shift()
            if(level%2==0){
                levelarr.push(cur.val)
            }else{
                levelarr.unshift(cur.val)
            }
            cur.left && q.push(cur.left)
            cur.right && q.push(cur.right)
        }
        ans.push(levelarr)
        level++
    }
    return ans

    // by recursion
    let ans=[]
    let recursive=(cur,level)=>{
        if (!cur) return;
        if (!ans[level]) ans[level] = [];
        if(level%2==0){
            ans[level].push(cur.val)
        }else{
            ans[level].unshift(cur.val)
        }
        recursive(cur.left,level+1)
        recursive(cur.right,level+1)
    }
    recursive(root,0)
    return ans
};