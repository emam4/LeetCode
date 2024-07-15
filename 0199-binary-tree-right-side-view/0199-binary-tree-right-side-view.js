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

function rightSideView(root) {
    if(!root) return [];
    const queue = [root];
    const results = [];
    while(queue.length > 0) {
        let length = queue.length;
        for(let i = 0; i < length; i++) { 
            const current = queue.shift();
            if(current.left !== null) queue.push(current.left);
            if(current.right !== null) queue.push(current.right);
            if(i === length-1) results.push(current.val)
        }
        
    }
    return results;
};