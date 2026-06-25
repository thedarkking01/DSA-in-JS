/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// by bottom up recursion
var lowestCommonAncestor = function(root, p, q) {
    let lca=null
    let traversal=(cur)=>{
        let count=0
        if(!cur) return 0
        let lefttree=traversal(cur.left)
        let righttree=traversal(cur.right)
        if(cur.val===p.val || cur.val===q.val){
            count++
        }
        count=count + lefttree + righttree
        if(count==2 && !lca){
            lca=cur
        }
        return count
    }
    traversal(root)
    return lca
};