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
var isValidBST = function(root) {
    
    const isValidTree = (root, max, min) => {
        if(!root) return true;
        const value = root.val;
        if((min !== null && value <= min) || (max !== null && value >= max)) return false;
        return isValidTree(root.left, root.val, min) && isValidTree(root.right, max, root.val)
    }
    
    return isValidTree(root, null, null)
    
};