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
 * @return {TreeNode}
 */
const invertTree = function(root) {
    if(!root) return null;
        
    if(root.left || root.right) {
        let holder = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(holder);
      }
    
    return root
};