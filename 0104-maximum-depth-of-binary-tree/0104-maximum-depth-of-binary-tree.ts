/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const deapthFirstValues = (root) => {
    
}

function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    const queue = [root];
    const results = [];
    let maxLength: number = 0;
    while(queue.length > 0) {
        let length: number = queue.length;
        for(let i: number = 0; i < length; i++) { 
            const current = queue.shift();
            if(current.left !== null) queue.push(current.left);
            if(current.right !== null) queue.push(current.right);
        }
        maxLength++;
    }
    return maxLength;
};