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
    if(!root) return 0;
    let noOfGoodNodes = 0;
    const dfs = (root, max) => {
        if(root.val >= max) noOfGoodNodes++;
        const newMax = Math.max(max, root.val)
        if(root.left) dfs(root.left, newMax)
        if(root.right) dfs(root.right, newMax)
    }
    
    dfs(root, root.val)
    
    return noOfGoodNodes;
};