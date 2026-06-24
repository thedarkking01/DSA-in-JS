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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let hashroot=serialize(root)
    let hashsubroot=serialize(subRoot)
    return hashroot.includes(hashsubroot)
};
let serialize=function(root){
    let hash=""
    let traversal=(cur)=>{
        if(!cur){
            hash=hash+'-#'
            return
        }
        hash=hash+'-'+cur.val;
        traversal(cur.left)
        traversal(cur.right)
    }
    traversal(root)
    return hash
}