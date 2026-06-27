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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // top down 
    let ans=null
    let traversal=(cur)=>{
        if(cur.val==val){
            ans=cur
        }
        cur.left&&traversal(cur.left)
        cur.right&&traversal(cur.right)
    }
    traversal(root)
    return ans
    
    // bottom up 
    var searchBST = function (root, val) {
      if (!root || root.val === val) return root;
  
      return root.val < val ?
          searchBST(root.right, val) :
          searchBST(root.left, val);
  };
};