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
    let maxLength: number = 0;
    while(queue.length > 0) {
        const length = queue.length;
        for(let i = 0; i < length; i++) {
            const current = queue.shift();
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        maxLength++
    }
    return maxLength;
};