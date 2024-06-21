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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true;
    let queue_p = [p];
    let queue_q = [q];
    if(queue_p.length !== queue_q.length ||
      (!queue_p.length && !queue_q.length)) return false
    while (queue_p.length > 0 && queue_q.length > 0) {  
        const current_p: TreeNode = queue_p.shift();
        const current_q: TreeNode = queue_q.shift();
        if (current_p?.val !== current_q?.val) return false;
        if ((current_p.left && !current_q.left) || (!current_p.left && current_q.left)) return false;
        if ((current_p.right && !current_q.right) || (!current_p.right && current_q.right)) return false;
        if (current_p.left !== null) queue_p.push(current_p.left);
        if (current_p.right !== null) queue_p.push(current_p.right);
        if (current_q.left !== null) queue_q.push(current_q.left);
        if (current_q.right !== null) queue_q.push(current_q.right);
    }

    return true;
};